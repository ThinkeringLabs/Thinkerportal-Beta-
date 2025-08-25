import React, { useState } from 'react';

const THEME = {
  purple: "#8E4BFF",
  green: "#20D07B",
  navy: "#0E1230"
};

export default function App() {
  const [tab, setTab] = useState("Profile");

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow px-4 py-3 flex justify-between">
        <h1 className="font-bold text-lg" style={{color: THEME.navy}}>Thinkerbot Portal</h1>
        <nav className="flex gap-4">
          {["Profile","My Journey","Network","Resources"].map(t=>(
            <button key={t} onClick={()=>setTab(t)} className={tab===t?"text-purple-600 font-semibold":"text-gray-600"}>
              {t}
            </button>
          ))}
        </nav>
      </header>
      <main className="flex-1 p-6">
        {tab==="Profile" && <div>Profile setup wizard coming soon…</div>}
        {tab==="My Journey" && <div>Spring 2025 journey placeholder (connect DB later)</div>}
        {tab==="Network" && <div>Network recommendations mock</div>}
        {tab==="Resources" && <div>Resources & branding assets mock</div>}
      </main>
      <footer className="bg-gray-100 p-4 text-center text-sm">
        © 2025 Thinkering Labs — Powered by Thinkerbot
      </footer>
    </div>
  )
}
