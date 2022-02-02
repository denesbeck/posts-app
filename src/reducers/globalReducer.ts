import { PostSchema } from '../interfaces/posts'

const initialState = {
    loading: false,
    searchString: '',
    posts: null,
}

interface GlobalStateSchema {
    loading: boolean
    searchString: string
    posts: PostSchema[]
}

const reducer = (state: GlobalStateSchema, action: { type: string; value: boolean | string | PostSchema[] }) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: action.value,
            }
        case 'SEARCH_STRING':
            return {
                ...state,
                searchString: action.value,
            }
        case 'POSTS':
            return {
                ...state,
                posts: action.value,
            }
        default:
            return { ...state }
    }
}

export { initialState, reducer }
