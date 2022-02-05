import { StateSchema, ActionSchema, PostSchema } from '../reducers/globalReducer'

function usePosts(state: StateSchema, dispatch: (action: ActionSchema) => void) {
    const getPosts = () => {
        try {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((json) => {
                    dispatch({ type: 'POSTS', value: json })
                })
        } catch {
            console.error('Error occurred at getPosts()!')
        }
    }

    const addNewPost = async (title: string, body: string) => {
        dispatch({ type: 'LOADING', value: true })

        try {
            const max = state.posts.reduce((prev, current) => {
                return prev.id > current.id ? prev : current
            })
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    id: max.id + 1,
                    title: title,
                    body: body,
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    dispatch({ type: 'POSTS', value: [json, ...state.posts] })
                    dispatch({ type: 'LOADING', value: false })
                })
        } catch {
            console.error('Error occurred at addNewPost()!')
        }
    }

    const updatePost = async (id: number, title: string, body: string) => {
        dispatch({ type: 'LOADING', value: true })
        try {
            fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'PUT',
                body: JSON.stringify({
                    id: id,
                    title: title,
                    body: body,
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then(() => {
                    const postsCopy = [...state.posts]
                    postsCopy.forEach((el) => {
                        if (el.id === id) {
                            el.title = title
                            el.body = body
                        }
                    })
                    dispatch({ type: 'POSTS', value: postsCopy })
                    dispatch({ type: 'LOADING', value: false })
                })
        } catch {
            console.error('Error occurred at updatePost()!')
        }
    }

    const deletePost = async (id: number) => {
        dispatch({ type: 'LOADING', value: true })
        try {
            await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE',
            })
            dispatch({ type: 'POSTS', value: state.posts.filter((post: PostSchema) => post.id !== id) })
            dispatch({ type: 'LOADING', value: false })
        } catch {
            console.error('Error occurred at deletePost()!')
        }
    }
    return { getPosts, addNewPost, updatePost, deletePost }
}

export default usePosts
