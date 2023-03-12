import { BsGithub, BsYoutube } from "react-icons/bs"


type Props = {}

function Footer({}: Props) {
  return (
    <footer className="bg-gray-900 text-gray-200 text-center p-4 mt-auto">
      <div className="flex justify-center gap-4 pb-4">
        <a href="https://github.com/Nozoochee" target="_blank" rel="noopener noreferrer"><BsGithub size={"1.5rem"}/></a>
        <a href="https://www.youtube.com/channel/UCZl7N1kL8OdnioQL6IUY-yw" target="_blank" rel="noopener noreferrer"><BsYoutube size={"1.5rem"}/></a>
      </div>
      <p className="font-medium text-center justify-center content-center">
        2023 Nozoochee
      </p>
    </footer>
  )
}

export default Footer