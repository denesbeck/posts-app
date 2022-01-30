import { FaQuoteRight, FaQuoteLeft, FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import { useState } from 'react'

interface PostProps {
    id: number
    title: string
    body: string
}

const Post = ({ id, title, body }: PostProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div
            className={`${
                isOpen ? 'border-teal-500' : 'border-slate-800 dark:border-slate-500'
            } transition-colors duration-300 border w-full h-max bg-white dark:bg-gray-800 p-4 rounded relative border-l-8 hover:border-teal-500 dark:hover:border-teal-500 animate-slideInBottom`}
        >
            <FaQuoteRight className='w-5 h-5 mb-2 transition-colors duration-300 dark:text-gray-200' />
            {isOpen ? (
                <div className='absolute flex space-x-4 top-4 right-4 animate-textFocusIn'>
                    <FaTrashAlt
                        className='w-4 h-4 text-pink-700 transition-transform duration-300 ease-in-out cursor-pointer hover:scale-125'
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                    />
                    <FaPencilAlt
                        className='w-4 h-4 text-blue-400 transition-transform duration-300 ease-in-out cursor-pointer hover:scale-125'
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                    />
                </div>
            ) : null}
            <p
                className='transition-colors duration-300 cursor-pointer dark:text-white'
                onClick={() => setIsOpen((prevState) => !prevState)}
            >
                {title}
            </p>
            {isOpen ? (
                <>
                    <p className='w-full mt-2 transition-colors duration-300 text-slate-500 dark:text-gray-400 animate-textFocusIn'>
                        {body}
                    </p>
                    <div className='flex justify-end'>
                        <FaQuoteLeft className='w-5 h-5 mt-2 transition-colors duration-300 animate-textFocusIn dark:text-gray-200' />
                    </div>
                </>
            ) : null}
        </div>
    )
}

export default Post
