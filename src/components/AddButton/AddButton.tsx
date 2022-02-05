import { FiPlus } from 'react-icons/fi'
import { createPortal } from 'react-dom'
import { InputDialog } from '..'
import { useState } from 'react'

function AddButton() {
    const [isVisible, setIsVisible] = useState(false)

    return createPortal(
        <>
            {isVisible ? <InputDialog isVisible={isVisible} setIsVisible={setIsVisible} /> : null}
            <div
                onClick={() => setIsVisible(true)}
                className='fixed bottom-6 right-6 z-10 animate-slideInBottom cursor-pointer rounded-full bg-teal-500 p-2 text-gray-200 shadow-md hover:bg-teal-400 sm:bottom-8 sm:right-8 lg:right-10 lg:bottom-10 xl:bottom-12 xl:right-12 xl:p-3'
            >
                <FiPlus className='h-8 w-8' />
            </div>
        </>,
        document.getElementById('root')
    )
}

export default AddButton
