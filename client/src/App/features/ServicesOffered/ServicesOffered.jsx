import React from 'react';
import './servicesOffered.css';

function ServicesOffered() {
    return (
        <div className='feature'>

            <h2 className='title'>Services Offered</h2>

            <span className='featureContent'>
                Each Class is 45 minutes long and incorporates traditional yoga poses, breath work, relaxation techniques, stretching and strengthening poses. Each session is child lead and infused with play, fun-filled imagination, storytelling, dance, dynamic movement, art projects, and learning points.
            </span>

            <h3 className='serviceOfferedTitle'>Kids Yoga</h3>
            <span className='serviceOfferedDescription'>
                Kids ages 5-7 welcome. Caretakers are welcome to drop their child off to experience their yoga practice on their own.
            </span>

            <h3 className='serviceOfferedTitle'>Family Yoga</h3>
            <span className='serviceOfferedDescription'>
                Kids ages 1-5 and their families or caretakers are welcome to come play and connect
            </span>

            <h3 className='serviceOfferedTitle'>Birthday Parties/Special Events</h3>
            <span className='serviceOfferedDescription'>
                Celebrate your child’s birthday or special event with a magical and movement-filled family or kids yoga session led by a craft and goodie bags to finish off the fun.
            </span>

            <h3 className='serviceOfferedTitle'>Friday night yoga</h3>
            <span className='serviceOfferedDescription'>
                Drop your children off in their pj’s while you head off for date night! We will practice yoga, play games, read books and do an art project.
            </span>
        </div>
    )
}

export default ServicesOffered;  
