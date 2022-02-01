import { useRef } from 'react'
import { useClickOutside } from '../../hooks'
import { Button } from '..'

interface ConfirmationDialogSchema {
    isVisible: boolean
    setIsVisible: (value: boolean) => void
    handler: () => void
    message: string
}

const ConfirmationDialog = ({ isVisible, setIsVisible, handler, message }: ConfirmationDialogSchema) => {
    const ref = useRef(null)

    useClickOutside(isVisible, ref, () => setIsVisible(false))

    if (!isVisible) return null
    return (
        <div className='fixed top-0 left-0 z-40 w-screen h-screen overflow-hidden bg-gray-900 bg-opacity-80 backdrop-blur-sm'>
            <div
                ref={ref}
                className='relative px-8 py-6 -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow w-max left-1/2 top-1/2 animate-[textFocusIn_0.3s_linear]'
            >
                <div className='grid justify-center gap-y-4'>
                    <div className='text-base font-medium text-gray-800'>{message}</div>
                    <div className='flex items-center space-x-6'>
                        <Button type='cancel' label='Delete' handler={() => handler()} />
                        <Button type='secondary' label='Cancel' handler={() => setIsVisible(false)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationDialog
