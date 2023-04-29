import React, { useState } from "react";
import Image from "next/image";

import M1 from "../img/photo-lib/1m.jpg";
import M2 from "../img/photo-lib/2m.jpg";
import M3 from "../img/photo-lib/3m.jpg";
import M4 from "../img/photo-lib/4m.jpg";
import M5 from "../img/photo-lib/5m.jpg";
import M6 from "../img/photo-lib/6m.jpg";
import M7 from "../img/photo-lib/7m.jpg";
import M8 from "../img/photo-lib/8m.jpg";
import M9 from "../img/photo-lib/9m.jpg";
import M10 from "../img/photo-lib/10m.jpg";
import M11 from "../img/photo-lib/11m.jpg";
import M12 from "../img/photo-lib/12m.jpg";
import M13 from "../img/photo-lib/13m.jpg";
import M14 from "../img/photo-lib/14m.jpg";
import M15 from "../img/photo-lib/15m.jpg";
import M16 from "../img/photo-lib/16m.jpg";
import M17 from "../img/photo-lib/17m.jpg";
import M18 from "../img/photo-lib/18m.jpg";
import M19 from "../img/photo-lib/19m.jpg";
import M20 from "../img/photo-lib/20m.jpg";
import M21 from "../img/photo-lib/21m.jpg";
import M22 from "../img/photo-lib/22m.jpg";
import M23 from "../img/photo-lib/23m.jpg";
import M24 from "../img/photo-lib/24m.jpg";
import M25 from "../img/photo-lib/25m.jpg";
import M26 from "../img/photo-lib/26m.jpg";
import M27 from "../img/photo-lib/27m.jpg";
import M28 from "../img/photo-lib/28m.jpg";
import M29 from "../img/photo-lib/29m.jpg";
import M30 from "../img/photo-lib/30m.jpg";
import M31 from "../img/photo-lib/31m.jpg";
import M32 from "../img/photo-lib/32m.jpg";
import M33 from "../img/photo-lib/33m.jpg";
import M34 from "../img/photo-lib/34m.jpg";
import M35 from "../img/photo-lib/35m.jpg";

const Gallery = () => {
    // Oppretter et array med URL-er til bildene
    const images = [
        M1,
        M2,
        M3,
        M4,
        M5,
        M6,
        M7,
        M8,
        M9,
        M10,
        M11,
        M12,
        M13,
        M14,
        M15,
        M16,
        M17,
        M18,
        M19,
        M20,
        M21,
        M22,
        M23,
        M24,
        M25,
        M26,
        M27,
        M28,
        M29,
        M30,
        M31,
        M32,
        M33,
        M34,
        M35,
    ];

    // Oppretter en state-variabel for å bestemme om et bilde er klikket på
    const [activeImage, setActiveImage] = useState("");

    // Funksjon for å håndtere klikk på bildene
    const handleClick = (image) => {
        setActiveImage(image);
    };

    return (
        <>
            <div className=' text-white my-6 text-center'>
                <h2>Det har blitt noen bilder opp gjennom årene</h2>
                <p>Håper du setter pris på dem 😃 </p>
            </div>
            <div className=' grid grid-cols-3 gap-4 items-center  '>
                {images.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt={`Bilde nummer ${index}`}
                        style={{
                            maxWidth: "100px",
                            maxHeight: "100px",
                            margin: "5px",
                            cursor: "pointer",
                            border:
                                activeImage === image
                                    ? "5px solid black"
                                    : "none",
                        }}
                        onClick={() => handleClick(image)}
                    />
                ))}
                {activeImage && (
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "rgba(0, 0, 0, 0.75)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 9999,
                        }}
                        onClick={() => setActiveImage("")}
                    >
                        <Image
                            src={activeImage}
                            alt='Stort bilde'
                            style={{ maxWidth: "95%", maxHeight: "95%" }}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default Gallery;
