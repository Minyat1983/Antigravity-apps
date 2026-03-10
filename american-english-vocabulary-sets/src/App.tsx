import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, GraduationCap, Search, Loader2, Download, Copy, Check, AlertCircle, Volume2, VolumeX, RefreshCw } from 'lucide-react';
import { generateVocabulary, generateSpeech, VocabTerm, IS_OFFLINE } from './services/gemini';

const CEFR_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

function AudioButton({ text }: { text: string }) {
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  const playAudio = async () => {
    if (playing) return;
    setPlaying(true);
    setError(false);

    try {
      const base64Audio = await generateSpeech(text);

      if (!base64Audio) {
        // Fallback to Web Speech API if AI TTS is unavailable (Offline mode)
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.onend = () => {
          setPlaying(false);
        };
        utterance.onerror = (e) => {
          console.error("Web Speech API error:", e);
          setError(true);
          setPlaying(false);
        };
        window.speechSynthesis.speak(utterance);
        return;
      }

      // 1. Decode base64 to binary
      const binaryString = window.atob(base64Audio);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      // 2. Convert to 16-bit PCM (Int16Array)
      // The Gemini TTS returns raw 16-bit PCM data at 24kHz
      const pcmData = new Int16Array(bytes.buffer);

      // 3. Initialize AudioContext
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({
        sampleRate: 24000,
      });

      // 4. Create AudioBuffer
      const audioBuffer = audioCtx.createBuffer(1, pcmData.length, 24000);
      const channelData = audioBuffer.getChannelData(0);

      // 5. Normalize PCM to Float32 (-1.0 to 1.0)
      for (let i = 0; i < pcmData.length; i++) {
        channelData[i] = pcmData[i] / 32768.0;
      }

      // 6. Play the buffer
      const source = audioCtx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioCtx.destination);

      source.onended = () => {
        setPlaying(false);
        audioCtx.close();
      };

      source.start();
    } catch (err) {
      console.error("Audio playback error:", err);
      setError(true);
      setPlaying(false);
    }
  };

  return (
    <button
      onClick={playAudio}
      disabled={playing}
      className={`p-1.5 rounded-full transition-all ${error
        ? 'text-red-400 hover:bg-red-50'
        : 'text-indigo-600 hover:bg-indigo-50 active:scale-95'
        } ${playing ? 'animate-pulse opacity-50' : ''}`}
      title={error ? "Audio unavailable" : "Listen to pronunciation"}
    >
      {error ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
    </button>
  );
}

export default function App() {
  const [topic, setTopic] = useState('');
  const [level, setLevel] = useState('B1');
  const [loading, setLoading] = useState(false);
  const [vocab, setVocab] = useState<VocabTerm[]>([]);
  const [seenTerms, setSeenTerms] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async (e?: React.FormEvent, isNewSet: boolean = false) => {
    if (e) e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setError(null);
    try {
      // If it's a completely new search (from the main form), clear seen terms
      const currentExclude = isNewSet ? seenTerms : [];
      const result = await generateVocabulary(topic, level, currentExclude);

      setVocab(result);
      // Add new terms to the seen list
      setSeenTerms(prev => [...prev, ...result.map(v => v.term)]);
    } catch (err) {
      setError('Failed to generate vocabulary. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (vocab.length === 0) return;

    const header = "| Term (US) | Part of Speech | CEFR Level | Definition | American Context Example |\n| :--- | :--- | :--- | :--- | :--- |\n";
    const rows = vocab.map(v => `| ${v.term} | ${v.pos} | ${v.level} | ${v.definition} | ${v.example} |`).join('\n');

    navigator.clipboard.writeText(header + rows);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-indigo-100">
      {/* Header */}
      <header className="border-b border-black/5 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <h1 className="font-semibold text-lg tracking-tight">Curriculum Designer <span className="text-indigo-600">US</span></h1>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
            <span className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              CEFR Aligned
            </span>
            {IS_OFFLINE && (
              <span className="flex items-center gap-1.5 px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full border border-amber-100 animate-pulse">
                <AlertCircle className="w-3 h-3" />
                Offline Mode
              </span>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-[1.1]"
          >
            Generate American English <br />
            <span className="text-indigo-600 italic font-serif">Vocabulary Sets.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg max-w-2xl"
          >
            Create professional, level-appropriate word lists for your students using strictly North American standards and cultural context.
          </motion.p>
        </div>

        {/* Input Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleGenerate}
          className="bg-white border border-black/5 rounded-2xl p-6 shadow-sm mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7">
              <label htmlFor="topic" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Topic or Theme
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="topic"
                  type="text"
                  placeholder="e.g., Business Meetings, Fast Food, National Parks..."
                  value={topic}
                  onChange={(e) => {
                    setTopic(e.target.value);
                    setSeenTerms([]); // Clear history when topic changes
                  }}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none"
                  required
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <label htmlFor="level" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                CEFR Level
              </label>
              <select
                id="level"
                value={level}
                onChange={(e) => {
                  setLevel(e.target.value);
                  setSeenTerms([]); // Clear history when level changes
                }}
                className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none appearance-none cursor-pointer"
              >
                {CEFR_LEVELS.map(l => (
                  <option key={l} value={l}>{l} - {l.startsWith('A') ? 'Basic' : l.startsWith('B') ? 'Independent' : 'Proficient'}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2 flex items-end">
              <button
                type="submit"
                disabled={loading || !topic.trim()}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Generate'}
              </button>
            </div>
          </div>
        </motion.form>

        {/* Results Section */}
        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-xl flex items-center gap-3 mb-8"
            >
              <AlertCircle className="w-5 h-5" />
              <p className="font-medium">{error}</p>
            </motion.div>
          )}

          {vocab.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold tracking-tight">
                  Vocabulary Set: <span className="text-indigo-600">{topic}</span> ({level})
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleGenerate(undefined, true)}
                    disabled={loading}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-white border border-black/5 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                  >
                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                    New Set
                  </button>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-white border border-black/5 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    {copied ? 'Copied' : 'Copy Table'}
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-black/5 shadow-sm bg-white">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50 border-b border-black/5">
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Term (US)</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">POS</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Level</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Definition</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">American Context Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/5">
                    {vocab.map((item, idx) => (
                      <motion.tr
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="hover:bg-indigo-50/30 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-indigo-600">{item.term}</span>
                            <AudioButton text={item.term} />
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 italic">{item.pos}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded uppercase">
                            {item.level}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm leading-relaxed">{item.definition}</td>
                        <td className="px-6 py-4 text-sm text-gray-600 italic leading-relaxed">"{item.example}"</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {!loading && vocab.length === 0 && !error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-24 text-center"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-gray-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-400">No vocabulary generated yet</h3>
              <p className="text-gray-400 text-sm">Enter a topic and level above to get started.</p>
            </motion.div>
          )}

          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-24 text-center"
            >
              <Loader2 className="w-12 h-12 text-indigo-600 animate-spin mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600">Designing your curriculum...</h3>
              <p className="text-gray-400 text-sm italic">Ensuring strict US standards and cultural context.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 py-12 mt-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-400 mb-4">
            Designed for American English Educators. Powered by Gemini AI.
          </p>
          <div className="flex justify-center gap-6 text-xs font-bold uppercase tracking-widest text-gray-300">
            <span>American Spelling</span>
            <span>US Lexicon</span>
            <span>Cultural Context</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
