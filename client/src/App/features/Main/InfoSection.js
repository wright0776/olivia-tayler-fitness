import React from 'react';
import {Link} from 'react-router-dom';

function InfoSection() {
    return (
        <div>
            <section className='info-section'>
                <h3>New classes each week.</h3>
                <p>Each week I come up with fun new theme for class.</p>
                <Link className='info-link' to='/class-schedule'>
                    View the class schedule
               </Link>
            </section>
            <section className='info-section'>
                <h3>No equipment needed.</h3>
                <p>I provide everything you will need for class. Just bring yourself and a smile.</p>
                <Link className='info-link' to='/class-schedule'>
                    Check out the studio
               </Link>
            </section>
            <section className='info-section'>
                <h3>Have fun while learning.</h3>
                <p>Kids learn about fun topics while moving through class to create an active learning environment.</p>
                <Link className='info-link' to='/class-schedule'>
                    {/* See some of the topics */}
                    View the class schedule
               </Link>
            </section>
        </div>
    )
}

export default InfoSection
