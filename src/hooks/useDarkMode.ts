import { useEffect, useState } from 'react'

function useDarkMode() {
    const [isDark, setIsDark] = useState(false)
    const root = document.getElementById('root')

    const toggleTheme = () => {
        setIsDark((prevState) => !prevState)
    }

    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDark(true)
        }
    }, [])

    useEffect(() => {
        isDark ? root.classList.add('dark') : root.classList.remove('dark')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDark])

    return {
        isDark,
        toggleTheme,
    }
}

export default useDarkMode
