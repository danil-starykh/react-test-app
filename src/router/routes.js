import About from '../pages/About';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import PostDetails from '../pages/PostDetails';
import Posts from '../pages/Posts';

export const privateRoutes = [
      { path: '/', element: Posts},
      { path: '/about', element: About},
      { path: '/posts', element: Posts},
      { path: '/posts/:id', element: PostDetails},
      { path: '/page-not-found', element: ErrorPage},
];

export const publicRoutes = [
      { path: '/login', element: Login},
];