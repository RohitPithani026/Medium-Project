import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage';
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from "./pages/Blogs";
import { Publish } from './pages/Publish';
import { UserBlogsPage } from './pages/UserBlogsPage'
import User from './components/User';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
          <Route path='/profile/:id' element={<User />} />
          <Route path='/userBlogs/:userId' element={<UserBlogsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App