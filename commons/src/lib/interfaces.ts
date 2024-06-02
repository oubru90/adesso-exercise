export interface User {
  id: number
  email: string
  name: string
  gender: string
}

export interface Post {
  id: number
  userId: number
  title: string
  body: string
  user: User
  comments: {
    nodes: Comment[]
    totalCount: number
  }
}

export interface PostListsResponse {
  user: {
    posts: {
      pageInfo: {
        hasNextPage: boolean
        hasPreviousPage: boolean
        startCursor: string
        endCursor: string
      };
      nodes: Post[]
    };
  };
}

export interface PostDetailsResponse {
  post: Post
}


export interface Comment {
  body: string
  email: string
  id: number
  name: string
  post: Post
  postId: number
}
