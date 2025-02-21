import React,{useState} from "react";
import './videoUpload.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";

const VideoUpload = () =>{
    const [inputField,setInputField] = useState({"title":"","description":"","videoLink":"","thumbnail":"","videoType":""})
    const handleOnChangeInput = (event,name)=>{
        setInputField({
            ...inputField,[name]:event.target.value 
        })
    }
    return (
        <div className="upload">
            <div className="uploadBox">
                <div className="uploadvidtitle">
                    <YouTubeIcon sx={{fontSize: '54px', color: 'blue'}}/>
                    Upload Video
                </div>

                <div className="uploadForm">
                    <input type="text" value={inputField.title} onChange={(e) => handleOnChangeInput(e,"title") } placeholder="title of video" className="uploadforminputs" />
                    <input type="text" value={inputField.description} onChange={(e) => handleOnChangeInput(e,"description") } placeholder="Description" className="uploadforminputs" />
                    <input type="text" value={inputField.videoType} onChange={(e) => handleOnChangeInput(e,"videoType") } placeholder="Category" className="uploadforminputs" />
                    <div>Thumbnail <input type="file" accept="image/*"/></div>
                    <div>Video <input type="file" accept="video/mp4, video/webm, video/*"/></div>
                </div>

                <div className="uploadBtns">
                    <div className="uploadBtn-form">Upload</div>
                    <Link to={'/'} className="uploadBtn-form">Home</Link>
                </div>
            </div>
        </div>
    )
}

export default VideoUpload;