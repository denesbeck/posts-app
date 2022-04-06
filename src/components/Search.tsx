import { ShortCut } from 'components'
import { useRef, useContext, useEffect, useState, ChangeEvent } from 'react'
import { useClickOutside } from 'hooks'
import { createPortal } from 'react-dom'
import GlobalContext from 'contexts/globalContext'

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

    return createPortal(
        <div className='fixed top-0 left-0 z-10 h-screen w-screen overflow-hidden bg-gray-900 bg-opacity-80 backdrop-blur-sm'>
            <div
                ref={ref}
                className='absolute top-1/3 left-1/2 flex min-w-[18rem] -translate-x-1/2 animate-[textFocusIn_0.3s_linear] rounded bg-white px-4 py-2 text-gray-200 shadow dark:bg-gray-800'
            >
                <input
                    onChange={(e: ChangeEvent) => setInputValue((e.target as HTMLInputElement).value)}
                    value={inputValue}
                    placeholder='Search...'
                    className='h-10 w-full bg-transparent text-lg text-slate-800 focus:outline-none dark:text-slate-200'
                    autoFocus
                    autoCorrect='off'
                    autoComplete='off'
                />
                <div className='relative top-1 ml-4 flex space-x-2'>
                    <ShortCut label={'Enter'} />
                    <ShortCut label={'Esc'} />
                </div>
            </div>
        </div>,
        document.getElementById('root')
    )
}

export default Search
