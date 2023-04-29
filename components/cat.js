// import { useState, useEffect } from "react";

// export default function CatPictures() {
//     const [pictureUrl, setPictureUrl] = useState("");
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const fetchPicture = async () => {
//         setIsLoading(true);
//         try {
//             const response = await fetch("https://randomfox.ca/floof/");
//             const picture = await response.url;
//             setPictureUrl(picture);
//         } catch (error) {
//             setError("An error occurred while fetching the data");
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const handleClick = () => {
//         fetchPicture();
//     };

//     useEffect(() => {
//         fetchPicture();
//     }, []);

//     return (
//         <div className=' flex flex-col items-center'>
//             <h1 className=' text-white py-6 text-[20px]'>
//                 Din daglige pusekatt
//             </h1>
//             {isLoading && <p>Loading data...</p>}
//             {!isLoading && error && <p>{error}</p>}
//             {!isLoading && !error && (
//                 <img src={pictureUrl} alt='A cat' height='300' width='300' />
//             )}
//             <button
//                 className=' bg-pink-400 my-6 p-2 rounded-md'
//                 onClick={handleClick}
//             >
//                 Ny pusekatt
//             </button>
//         </div>
//     );
// }
import React, { useState } from "react";

function CatPictures() {
    const [foxImageUrl, setFoxImageUrl] = useState(
        "https://randomfox.ca/images/13.jpg"
    );

    const fetchNewFoxImage = async () => {
        try {
            const response = await fetch("https://randomfox.ca/floof/");
            const data = await response.json();
            setFoxImageUrl(data.image);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className=' flex flex-col items-center'>
            <h1 className=' text-white py-6 text-[20px]'>Hva med en rev ?</h1>
            <br />
            {foxImageUrl !== "" && (
                <img height={300} width={300} src={foxImageUrl} alt='Fox' />
            )}
            <button
                className=' bg-pink-400 my-6 p-2 rounded-md'
                onClick={fetchNewFoxImage}
            >
                Ny Rev
            </button>
        </div>
    );
}

export default CatPictures;
