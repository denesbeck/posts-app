import { IoIosArrowUp } from 'react-icons/io'
import { useState, useEffect } from 'react'

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
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        })
    }, [])

    if (!isVisible) return null
    return (
        <div
            onClick={() => scrollToTop()}
            className='fixed p-2 text-gray-200 bg-teal-500 rounded-full shadow-md cursor-pointer lg:right-10 xl:p-3 hover:bg-teal-400 lg:mb-0 bottom-24 sm:mb-2 sm:right-8 lg:bottom-28 right-6 xl:bottom-32 xl:right-12'
        >
            <IoIosArrowUp className='w-8 h-8' />
        </div>
    )
}

export default ScrollToTopButton
