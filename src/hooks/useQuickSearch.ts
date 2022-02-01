import { useEffect } from 'react'

function useQuickSearch(handler: (value: boolean) => void) {
    useEffect(() => {
        const keydownEventHandlerEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && handler !== null) {
                handler(false)
            }
        }
        const keydownEventHandlerCtrlB = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key === 'b' && handler !== null) {
                handler(true)
            }
        }
        document.addEventListener('keydown', keydownEventHandlerEscape)
        document.addEventListener('keydown', keydownEventHandlerCtrlB)
        return () => {
            document.removeEventListener('keydown', keydownEventHandlerEscape)
            document.removeEventListener('keydown', keydownEventHandlerCtrlB)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default useQuickSearch
