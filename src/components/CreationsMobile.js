import React from 'react';
import { dataMobile } from '../database/DataMobile';
import '../styles/mobile.css';

const CreationsMobile = () => {

    return (
        <section className='mobile'>
            <div className="title">
                <h2>Our creations</h2>

            </div>
            <section className='cards-mobile'>
                {dataMobile.map((cards) => {
                    return (
                        <article key={cards.id} className='card-mobile'>
                            <div className='cardimg'>
                                <img src={cards.image} alt="creations card" />
                            </div>
                            <h3 className='titlecard'>{cards.title}</h3>
                        </article>
                    )
                })}
            </section>
            <div className="btn-container">
                <button className="btn">See All</button>
            </div>
        </section>
    )
}

export default CreationsMobile;