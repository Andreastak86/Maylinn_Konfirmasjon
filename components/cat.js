import { useState, useEffect } from "react";

export default function CatPictures() {
    const [pictureUrl, setPictureUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPicture = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("https://cataas.com/cat");
            const picture = await response.url;
            setPictureUrl(picture);
        } catch (error) {
            setError("An error occurred while fetching the data");
        } finally {
            setIsLoading(false);
        }
    };

    const handleClick = () => {
        fetchPicture();
    };

    useEffect(() => {
        fetchPicture();
    }, []);

    return (
        <div className=' flex flex-col items-center'>
            <h1 className=' text-white py-6 text-[20px]'>
                Din daglige pusekatt
            </h1>
            {isLoading && <p>Loading data...</p>}
            {!isLoading && error && <p>{error}</p>}
            {!isLoading && !error && <img src={pictureUrl} alt='A cat' />}
            <button
                className=' bg-pink-400 my-6 p-2 rounded-md'
                onClick={handleClick}
            >
                Ny pusekatt
            </button>
        </div>
    );
}
