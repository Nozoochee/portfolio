export interface Streamer {
  thumbnail_url: string;
  user_name: string;
  localized_name?: string;
  title: string;
  game_name: string;
  viewer_count: number;
}

type Props = {
  streamer:Streamer;
}

function TwitchCard({streamer}:Props) {
  return (
    <a className="p-8 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-md border-4 flex flex-col border-green-700 hover:border-red-600 max-w-lg" 
    href={`https://www.twitch.tv/${streamer.user_name}`} target="_blank" rel="noopener noreferrer">
      <img src={streamer.thumbnail_url} alt={streamer.user_name}/>
      <div className="text-2xl font-medium text-yellow-500">{streamer.localized_name}</div>
      <div className="text-lg font-thin">{streamer.title}</div>
      <div className="relative text-base font-medium flex justify-between">
        <p className="">{streamer.game_name}</p>
        <p className="">{streamer.viewer_count}</p>
      </div>
    </a>
  )
}

export default TwitchCard