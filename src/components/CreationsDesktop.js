import React from 'react';
import { data } from '../database/DataDesktop';
import '../styles/desktop.css';

const CreationsDesktop = () => {

    return (
        <section className='desktop'>
            <div className="title">
                <h2>Our creations</h2>
                <div className="btn-container">
                    <button className="btn">See All</button>
                </div>
            </div>
            <section className='cards'>
                {data.map((cards) => {
                    return (
                        <article key={cards.id} className='card'>
                            <div className='cardimg'>
                                <img src={cards.image} alt="creations card" />
                            </div>
                            <h3 className='titlecard'>{cards.title}</h3>
                        </article>
                    )
                })}
            </section>

        </section>
    )
}

export default CreationsDesktop;