import { useRef } from 'react'
import { useClickOutside } from '../../hooks'
import { Button } from '..'
import { createPortal } from 'react-dom'

interface DialogProps {
    isVisible: boolean
    setIsVisible: (value: boolean) => void
    handler: () => void
    message: string
}

const Dialog = ({ isVisible, setIsVisible, handler, message }: DialogProps) => {
    const ref = useRef(null)

    useClickOutside(isVisible, ref, () => setIsVisible(false))

    if (!isVisible) return null
    return createPortal(
        <div className=' fixed top-0 left-0 z-10 h-screen w-screen overflow-hidden bg-gray-900 bg-opacity-80 backdrop-blur-sm'>
            <div
                ref={ref}
                className='relative left-1/2 top-1/2 w-[18rem] -translate-x-1/2 -translate-y-1/2  animate-[textFocusIn_0.3s_linear] rounded bg-white px-8 py-6 shadow dark:bg-slate-800 sm:w-max'
            >
                <div className='grid justify-center gap-y-4'>
                    <div className='text-base font-medium text-gray-800 dark:text-slate-200'>{message}</div>
                    <div className='flex items-center space-x-6'>
                        <Button type='cancel' label='Delete' handler={() => handler()} />
                        <Button type='secondary' label='Cancel' handler={() => setIsVisible(false)} />
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('root')
    )
}

export default Dialog
