import { ShortCut } from '..'
import { useRef } from 'react'
import { useClickOutside } from '../../hooks'

function Search({ isVisible, setIsVisible }) {
    const ref = useRef(null)
    useClickOutside(isVisible, ref, () => setIsVisible(false))

    return (
        <div className='fixed top-0 left-0 z-40 w-screen h-screen overflow-hidden bg-gray-900 bg-opacity-80 backdrop-blur-sm'>
            <div
                ref={ref}
                className='absolute flex px-4 py-2 text-gray-200 -translate-x-1/2 bg-white dark:bg-gray-800 rounded shadow top-1/3 left-1/2 animate-[textFocusIn_0.3s_linear]'
            >
                <input
                    placeholder='Enter something here...'
                    className='h-10 text-lg bg-transparent focus:outline-none text-slate-800 dark:text-slate-200'
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
