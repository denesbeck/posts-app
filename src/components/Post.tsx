import { FaQuoteRight, FaQuoteLeft, FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import { useState, useContext } from 'react'
import { usePosts } from 'hooks'
import { Dialog, InputDialog } from 'components'
import GlobalContext from 'contexts/globalContext'

export interface PostProps {
    id: number
    title: string
    body: string
}

const Post = ({ id, title, body }: PostProps) => {
    const globalContext = useContext(GlobalContext)
    const [isOpen, setIsOpen] = useState(false)
    const [isDialogVisible, setIsDialogVisible] = useState(false)
    const [isInputDialogVisible, setIsInputDialogVisible] = useState(false)
    const { deletePost } = usePosts(globalContext.state, globalContext.dispatch)

    return (
        <>
            {isDialogVisible ? (
                <Dialog
                    isVisible={isDialogVisible}
                    setIsVisible={setIsDialogVisible}
                    message='Are you sure that you want to delete this post?'
                    handler={() => deletePost(id)}
                />
            ) : null}

            {isInputDialogVisible ? (
                <InputDialog
                    isVisible={isInputDialogVisible}
                    setIsVisible={setIsInputDialogVisible}
                    data={{ id: id, title: title, body: body }}
                />
            ) : null}

            <div
                className={`${
                    isOpen ? 'border-teal-500' : 'border-slate-800 dark:border-slate-500'
                } relative h-max w-full rounded border border-l-8 bg-white p-4 transition-colors duration-300 hover:border-teal-500 dark:bg-gray-800 dark:hover:border-teal-500`}
            >
                <FaQuoteRight className='mb-2 h-5 w-5 transition-colors duration-300 dark:text-gray-200' />
                {isOpen ? (
                    <div className='absolute top-4 right-4 flex animate-textFocusIn space-x-4'>
                        <FaTrashAlt
                            className='h-4 w-4 cursor-pointer text-pink-700 transition-transform duration-300 ease-in-out hover:scale-125'
                            onClick={(e) => {
                                e.stopPropagation()
                                setIsDialogVisible(true)
                            }}
                        />
                        <FaPencilAlt
                            className='h-4 w-4 cursor-pointer text-blue-400 transition-transform duration-300 ease-in-out hover:scale-125'
                            onClick={(e) => {
                                e.stopPropagation()
                                setIsInputDialogVisible(true)
                            }}
                        />
                    </div>
                ) : null}
                <p
                    className='cursor-pointer transition-colors duration-300 dark:text-white'
                    onClick={() => setIsOpen((prevState) => !prevState)}
                >
                    {title}
                </p>
                <div className={`${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-all duration-500`}>
                    <p className='mt-2 w-full animate-textFocusIn text-slate-500 transition-colors duration-300 dark:text-gray-400'>
                        {body}
                    </p>

                    <div className='flex justify-end'>
                        <FaQuoteLeft className='mt-2 h-5 w-5 animate-textFocusIn transition-colors duration-300 dark:text-gray-200' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post
