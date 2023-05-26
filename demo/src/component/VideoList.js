import Video from "./video";
import PlayButton from "./PlayButton";
import VideosContext from "../context/VideosContext";
import { useCallback, useContext } from "react";



function VideoList({editVideo}){
    const videos = useContext(VideosContext)

    const play = useCallback(() => console.log("Playyyy"),[])
    const pause = useCallback(() => console.log("Playyyy"),[])

    
    return(
        <div>
        {videos.map(video => <Video
            key={video.id} title={video.title} views={video.views} time={video.time}
            channel={video.channel} verified={video.verified} id={video.id} editVideo={editVideo}>
            <PlayButton onPlay={play} onPause={pause}>{video.title}</PlayButton>
          </Video>
          )}
        
        </div>
    );
}

export default VideoList;