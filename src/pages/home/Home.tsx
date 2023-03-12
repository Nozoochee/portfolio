import SiteTitle from "../../components/general/siteTitle"

type Props = {}

function Home({}: Props) {
  return (
    <>
    <div className="text-center">
      <SiteTitle title="Home" />
      <p className="py-20 px-20 text-2xl leading-8">
        Welcome to my page! Here you can find all projects I work on and have worked on in the past. <br/>
        Use the navbar at the top to move to whichever category you're interested in.
      </p>
    </div>
    </>
  )
}

export default Home