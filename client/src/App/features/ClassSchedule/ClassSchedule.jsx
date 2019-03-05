import React from 'react';
import './classSchedule.css';

function ClassSchedule() {
    return (
        <div className='feature'>
            <h2 className='title'>Class Schedule</h2>
            <div className='featureContent'>
                <h3>Family Yoga</h3>
                <p>Every other Monday beginning March 25, 2019.</p>
                <ul>
                    <li>March 25, 2019</li>
                    <li>April 8, 2019</li>
                    <li>April 22, 2019</li>
                    <li>May 6, 2019</li>
                    <li>May 20, 2019</li>
                    <li>June 3, 2019</li>
                </ul>

                <div className='addressContainer'>

                    <a href="https://goo.gl/maps/4n4BjVdRWEH2" className='address'>
                        <span>Vitalize Community and Healing Arts Studio</span>
                        <span>3474 S 2300 E #12</span>
                        <span>Salt Lake CIty, UT 84109</span>
                    </a>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.994531720195!2d-111.82783698459555!3d40.69611807933363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528aa11e827631%3A0xc95dc61a52d89337!2sVitalize+Community+%26+Healing+Arts+Studio!5e0!3m2!1sen!2sus!4v1551758520682"
                        className='gmap' frameborder="0" allowfullScreen>
                    </iframe>
                </div>

            </div>
        </div>
    )
}

export default ClassSchedule;
