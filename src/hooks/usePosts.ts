import { useState, useEffect } from 'react'

interface PostSchema {
    userId: number
    id: number
    title: string
    body: string
}

function usePosts() {
    const [isLoading, setIsLoading] = useState(false)
    const [posts, setPosts] = useState<PostSchema[]>(null)

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = () => {
        setIsLoading(true)
        try {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((json) => {
                    setPosts(json)
                    setIsLoading(false)
                })
        } catch {
            console.error('Error occurred at getPosts()!')
        }
    }

    const addNewPost = async (title: string, body: string) => {
        setIsLoading(true)

        try {
            const max = posts.reduce((prev, current) => {
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
                    setPosts([json, ...posts])
                    setIsLoading(false)
                })
        } catch {
            console.error('Error occurred at addNewPost()!')
        }
    }

    const updatePost = async (id: number, title: string, body: string) => {
        setIsLoading(true)
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
                    const postsCopy = [...posts]
                    postsCopy.forEach((el) => {
                        if (el.id === id) {
                            el.title = title
                            el.body = body
                        }
                    })
                    setPosts(postsCopy)
                    setIsLoading(false)
                })
        } catch {
            console.error('Error occurred at updatePost()!')
        }
    }

    const deletePost = async () => {
        setIsLoading(true)
        try {
            await fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
                method: 'DELETE',
            })
            setPosts((prevState) => prevState.filter((el) => el.id !== 1))
            setIsLoading(false)
        } catch {
            console.error('Error occurred at deletePost()!')
        }
    }
    return { posts: posts, addNewPost: addNewPost, updatePost: updatePost, deletePost: deletePost, isLoading: isLoading }
}

export default usePosts
