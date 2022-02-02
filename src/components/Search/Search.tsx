import { ShortCut } from '..'
import { useRef, useContext, useEffect, useState, ChangeEvent } from 'react'
import { useClickOutside } from '../../hooks'
import GlobalContext from '../../contexts/globalContext'

interface SearchProps {
    isVisible: boolean
    setIsVisible: (value: boolean) => void
}

function Search({ isVisible, setIsVisible }: SearchProps) {
    const globalContext = useContext(GlobalContext)
    const [inputValue, setInputValue] = useState('')

    const ref = useRef(null)
    useClickOutside(isVisible, ref, () => setIsVisible(false))

    useEffect(() => {
        const keydownEventHandlerEnter = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                globalContext.dispatch({ type: 'SEARCH_STRING', value: inputValue })
                setIsVisible(false)
            }
        }
        document.addEventListener('keydown', keydownEventHandlerEnter)

        return () => {
            document.removeEventListener('keydown', keydownEventHandlerEnter)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputValue])

    return (
        <div className='fixed top-0 left-0 z-40 w-screen h-screen overflow-hidden bg-gray-900 bg-opacity-80 backdrop-blur-sm'>
            <div
                ref={ref}
                className='min-w-[18rem] absolute flex px-4 py-2 text-gray-200 -translate-x-1/2 bg-white dark:bg-gray-800 rounded shadow top-1/3 left-1/2 animate-[textFocusIn_0.3s_linear]'
            >
                <input
                    onChange={(e: ChangeEvent) => setInputValue((e.target as HTMLInputElement).value)}
                    value={inputValue}
                    placeholder='Search...'
                    className='w-full h-10 text-lg bg-transparent focus:outline-none text-slate-800 dark:text-slate-200'
                    autoFocus
                    autoCorrect='off'
                    autoComplete='off'
                />
                <div className='relative flex ml-4 space-x-2 top-1'>
                    <ShortCut label={'Enter'} />
                    <ShortCut label={'Esc'} />
                </div>
            </div>
        </div>
    )
}

export default Search
