import React from "react";

const Footer = () => {
    return (
        <footer className=' border-t-2 border-pink-400 py-4 bg-pink-400'>
            <div className='flex justify-center'>
                <div className=' bg-purple-400 h-px'></div>
            </div>
            <div className='text-center py-4 text-sm text-gray-900 bg-pink-400'>
                &copy; Laget av Onkel Andreas {new Date().getFullYear()}
            </div>
        </footer>
    );
};

export default Footer;
