import { IoIosArrowUp } from 'react-icons/io'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    const scrollToTop = () => {
        const screen = document.documentElement

        screen.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        })
    }, [])

    if (!isVisible) return null
    return createPortal(
        <div
            onClick={() => scrollToTop()}
            className='fixed bottom-24 right-6 z-10 animate-slideInBottom cursor-pointer rounded-full bg-teal-500 p-2 text-gray-200 shadow-md hover:bg-teal-400 sm:right-8 sm:mb-2 lg:right-10 lg:bottom-28 lg:mb-0 xl:bottom-32 xl:right-12 xl:p-3'
        >
            <IoIosArrowUp className='h-8 w-8' />
        </div>,
        document.getElementById('root')
    )
}

export default ScrollToTopButton
