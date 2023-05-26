import './App.css';
import videoDB from './data/data'
import { useReducer, useState } from 'react';
import AddVideo from './component/Addvideo';
import VideoList from './component/VideoList';
import ThemeContext from './context/ThemeContext';
import VideosContext from './context/VideosContext';
import VideoDispatchContext from './context/VideoDispatchContext';
import Counter from './component/Counter';

function App() {

  const [editableVideo, setEditableVideo] = useState(null);

  const [mode, setMode] = useState('darkMode');

  function videoReducer(videos, action) {
    switch (action.type) {
      case 'ADD':
        return [...videos, { ...action.payload, id: videos.length + 1 }
        ]
      case 'DELETE':
        return videos.filter(video => (video.id !== action.payload))
      case 'UPDATE':
        const index = videos.findIndex(v => v.id === action.payload.id)
        const newVideos = [...videos]
        newVideos.splice(index, 1, action.payload)
        setEditableVideo(null);
        return newVideos;
      default:
        return videos
    }

  }

  const [videos, dispatch] = useReducer(videoReducer, videoDB);
  // const themeContext = useContext(ThemeContext);


  // const [videos, setVideos] = useState(videoDB);


  // function addVideo(video){
  //   dispatch({type:'ADD',payload:video})


  // setVideos([...videos,{...video,id:videos.length +1}
  // ]);
  // }
  // function deleteVideo(id){
  //   dispatch({type:'DELETE',payload:id})

  // setVideos(videos.filter(video=>(video.id!==id)))

  // }
  function editVideo(id) {
    setEditableVideo(videos.find(video => (video.id === id)))


  }

  // function updateVideo(video){
  //   // const index = videos.findIndex(v=>v.id===video.id)
  //   // const newVideos=[...videos]
  //   // newVideos.splice(index,1,video)
  //   // console.log(newVideos)
  //   // setVideos(newVideos)
  //   dispatch({type:'UPDATE',payload:video})

  // }

  return (

    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>


          <div className={`App ${mode}`} onClick={() => console.log("App")}>
          <Counter></Counter>
            <button onClick={() => setMode(mode === 'darkMode' ? 'lightMode' : 'darkMode')}>Change Mode</button>

            {/*<AddVideo addVideos={addVideo} updateVideo={updateVideo} editableVideo={editableVideo}></AddVideo>*/}
            <AddVideo editableVideo={editableVideo}></AddVideo>

            {/*<VideoList deleteVideo={deleteVideo} editVideo={editVideo} videos={videos}></VideoList>*/}
            <VideoList editVideo={editVideo} ></VideoList>

          </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
