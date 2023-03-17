import SiteTitle from '../../components/general/siteTitle'
import pixel1 from './assets/pixelart/Day18.png'
import pixel2 from './assets/pixelart/Day38.png'
import pixel3 from './assets/pixelart/Day42.png'
import pixel4 from './assets/pixelart/Day43.png'
import song1 from './assets/music/Short_thing.mp3'
import song2 from './assets/music/idk3.mp3'
import song3 from './assets/music/FirstTime.mp3'
import sculpt1 from './assets/sculpts/sculpt1.png'
import sculpt2 from './assets/sculpts/head-closeup.png'
import sculpt3 from './assets/sculpts/day8a-f.png'
import { BsGithub } from 'react-icons/bs'

type Props = {}

function Projects({}: Props) {
  return (
    <>
    <SiteTitle title="Webdev"/>
    <section className='pb-10'>
      <a href="https://github.com/Nozoochee?tab=repositories" target="_blank" rel="noopener noreferrer" className="flex gap-4 items-center text-xl">
        <BsGithub size={40}/> Take a look at my GitHub page </a>
    </section>

    <hr/>

    <SiteTitle title="Other Projects"/>

    <section>
      <div className="py-4">
        <h2 className="text-3xl font-bold ">Games</h2>
        <h3 className="text-xl">Unreal Engine, Rider, Blender, Substance Painter</h3>
        <p className="text-lg">Very short games (1-5min)</p>
      </div>
      <div className="flex flex-wrap gap-4">
        <iframe src="https://itch.io/embed/1563865?border_width=5&amp;dark=true" width="560" height="175"><a href="https://nozoochee.itch.io/duckyoh">DuckyOh by Nozoochee</a></iframe>
        <iframe src="https://itch.io/embed/1276278?border_width=5&amp;dark=true" width="560" height="175"><a href="https://draganonon.itch.io/spookygame">SpookyGame by Draganonon</a></iframe>
        <iframe src="https://itch.io/embed/972483?border_width=5&amp;dark=true" width="560" height="175"><a href="https://draganonon.itch.io/western-town-survival-game">Western Town survival game by Draganonon</a></iframe>
      </div>
    </section>

    <section>
      <div className='py-4'>
        <h2 className="text-3xl font-bold ">Pixelart</h2>
        <h3 className="text-xl">Aseprite</h3>
      </div>
      <div className="flex flex-wrap gap-4">
        <img src={pixel1} alt="Landscape"/>
        <img src={pixel2} alt="Room"/>
        <img src={pixel3} alt="Metroid"/>
        <img src={pixel4} alt="Aka"/>
      </div>
    </section>

    <section>
      <div className='py-4'>
        <h2 className="text-3xl font-bold ">Music</h2>
        <h3 className="text-xl">FL Studio</h3>
      </div>
      <div className="flex flex-wrap gap-4">
        <audio controls src={song1}>
          Your browser does not support the audio tag. Please use a more modern Browser.
        </audio>
        <audio controls src={song2}/>
        <audio controls src={song3}/>
      </div>
    </section>

    <section>
      <div className='py-4'>
        <h2 className="text-3xl font-bold ">3D sculpting</h2>
        <h3 className="text-xl">Blender, Substance Painter</h3>
      </div>
      <div className="flex flex-wrap gap-4">
        <img src={sculpt1} alt="Demon" className="h-96"/>
        <img src={sculpt2} alt="Alien female head" className="h-96"/>
        <img src={sculpt3} alt="Female head" className="md:h-96"/>
      </div>
    </section>
    </>
  )
}

export default Projects