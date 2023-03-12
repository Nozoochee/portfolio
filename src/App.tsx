import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Twitch from './pages/twitch/Twitch'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'


function App() {
  //Min-height-screen, flex and flex-col are for footer. Using margin-top-auto in Footer makes it move itself to the bottom. It moves as expected when you have a lot of content.
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-800">
      <Navbar/>
      <div className=" text-gray-900 dark:text-gray-200 p-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/twitch" element={<Twitch/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
