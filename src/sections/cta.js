import React from 'react';
import { Link } from "gatsby";

const CTA = () =>    {
    return(
    <section className="bg-gradient-to-r from-two via-three to-highlight py-32 w-full uppercase flex flex-col">
        <h1 className="text-3xl font-bold text-white text-center">Want to work with me ?</h1>
        <Link to="/contact" className="p-4 mt-8 bg-white text-primary w-32 text-center font-bold mx-auto">CONTACT</Link>
    </section>
);
}

export default CTA;
