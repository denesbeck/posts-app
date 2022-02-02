export interface PostSchema {
    userId: number
    id: number
    title: string
    body: string
}

export interface GlobalStateSchema {
    loading: boolean
    searchString: string
    posts: PostSchema[]
}
