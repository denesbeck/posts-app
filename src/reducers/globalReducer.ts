export interface PostSchema {
    userId: number
    id: number
    title: string
    body: string
}

const initialState = {
    loading: false,
    searchString: '',
    posts: null,
    filteredPosts: null,
}

export interface StateSchema {
    loading: boolean
    searchString: string
    posts: PostSchema[]
    filteredPosts: PostSchema[]
}

export interface ActionSchema {
    type: string
    value: boolean | string | PostSchema[]
}

const reducer = (state: StateSchema, action: ActionSchema) => {
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
        case 'FILTERED_POSTS':
            return {
                ...state,
                filteredPosts: action.value,
            }
        default:
            return { ...state }
    }
}

export { initialState, reducer }
