import { useReducer, useEffect } from 'react'
import { useFilter, usePosts } from './hooks'
import { ActionBar, AddButton, Header, Loading, NoResults, Post, ScrollToTopButton } from './components'
import GlobalContext from './contexts/globalContext'
import { initialState, reducer } from './reducers/globalReducer'
import LazyLoad from 'react-lazyload'
import { StateSchema, ActionSchema, PostSchema } from './reducers/globalReducer'
import { NotificationContainer } from 'react-notifications'
import 'react-notifications/lib/notifications.css'
import './notifications.css'

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const { getPosts } = usePosts(state as StateSchema, dispatch as (action: ActionSchema) => void)
    useFilter(state as StateSchema, dispatch as (action: ActionSchema) => void)

    useEffect(() => {
        getPosts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const renderPosts = () => {
        if (!(state.filteredPosts as PostSchema[]).length) {
            return <NoResults />
        }
        return (
            <div className='flex animate-slideInBottom flex-wrap justify-center gap-4 py-12'>
                {(state.filteredPosts as PostSchema[]).map((post: PostSchema) => {
                    return (
                        <LazyLoad height={100} offset={100} key={post.id} resize>
                            <Post id={post.id} title={post.title} body={post.body} />
                        </LazyLoad>
                    )
                })}
            </div>
        )
    }

    if (!state.filteredPosts) return null
    return (
        <div className='h-full min-h-screen bg-slate-100 px-6 font-mono transition-all duration-300 dark:bg-slate-800 sm:px-8 lg:px-10 2xl:px-12'>
            <GlobalContext.Provider value={{ state: state, dispatch: dispatch }}>
                <div className='space-y-8 pt-4 xl:flex xl:space-y-0'>
                    <Header />
                    <div className='ml-auto'></div>
                    <ActionBar />
                </div>
                {renderPosts()}
                <AddButton />
            </GlobalContext.Provider>
            <ScrollToTopButton />
            <NotificationContainer />
            {state.loading ? <Loading /> : null}
        </div>
    )
}

export default App
