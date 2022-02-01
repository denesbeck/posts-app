import { useState, forwardRef, useImperativeHandle, useRef } from 'react'
import { useClickOutside } from '../../hooks'
import { Button } from '..'

const ConfirmationDialog = forwardRef(({ handler, message }: any, ref) => {
    const confirmationDialogRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useClickOutside(isVisible, confirmationDialogRef, () => setIsVisible(false))

    useImperativeHandle(ref, () => ({
        setIsVisible,
    }))

    if (!isVisible) return null
    return (
        <div className='fixed top-0 left-0 z-40 w-screen h-screen overflow-hidden bg-gray-900 bg-opacity-80 backdrop-blur-sm'>
            <div
                ref={confirmationDialogRef}
                className='relative px-8 py-6 -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow w-max left-1/2 top-1/2 animate-[textFocus_0.3s_linear]'
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
})

export default ConfirmationDialog
