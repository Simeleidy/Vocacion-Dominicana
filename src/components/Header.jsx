import React from 'react'

export default function Header({ onToggleDark, dark }) {
  return (
    <header className="header">
      <h1 className="title">Vocación Dominicana</h1>
      <button className="btn" onClick={onToggleDark}>
        {dark ? '☀️ Modo claro' : '🌙 Modo oscuro'}
      </button>
    </header>
  )
}
