import { useReducer } from 'react'
import { useFilter, usePosts } from './hooks'
import { ActionBar, AddButton, Header, Loading, NoResults, Post, ScrollToTopButton } from './components'
import GlobalContext from './contexts/globalContext'
import { initialState, reducer } from './reducers/globalReducer'
import LazyLoad from 'react-lazyload'
import { PostSchema, GlobalStateSchema } from './interfaces/posts'

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    usePosts(state, dispatch)
    const [filteredPosts] = useFilter(state as GlobalStateSchema)

    const renderPosts = () => {
        if (!filteredPosts.length) {
            return <NoResults />
        }
        return (
            <div className='grid gap-4 py-12 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 animate-slideInBottom'>
                {filteredPosts.map((post: PostSchema) => {
                    return (
                        <LazyLoad height={80} key={post.id}>
                            <Post id={post.id} title={post.title} body={post.body} />
                        </LazyLoad>
                    )
                })}
            </div>
        )
    }

    if (!filteredPosts) return null

    return (
        <div className='h-full min-h-screen px-6 font-mono transition-all duration-300 dark:bg-slate-800 bg-slate-100 sm:px-8 lg:px-10 2xl:px-12'>
            <GlobalContext.Provider value={{ state: state, dispatch: dispatch }}>
                <div className='pt-4 space-y-8 xl:space-y-0 xl:flex'>
                    <Header />
                    <div className='ml-auto'></div>
                    <ActionBar />
                </div>
                {renderPosts()}
            </GlobalContext.Provider>
            <AddButton />
            <ScrollToTopButton />
            {state.loading ? <Loading /> : null}
        </div>
    )
}

export default App
