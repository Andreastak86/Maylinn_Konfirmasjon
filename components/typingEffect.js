import Typewriter from "typewriter-effect";

export default function TypingEffect() {
    return (
        <div>
            <Typewriter
                options={{
                    strings: ["Gratulerer med konfirmasjonen!"],
                    autoStart: true,
                    pauseFor: 4500,
                    loop: true,
                }}
            />
        </div>
    );
}
