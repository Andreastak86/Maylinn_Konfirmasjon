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
    ];

    // Oppretter en state-variabel for å bestemme om et bilde er klikket på
    const [activeImage, setActiveImage] = useState("");

    // Funksjon for å håndtere klikk på bildene
    const handleClick = (image) => {
        setActiveImage(image);
    };

    return (
        <div className=' grid grid-cols-3 gap-4  '>
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
                            activeImage === image ? "5px solid black" : "none",
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
    );
};

export default Gallery;
