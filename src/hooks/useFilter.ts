import { useEffect, useState } from 'react'
import { forceVisible } from 'react-lazyload'
import { PostSchema, GlobalStateSchema } from '../interfaces/posts'

function useFilter(state: GlobalStateSchema) {
    const [filteredPosts, setFilteredPosts] = useState<PostSchema[]>(null)

    useEffect(() => {
        if (state.posts) {
            if ((state.searchString as string).length) {
                const filteredList = (state.posts as PostSchema[]).filter((el) => {
                    return (
                        el.title
                            .toLowerCase()
                            .trim()
                            .includes((state.searchString as string).toLowerCase().trim()) ||
                        el.body
                            .toLowerCase()
                            .trim()
                            .includes((state.searchString as string).toLowerCase().trim())
                    )
                })
                setFilteredPosts(filteredList)
                forceVisible()
                return
            }
            setFilteredPosts(state.posts as PostSchema[])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.posts, state.searchString])
    return [filteredPosts]
}

export default useFilter
