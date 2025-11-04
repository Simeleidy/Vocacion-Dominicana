import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Quiz from './components/Quiz'
import Result from './components/Result'

export default function App() {
  const [result, setResult] = useState(null)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode === 'true') setDark(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', dark)
  }, [dark])

  return (
    <div className={dark ? 'app dark' : 'app'}>
      <Header onToggleDark={() => setDark(d => !d)} dark={dark} />
      <main className="container">
        {!result ? (
          <Quiz onFinish={res => setResult(res)} />
        ) : (
          <Result data={result} onReset={() => setResult(null)} />
        )}
      </main>
      <footer className="footer">
        Hecho con orgullo dominicano 🇩🇴 • Vocación Dominicana 2025
      </footer>
    </div>
  )
}
