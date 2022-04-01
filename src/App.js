import './App.css';
import About from './components/About';
import Home from './components/Home';
import OurNav from './components/OurNav';
import Profile from './components/Profile';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Error from './components/Error';
import Posts from './components/Posts';
import Post from './components/Post';



function App() {
 

    
    return ( < >
    <OurNav></OurNav>
    <Routes>
        <Route path='/' element={<Navigate to='/home'></Navigate>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/profile/:id' element={<Profile></Profile>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/posts' element={<Posts></Posts>}></Route>
        <Route path="/post/:id" element={<Post />}>
            <Route path=":id" element={<Post />} />
          </Route>
        <Route path='*' element={<Error></Error>}></Route>
    </Routes>
    <Footer></Footer>
      

        </>

    );
}

export default App;