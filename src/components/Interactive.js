import React from 'react';
import imgInteractive from '../assets/desktop/image-interactive.jpg';
import '../styles/interactive.css';

export function Interactive() {
    return (
        <>
            <section className='interactive'>
                <div>
                    <img src={imgInteractive} alt='interactive' className='img-interactive' />
                </div>
                <div className='text-interactive'>
                    <h2>The leader in interactive VR</h2>
                    <p>
                        Founded in 2011, Loopstudios has been producing world-class virtual
                        reality projects for some of the best companies around the globe.
                        Our award-winning creations have transformed businesses through
                        digital experiences that bind to their brand.
                    </p>
                </div>
            </section>
        </>
    )
}

export default Interactive;