import { darkTheme, lightTheme } from 'Theme'
import { GlobalStyle } from 'Theme/global'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import './lib/i18n'
import { useTranslation } from 'react-i18next'

function App () {
  const [theme, setTheme] = useState('light')
  const isDarkTheme = theme === 'dark'
  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? 'light' : 'dark'
    setTheme(updatedTheme)
    localStorage.setItem('theme', updatedTheme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
    if ((savedTheme != null) && ['dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme)
    } else if (prefersDark) {
      setTheme('dark')
    }
  }, [])

  const { t, i18n } = useTranslation()

  async function handleLanguage (lng: string) {
    await i18n.changeLanguage(lng)
    localStorage.setItem('lng', lng)
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />

      <div className='App'>
        <h1>{t('hello')}</h1>
      </div>

      <button onClick={toggleTheme}>
        {isDarkTheme
          ? <span aria-label="Light mode" role="img">🌞</span>
          : <span aria-label="Dark mode" role="img">🌜</span>}
      </button>

      <button onClick={() => { void handleLanguage('en') }}>en-US</button>
      <button onClick={() => { void handleLanguage('pt') }}>pt-BR</button>
    </ThemeProvider >
  )
}

export default App
