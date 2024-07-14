import About from "../pages/About"
import Login from "../pages/Login"
import PostID from "../pages/PostID"
import Posts from "../pages/Posts"


export const privateRoutes = [
    { path: '/about', component: About },
    { path: '/posts', component: Posts },
    { path: '/posts/:id', component: PostID },
    // { path: '*', component: About }
]

export const publicRoutes = [
    { path: '/login', component: Login },
    // { path: '*', component: Login }
]