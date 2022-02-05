import { StateSchema, ActionSchema, PostSchema } from '../reducers/globalReducer'
import { NotificationManager } from 'react-notifications'

function usePosts(state: StateSchema, dispatch: (action: ActionSchema) => void) {
    const getPosts = () => {
        try {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((json) => {
                    dispatch({ type: 'POSTS', value: json })
                })
        } catch {
            NotificationManager.error('Internal server error: Unable to fetch posts.')
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
                    NotificationManager.success('Post has been added successfully.')
                })
        } catch {
            NotificationManager.error('Internal server error: Unable to add new post.')
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
                    NotificationManager.success('Post has been updated successfully.')
                })
        } catch {
            NotificationManager.error('Internal server error: Unable to update post.')
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
            NotificationManager.success('Post has been deleted successfully.')
        } catch {
            NotificationManager.error('Internal server error: Unable to delete post.')
        }
    }
    return { getPosts, addNewPost, updatePost, deletePost }
}

export default usePosts
