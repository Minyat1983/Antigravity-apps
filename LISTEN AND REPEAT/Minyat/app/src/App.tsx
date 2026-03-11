import { useState, useRef } from 'react';
import { practiceSets, PracticeSet } from './data/practiceSets';
import { Play, Square, Mic, RotateCcw, ChevronLeft, Eye, EyeOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [activeSet, setActiveSet] = useState<PracticeSet | null>(null);
  const [showScript, setShowScript] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<string | null>(null);
  
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);
      audioChunks.current = [];

      mediaRecorder.current.ondataavailable = (event) => {
        audioChunks.current.push(event.data);
      };

      mediaRecorder.current.onstop = () => {
        const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setRecordedAudio(audioUrl);
      };

      mediaRecorder.current.start();
      setIsRecording(true);
      setRecordedAudio(null);
    } catch (err) {
      console.error('Error accessing microphone:', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && isRecording) {
      mediaRecorder.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>Listen & Repeat</h1>
        <p className="subtitle">Master your TOEFL speaking with precision practice</p>
      </header>

      <main>
        {!activeSet ? (
          <div className="dashboard-grid">
            {practiceSets.map((set) => (
              <motion.div 
                key={set.id} 
                className="set-card"
                whileHover={{ y: -5 }}
                onClick={() => setActiveSet(set)}
              >
                <div>
                  <h3>{set.title}</h3>
                  <p className="subtitle">{set.content.length} Sentences</p>
                </div>
                <div className="play-button">
                  <Play size={18} fill="currentColor" />
                  Practice Now
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="practice-session">
            <button className="back-button" onClick={() => setActiveSet(null)}>
              <ChevronLeft size={20} />
              Back to Dashboard
            </button>

            <h2>{activeSet.title}</h2>
            
            <div className="audio-controls">
              <div className="main-playback">
                <p className="subtitle" style={{marginBottom: '0.5rem'}}>Reference Audio</p>
                <audio 
                  controls 
                  src={activeSet.audioUrl} 
                  className="audio-player-custom"
                />
              </div>

              <div className="record-section">
                <p className="subtitle">Your Turn (Record and Listen)</p>
                <button 
                  className={`record-btn ${isRecording ? 'recording' : ''}`}
                  onClick={isRecording ? stopRecording : startRecording}
                >
                  {isRecording ? <Square size={32} fill="white" /> : <Mic size={32} />}
                </button>
                <p className="subtitle">
                  {isRecording ? 'Recording...' : 'Click to record'}
                </p>

                {recordedAudio && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginTop: '1rem' }}
                  >
                    <p className="subtitle" style={{marginBottom: '0.5rem'}}>Self-Review</p>
                    <audio controls src={recordedAudio} />
                  </motion.div>
                )}
              </div>
            </div>

            <div className="script-display">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem'}}>
                <h3 style={{color: 'var(--accent)'}}>Practice Script</h3>
                <button 
                  onClick={() => setShowScript(!showScript)}
                  className="back-button" 
                  style={{marginBottom: 0}}
                >
                  {showScript ? <EyeOff size={18} /> : <Eye size={18} />}
                  {showScript ? 'Hide Script' : 'Reveal Script'}
                </button>
              </div>

              <AnimatePresence>
                {showScript && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: 'hidden' }}
                  >
                    {activeSet.content.map((line, idx) => (
                      <div key={idx} className="script-line">
                        {line}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
