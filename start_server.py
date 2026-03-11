#!/usr/bin/env python3
"""
Permanent server for: Listen and Choose a Response
Host/port are read from server.json so they stay consistent.
Run: python3 start_server.py
"""
import http.server
import json
import os
import webbrowser

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CONFIG   = os.path.join(BASE_DIR, "server.json")

with open(CONFIG) as f:
    cfg = json.load(f)

HOST = cfg["host"]
PORT = cfg["port"]

os.chdir(BASE_DIR)

class Handler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, fmt, *args):
        print(f"  {self.address_string()} - {fmt % args}")

print(f"\n🎧  Listen & Choose a Response")
print(f"   http://{HOST}:{PORT}")
print(f"   Press Ctrl+C to stop\n")

webbrowser.open(f"http://{HOST}:{PORT}")

with http.server.HTTPServer((HOST, PORT), Handler) as httpd:
    httpd.serve_forever()
