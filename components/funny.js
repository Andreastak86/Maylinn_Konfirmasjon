import { useState, useEffect } from "react";

export default function Funny() {
    const [activity, setActivity] = useState("");

    useEffect(() => {
        fetchActivity();
    }, []);

    const fetchActivity = () => {
        fetch("https://www.boredapi.com/api/activity/")
            .then((response) => response.json())
            .then((data) => {
                setActivity(data.activity);
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className=' text-white mx-auto flex flex-col justify-center  items-center align-middle'>
            <h1 className=' text-[24px] py-5'>
                Gå aldri tomt for ideer du kan gjøre!
            </h1>
            <p>Aktivitet:</p>
            <p className=' py-4'>{activity}</p>
            <button
                className=' border-2 border-pink-400 bg-pink-300 my-4'
                onClick={fetchActivity}
            >
                Gi meg en ny aktivitet
            </button>
        </div>
    );
}
