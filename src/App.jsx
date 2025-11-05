import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Quiz from './components/Quiz'
import Result from './components/Result'

export default function App() {
  const [result, setResult] = useState(null)
  const [dark, setDark] = useState(false)
  const [started, setStarted] = useState(false) // 👈 Nueva variable para controlar si ya comenzó el test

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode === 'true') setDark(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', dark)
  }, [dark])

  function handleStart() {
    setStarted(true)
  }

  return (
    <div className={dark ? 'app dark' : 'app'}>
      <Header onToggleDark={() => setDark(d => !d)} dark={dark} />
      <main className="container">
        {!started ? (
          // 👇 Introducción antes de comenzar el test
          <section className="intro card anim">
            <h2>Bienvenido a <strong>Vocación Dominicana 🇩🇴</strong></h2>
            <p>
              Esta herramienta ha sido creada para orientarte en la elección de una carrera universitaria o técnica,
              según tus gustos, habilidades e intereses personales.
            </p>
            <p>
              Contesta las preguntas de forma espontánea y descubre en qué área podrías destacar profesionalmente.
            </p>
            <p>Tu futuro empieza con conocerte mejor. 🌟</p>

            <button className="btn btn-primary" onClick={handleStart}>
              ¡Comenzar ahora!
            </button>
          </section>
        ) : !result ? (
          <Quiz onFinish={res => setResult(res)} />
        ) : (
          <Result data={result} onReset={() => { setResult(null); setStarted(false) }} />
        )}
      </main>

      <footer className="footer">
        Hecho con orgullo dominicano 🇩🇴 • Vocación Dominicana 2025
      </footer>
    </div>
  )
}


