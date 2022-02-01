import { lazy, Suspense, useState, useEffect } from 'react'
import { GiVintageRobot } from 'react-icons/gi'
import { ActionBar, AddButton, Header, ScrollToTopButton } from './components'
import usePosts from './hooks/usePosts'
const Post = lazy(() => import('./components/Post'))

interface PostSchema {
    userId: number
    id: number
    title: string
    body: string
}

const App = () => {
    const [searchValue, setSearchValue] = useState('')
    const [filteredPosts, setFilteredPosts] = useState<PostSchema[]>(null)

    const { posts, addNewPost, updatePost, deletePost, isLoading } = usePosts()

    useEffect(() => {
        if (posts) {
            const filteredList = posts.filter((el) => {
                return (
                    el.title.toLowerCase().trim().includes(searchValue.toLowerCase().trim()) ||
                    el.body.toLowerCase().trim().includes(searchValue.toLowerCase().trim())
                )
            })

            setFilteredPosts(filteredList)
            renderPosts()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [posts, searchValue])

    const renderPosts = () => {
        if (filteredPosts) {
            if (filteredPosts.length === 0) {
                return (
                    <div className='main--no-records--container'>
                        <GiVintageRobot className='main--no-records--icon' />
                        <div className='main--no-records--message'>No records based on your search criterion! :(</div>
                    </div>
                )
            }
            return filteredPosts.map((post: PostSchema) => {
                return (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Post key={post.id} id={post.id} title={post.title} body={post.body} deletePost={deletePost} />
                    </Suspense>
                )
            })
        }
    }

    return (
        <div className='h-full min-h-screen px-6 font-mono transition-all duration-300 dark:bg-slate-800 bg-slate-100 sm:px-8 lg:px-10 2xl:px-12'>
            <Header />
            <ActionBar />
            <div className='grid gap-4 py-12 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>{renderPosts()}</div>
            <AddButton />
            <ScrollToTopButton />
        </div>
    )
}

export default App
