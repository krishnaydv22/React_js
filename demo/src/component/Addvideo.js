import './AddVideo.css'
import { useState } from 'react';
import { useEffect,useRef } from 'react';
import useVideoDispatch from '../hooks/VideoDispatch';
// import VideoDispatchContext from '../context/VideoDispatchContext';

const intialState = {time: "1 Year ago",
channel: "coder Dost",
verified: false,
title:'',
views:''}

function AddVideo({editableVideo}) {

    const [video,setVideo] = useState(intialState)
    // const dispatch = useContext(VideoDispatchContext);
    const dispatch = useVideoDispatch();//Custom Hook
    const inputRef = useRef(null);
              

    function handleSubmit(e) {
        e.preventDefault();
        if(editableVideo){
            // updateVideo(video);
            dispatch({type:'UPDATE',payload:video})


        }else{
            dispatch({type:'ADD',payload:video})

            // addVideos(video);
        }
        setVideo(intialState);

    }
    function handleChange(e) {
        setVideo({...video,[e.target.name]:e.target.value})

    }

    useEffect(()=>{
        if(editableVideo){setVideo(editableVideo)
            
     }
     inputRef.current.focus();
    },[editableVideo])

    return (
        <form>
            <input  ref={inputRef} type="text" name="title" onChange={handleChange} placeholder="title" value={video.title}/>
            <input type="text" name="views" onChange={handleChange} placeholder="views" value={video.views}/>
            <button onClick={handleSubmit}> {editableVideo ?'Edit':'Add'} Video</button>

        </form>

    )
}
export default AddVideo;