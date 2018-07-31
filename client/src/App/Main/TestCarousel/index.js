import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './carousel.min.css';
import './carousel.css';

class TestCarousel extends Component {

    render() {
        return (
            <div className='carouselContainer'>
                {/* <img className='otfitPortrait' src={require("../../../media/otfitportrait2.jpeg")} alt="woman doing yoga"/> */}
                <Carousel className='carousel' showThumbs={false} emulateTouch={true}>
                    <div>
                        <img src="https://source.unsplash.com/NodtnCsLdTE/500x500/" alt="" />
                        <p className='legend'>
                            "Olivia Tayler Fitness helped me get my self confidence back. I look great and I feel even better! I can't imagine my life without it."
                    {/* <span>Kitty G.</span> */}
                        </p>
                    </div>
                    <div>
                        <img src="https://source.unsplash.com/jgJ3rDPcOjc/500x500/" alt="" />
                        <p className='legend'>
                            "I love the ease of working out at home & Olivia is the most down to earth, non-intimidating fitness instructer out there."
                        {/* <span>Tiger</span> */}
                        </p>
                    </div>
                    <div>
                        <img src="https://source.unsplash.com/K4mSJ7kc0As/500x500/" alt="" />
                        <p className='legend'>
                            "FINALLY an affordable product that delivers EXACTLY what it says it will! I'm totally blown away. I'm totally hooked."
                        {/* <span>Danny B.</span> */}
                        </p>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default TestCarousel
