import React, { useState } from 'react'
import { questions } from '../data/questions'

export default function Quiz({ onFinish }) {
  const [answers, setAnswers] = useState({})
  const [step, setStep] = useState(0)

  const q = questions[step]

  function choose(opt) {
    const areaKey = opt.area.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    const updatedAnswers = { ...answers, [q.id]: areaKey }

    if (step + 1 < questions.length) {
      setAnswers(updatedAnswers)
      setStep(s => s + 1)
    } else {
      // ✅ Usar respuestas actualizadas
      const counts = {}
      Object.values(updatedAnswers).forEach(area => {
        counts[area] = (counts[area] || 0) + 1
      })

      // Encontrar el área con más respuestas
      const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1])
      const topArea = sorted[0][0]
      const topCount = sorted[0][1]
      const isTie = sorted.filter(([_, c]) => c === topCount).length > 1

      // Mapeo de resultados
      const mapping = {
        ingenieria: {
          title: 'Ingeniería',
          desc: 'Te gusta resolver problemas y construir soluciones que funcionan.',
        },
        diseno: {
          title: 'Diseño',
          desc: 'Eres creativo y disfrutas comunicar visualmente tus ideas.',
        },
        salud: {
          title: 'Salud',
          desc: 'Tienes vocación de servicio y disfrutas cuidar de otros.',
        },
        humanidades: {
          title: 'Humanidades',
          desc: 'Te apasiona entender a las personas, la cultura y la sociedad.',
        },
      }

      const result = isTie
        ? {
            title: 'Vocación múltiple',
            desc: 'Tienes varias habilidades, ¡explora tus opciones!',
          }
        : mapping[topArea] || {
            title: 'Vocación múltiple',
            desc: 'Tienes varias habilidades, ¡explora tus opciones!',
          }

      onFinish(result)
    }
  }

  return (
    <section className="quiz card anim">
      <div className="heading">
        Pregunta {step + 1} / {questions.length}
      </div>
      <h2 className="q">{q.question}</h2>
      <div className="options">
        {q.options.map((o, i) => (
          <button
            key={`${q.id}-${i}`}
            className="option"
            onClick={() => choose(o)}
          >
            <strong>{o.text}</strong>
          </button>
        ))}
      </div>
      <div className="note">
        💡 Consejo: Para asegurar un buen resultado, responde de manera espontánea.
      </div>
    </section>
  )
}

