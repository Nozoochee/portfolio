import { useState, useEffect } from 'react'
import SiteTitle from '../../components/general/siteTitle';
import TwitchCard, { Streamer} from './components/TwitchCard';

function Twitch() {
  const [searchLang, setSearchLang] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pagination, setPagination] = useState("");
  const [streams, setStreams] = useState<Streamer[]>([]);

  useEffect(()=>{
    scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  }, [isLoading]);

  async function getStreams(){
    if(searchLang.length != 2){
      alert("Language code must be 2 characters long");
      return
    }
    setIsLoading(true);
    const params = new URLSearchParams();
    params.append('lang', searchLang);
    params.append('pag', pagination);
    params.append('amnt', '20');
    
    const res = await fetch(`https://api.nozoochee.com/twitch?${params}`);
    if(!res.ok){
      alert("Something went wrong");
      console.log(res);
      return
    }
    const data = await res.json();
    setPagination(data.pagination);
    setStreams(data.streams);
    setIsLoading(false);
  }

  function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    getStreams();
  }

  return (
    <>
    <SiteTitle title="Search Twitch streams by language" />
    <form onSubmit={handleSubmit} className="flex gap-4 m-3">
      <input value={searchLang} onChange={(e)=>setSearchLang(e.target.value)} 
        type="text" placeholder="ja" 
        className="text-gray-800 p-2 rounded-md border-4 border-blue-800"/>
      <button type="submit" 
        className="bg-blue-800 text-gray-200 hover:bg-blue-500 p-4 mx-4 rounded-md">
        {isLoading ? ("Loading...") : ("Find Streams")}
      </button>
    </form>
    <div className="text-3xl p-4">
      <p> 
        Language must in be two letter form. Example: "ja" for Japanese, "de" for German etc... 
      </p>
      <a className="underline text-blue-600 hover:text-blue-500" 
      href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes" target="_blank" rel="noopener noreferrer">
        See this table
      </a>
    </div>

    <div className="m-2 grid gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
      {streams.map((stream, index) => {
        return <TwitchCard streamer={stream} key={index} />
      })}
    </div>

    {streams.length > 0 ? 
    (
      <button onClick={handleSubmit} className=" bg-blue-800 hover:bg-blue-500 p-4 m-4 rounded-md">
        {isLoading ? ("Loading...") : ("Load more")}
      </button>
    ) 
    : 
    ("")}
    </>
  )
}

export default Twitch