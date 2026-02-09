import React, { useState } from 'react'

const items = [
  { q: 'How does the AI analysis work?', a: 'Our AI ingests your pitch, market data and comparable signals to produce a risk & fit report. It augments mentor reviews, not replaces them.' },
  { q: 'Is the virtual currency real money?', a: 'Yes — investments use on‑chain settlement and fiat rails via our payments partner. Wallets map to real legal entities.' },
  { q: 'How are milestone payments released?', a: 'Milestones are validated by mentors and automated smart contracts release funds when conditions are met.' },
]

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="w-full py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-white mb-4">Frequently asked questions</h3>
        <div className="space-y-3">
          {items.map((it, idx) => (
            <div key={it.q} className="bg-white/3 border border-white/6 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between px-4 py-3 text-left"
              >
                <div>
                  <div className="font-semibold text-white">{it.q}</div>
                  <div className="text-xs text-slate-400 mt-1 hidden sm:block">{it.a.substring(0, 80)}{it.a.length > 80 ? '…' : ''}</div>
                </div>
                <div className="text-slate-300">{open === idx ? '−' : '+'}</div>
              </button>

              {open === idx && (
                <div className="px-4 pb-4 pt-0 text-slate-300 text-sm">
                  {it.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
