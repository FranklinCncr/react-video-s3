import "./video.css";

function  Video(){
    return(
        <video controls>
            <source src="https://server-video-public.s3.us-west-2.amazonaws.com/video3.mp4" type="video/mp4"/>
        </video>
    );
}

export default Video;