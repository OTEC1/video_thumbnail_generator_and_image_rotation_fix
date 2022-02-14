
//This is the cloud fuctions souce code so u have to create a new cloud function project 
//Then type this in


// type BaseUrl = {
//     url:string,  
//     publicface:string,
// }

// //Image Resizer
// export const ImgResize = functions.https.onRequest((request, respones)=>{

 
//     cors(request,respones,()=>{
//         let  e: BaseUrl = request.body;
//         console.log(e.publicface, e.url);
//         cloudinary.v2.config({
//             cloud_name:process.env.REACT_APP_CLOUNDINARY_NAME,
//             api_key:process.env.REACT_APP_CLOUDINARY_KEY,
//             api_secret:process.env.REACT_APP_CLOUNDINARY_SECRET
//         })

//         cloudinary.v2.uploader.upload(e.url,
//             {public_id:e.publicface},
//             function(err,result){
//                     console.log(err);

//                     return respones.json({
//                         message: result?.created_at
//                     })
                 
//                 });
//         });

//    });



