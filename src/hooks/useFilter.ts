import { useEffect } from 'react'
import { forceVisible } from 'react-lazyload'
import { StateSchema, ActionSchema, PostSchema } from '../reducers/globalReducer'

function useFilter(state: StateSchema, dispatch: (action: ActionSchema) => void) {
    useEffect(() => {
        if (state.posts) {
            console.log(state.posts)
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
                dispatch({ type: 'FILTERED_POSTS', value: filteredList })
                forceVisible()
                return
            }
            dispatch({ type: 'FILTERED_POSTS', value: state.posts })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.posts, state.searchString])
}

export default useFilter
