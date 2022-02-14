import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import {CloudinaryContext, Image, Transformation} from 'cloudinary-react'
import ReactPlayer from 'react-player';





const  Display = (props) => {

     const [url, seturl] = useState('');
     const [media, setmedia] = useState(false);
     var n = 0;

  

     const show = () => {
         setmedia(true)
     }
     

    return (
            <Components>
               
                <table>
                    <tr>
                        <td>
                        <input  value={url}  onChange={(e) => seturl(e.target.value)} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                        {!media  ?
                         <img onClick={(e) =>  show()} src="https://filesuploader.s3.eu-west-3.amazonaws.com/Thumbnails/1644843664NINIOLA-MARADONA(OFFICIALVIDEO).png"/>
                        : ""}
                           
                           {media  ?
                            <ReactPlayer 
                            url="https://filesuploader.s3.eu-west-3.amazonaws.com/Videouploads/1644843664NINIOLA-MARADONA(OFFICIALVIDEO).mp4"
                            controls={true}/>
                            :""}

                        </td>
                    </tr>

                

                    </table>
                 
                       <CloudinaryContext cloudName="otecdealings">  
                        <Image publicId={url} >
                              <Transformation height="122" width="95" crop="scale" />
                        </Image> 
                    </CloudinaryContext>  
                   
            </Components>
        )
    

}


const Components = styled.div`
img{
width: 300px;
height: 300px;
object-fit:cover;
}
`;







export default  Display;