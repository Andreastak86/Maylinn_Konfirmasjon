import { useState } from "react";

const Dog = () => {
    const [imageUrl, setImageUrl] = useState("");

    const fetchNewDogImage = async () => {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setImageUrl(data.message);
    };

    return (
        <div className=' flex flex-col items-center'>
            <h1 className=' text-white py-6 text-[20px]'>
                Eller hva med en hund?
            </h1>
            <img src={imageUrl} alt='Dog' height='300' width='300' />
            <button
                className=' bg-pink-400 my-6 p-2 rounded-md'
                onClick={fetchNewDogImage}
            >
                Ny Voffs
            </button>
        </div>
    );
};

export default Dog;
