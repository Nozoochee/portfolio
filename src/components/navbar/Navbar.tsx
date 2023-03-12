import ThemeButton from './ThemeButton'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

type Props = {}

function Navbar({}: Props) {
  const email:string = "nozoochee@protonmail.com";
  return (
    <nav className="flex justify-between py-4 bg-gray-900 text-gray-200 font-caveat text-3xl font-bold p-4">
      <div className="flex flex-col md:flex-row m-auto md:m-0 pl-10 md:pl-0 items-center gap-8">
        <Link to="/" className="hover:text-blue-500 hover:scale-90">
          <img src={logo} alt="logo" className=" max-h-16" />
        </Link>
        <Link to="/twitch" className=" hover:text-blue-500">Twitch Search</Link>
        <Link to="/projects" className=" hover:text-blue-500">Projects</Link>
        <Link to="/about" className=" hover:text-blue-500">About</Link>
        <a href={`mailto:${email}`} className="hover:text-blue-500">Contact Me</a>
      </div>
      <div className="hover:text-blue-500">
        <ThemeButton/>
      </div>
    </nav>
  )
}

export default Navbar