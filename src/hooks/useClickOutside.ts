import { RefObject, useEffect } from 'react'

function useClickOutside<T extends HTMLElement = HTMLElement>(
    isOpen: boolean,
    ref: RefObject<T>,
    handler: (event: MouseEvent) => void
): void {
    useEffect(() => {
        const outside = (e: MouseEvent) => {
            const el = ref?.current
            if (isOpen && el && !el.contains(e.target as Node)) {
                handler(e)
            }
        }

        document.addEventListener('mousedown', outside)

        return () => {
            document.removeEventListener('mousedown', outside)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen])
}

export default useClickOutside
