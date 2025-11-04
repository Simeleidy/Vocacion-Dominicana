import React from 'react'

export default function Result({ data, onReset }) {
  return (
    <section className="result card anim">
      <h2>Resultado: {data.title}</h2>
      <p>{data.desc}</p>
      <p className="dominican-voice">
        🔥 ¡Eso va con tu flow! Buscá cursos, pasantías y hablá con un orientador. ¡Tú puedes!
      </p>
      <div className="actions">
        <button className="btn" onClick={onReset}>Volver a intentar</button>
        <a
          className="btn btn-primary"
          href="#"
          onClick={(e) => {
            e.preventDefault()
            alert('Recurso sugerido: revisa la página del MINERD o universidades locales 🇩🇴')
          }}
        >
          Ver recursos
        </a>
      </div>
    </section>
  )
}
