import ThemeContext from '../context/ThemeContext';
import { useContext} from 'react';
import './video.css'
import VideoDispatchContext from '../context/VideoDispatchContext';

function Video({ title,channel="Code Dost",views,time,verified,id,children,editVideo}) {
   
    const theme =useContext(ThemeContext);
    const dispatch = useContext(VideoDispatchContext)

    // useEffect(() => {
    //     // const idx=setnterval(()=>{
    //    console.log('video playing',id)},3000)

    //    return () =>{
    //     clearInterval(idx)
    //    }
    // },[id]);
    
    return (
        <div className={`container ${theme}`}>
        <button className='close' onClick={()=>dispatch({type:'DELETE',payload:id})}>X</button>
        <button className='edit' onClick={()=>editVideo(id)}>Edit</button>

            <div className="pic">
             <img src={`https://picsum.photos/id/${id}/367/267`}  alt="Kathorine" />
            </div>
            <div className="title">{title}</div>
            <div className="channel">{channel} {verified ? '✅': null}</div>
            <div className="views">
            {views} views<span>.</span> {time}</div>
            <div>{children}</div>


        </div>

    );
}
export default Video;