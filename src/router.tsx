import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostsListPage from "./pages/PostsListPage";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import AdminPostsPage from "./pages/AdminPostsPage";
import AdminPostPage from "./pages/AdminPostPage";
import AdminTagsPage from "./pages/AdminTagsPage";
import AdminFilesPage from "./pages/AdminFilesPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/admin',
        children: [
            {
                path: 'login',
                element: <LoginPage/>
            },
            {
                path: 'dashboard',
                element: <DashboardPage/>
            },
            {
                path: 'posts',
                children: [
                    {
                        path: '',
                        element: <AdminPostsPage/>
                    },
                    {
                        path: 'create',
                        element: <AdminPostPage/>
                    },
                    {
                        path: ':id',
                        element: <AdminPostsPage/>
                    }
                ]
            },
            {
                path: 'tags',
                element: <AdminTagsPage/>
            },
            {
                path: 'files',
                element: <AdminFilesPage/>
            }
        ]
    },
    {
        path: '/posts',
        children: [
            {
                path: '',
                element: <PostsListPage/>
            },
            {
                path: ':id',
                element: <PostPage/>
            }
        ]
    },
]);

export default router;