import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage';
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from "./pages/Blogs";
import { Publish } from './pages/Publish';
import { UserBlogsPage } from './pages/UserBlogsPage'
import User from './components/User';
import RouteGuard from './components/RouteGuard';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog/:id" element={<RouteGuard><Blog /></RouteGuard>} />
          <Route path="/blogs" element={<RouteGuard><Blogs /></RouteGuard>} />
          <Route path="/publish" element={<RouteGuard><Publish /></RouteGuard>} />
          <Route path='/profile/:id' element={<RouteGuard><User /></RouteGuard>} />
          <Route path='/userBlogs/:userId' element={<RouteGuard><UserBlogsPage /></RouteGuard>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App