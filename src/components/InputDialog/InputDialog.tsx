import { useClickOutside, usePosts } from '../../hooks'
import { ChangeEvent, useRef, useState, useContext } from 'react'
import { Button } from '..'
import { createPortal } from 'react-dom'
import GlobalContext from '../../contexts/globalContext'
import { PostProps } from '../Post/Post'
import { NotificationManager } from 'react-notifications'

interface InputDialogProps {
    isVisible: boolean
    setIsVisible: (value: boolean) => void
    data?: PostProps
}

function InputDialog({ isVisible, setIsVisible, data }: InputDialogProps) {
    const globalContext = useContext(GlobalContext)
    const ref = useRef(null)
    const [title, setTitle] = useState(data ? data.title : '')
    const [body, setBody] = useState(data ? data.body : '')

    useClickOutside(isVisible, ref, () => setIsVisible(false))
    const { addNewPost, updatePost } = usePosts(globalContext.state, globalContext.dispatch)

    if (!isVisible) return null
    return createPortal(
        <div className='fixed top-0 left-0 z-10 h-screen w-screen overflow-hidden bg-gray-900 bg-opacity-80 backdrop-blur-sm'>
            <div
                ref={ref}
                className='relative top-1/2 left-1/2 mx-2 table h-max w-max -translate-y-1/2 -translate-x-1/2 animate-[textFocusIn_0.3s_linear] space-y-6 rounded bg-white p-6 text-slate-800 dark:bg-slate-800 dark:text-slate-200'
            >
                <div className='text-2xl'>{data ? 'Update post' : 'Add new post'}</div>
                <div>
                    <label htmlFor='title' className='mb-2 block font-semibold'>
                        Title:
                    </label>
                    <input
                        autoFocus
                        autoComplete='off'
                        autoCorrect='off'
                        onChange={(e: ChangeEvent) => setTitle((e.target as HTMLInputElement).value)}
                        value={title}
                        id='title'
                        minLength={1}
                        maxLength={32}
                        type='text'
                        placeholder='Enter title...'
                        className='block w-4/5 rounded border-2 border-slate-200 p-2 shadow outline-2 outline-offset-2 outline-teal-500 focus:outline dark:border-slate-600 dark:bg-slate-700'
                    />
                </div>
                <div>
                    <label htmlFor='content' className='mb-2 block font-semibold'>
                        Content:
                    </label>
                    <textarea
                        onChange={(e: ChangeEvent) => setBody((e.target as HTMLInputElement).value)}
                        value={body}
                        id='content'
                        autoComplete='off'
                        autoCorrect='off'
                        minLength={1}
                        maxLength={256}
                        placeholder='Enter content...'
                        className='block h-24 w-full resize-none overflow-y-auto rounded border-2 border-slate-200 p-2 shadow outline-2 outline-offset-2 outline-teal-500 focus:outline dark:border-slate-600 dark:bg-slate-700 xl:w-80'
                    />
                </div>
                <div className='flex space-x-6'>
                    <Button
                        type='primary'
                        label={data ? 'Update' : 'Submit'}
                        handler={() => {
                            if (title.length && body.length) {
                                if (data) {
                                    updatePost(data.id, title, body)
                                } else {
                                    addNewPost(title, body)
                                }
                            } else {
                                if (data) {
                                    setTitle(data.title)
                                    setBody(data.body)
                                }
                                NotificationManager.error('No title or content has been entered.')
                            }
                            setIsVisible(false)
                        }}
                    />
                    <Button type='secondary' label='Cancel' handler={() => setIsVisible(false)} />
                </div>
            </div>
        </div>,
        document.getElementById('root')
    )
}

export default InputDialog
