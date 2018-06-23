import React from 'react';
import {Link} from 'react-router-dom';

function InfoSection() {
    return (
        <div>
            <section className='info-section'>
                <h3>New workouts released every week.</h3>
                <p>I create new fun and creative workouts each week to keep that BIG BUM&trade; of yours in shape.</p>
                <Link className='info-link' to='/workouts'>
                    View All Workout Videos
               </Link>
            </section>
            <section className='info-section'>
                <h3>Health and wellness advice to maximize the returns on your hard work.</h3>
                <p>I provide advice on how to eat and live based on what has helped me and on my journey to fitness.</p>
                <Link className='info-link' to='/health-advice'>
                    Check Out Health Advice
               </Link>
            </section>
            <section className='info-section'>
                <h3>Recipes to fuel your fight.</h3>
                <p>I believe good nutrition is half the battle of getting and staying fit.</p>
                <Link className='info-link' to='/recipes'>
                    Check Out Some Of My Favorite Recipes
               </Link>
            </section>
        </div>
    )
}

export default InfoSection
