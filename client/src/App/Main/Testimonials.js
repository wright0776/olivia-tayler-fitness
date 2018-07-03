import React, { Component } from 'react';
import SlideA from './slides/SlideA'
import SlideB from './slides/SlideB'
import SlideC from './slides/SlideC'
import RightArrowNarrow from '../../icons/right-arrow-narrow.js'
import LeftArrowNarrow from '../../icons/left-arrow-narrow'

class Testimonials extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentSlide: { transform: "translateX(0)" },
            navCircle: "a"
        }
    }

    viewedSlide = (slide) => {
        switch (slide) {
            case "a":
                this.setState({ currentSlide: { transform: "translateX(0)" }, navCircle: "a" })
                break;
            case "b":
                this.setState({ currentSlide: { transform: "translateX(-100%)" }, navCircle: "b" })
                break;
            case "c":
                this.setState({ currentSlide: { transform: "translateX(-200%)" }, navCircle: "c" })
                break;
            default:
                break;
        }
    };
    forwardSlide = (current) => {
        switch (current) {
            case "translateX(0)":
                this.setState({ currentSlide: { transform: "translateX(-100%)" }, navCircle: "b" })
                break;
            case "translateX(-100%)":
                this.setState({ currentSlide: { transform: "translateX(-200%)" }, navCircle: "c" })
                break;
            default:
                break;
        }
    }
    backSlide = (current) => {
        switch (current) {
            case "translateX(-100%)":
                this.setState({ currentSlide: { transform: "translateX(0)" }, navCircle: "a" })
                break;
            case "translateX(-200%)":
                this.setState({ currentSlide: { transform: "translateX(-100%)" }, navCircle: "b" })
                break;
            default:
                break;
        }
    }

    render() {

        let nav = this.state.navCircle;
        return (
            <div className='testimonials'>
                <div className='portrait'></div>
                <div className='eyebrow-blue'>Testimonials</div>
                <div className='carousel-view'>
                    <div style={this.state.currentSlide} className='slides'>
                        <SlideA />
                        <SlideB />
                        <SlideC />
                    </div>
                </div>
                <div className='carousel-pagination'>
                    <div onClick={() => this.backSlide(this.state.currentSlide.transform)}>
                        <LeftArrowNarrow />
                    </div>
                    <div className='pagination-circles-container'>
                        <div id="a" onClick={() => this.viewedSlide("a")} className='circle-container'>
                            {nav === "a" ?
                                <div className='pagination-circle-active'></div> :
                                <div className='pagination-circle'></div>}
                        </div>
                        <div id="b" onClick={() => this.viewedSlide("b")} className='circle-container'>
                            {nav === "b" ?
                                <div className='pagination-circle-active'></div> :
                                <div className='pagination-circle'></div>}
                        </div>
                        <div id="c" onClick={() => this.viewedSlide("c")} className='circle-container'>
                            {nav === "c" ?
                                <div className='pagination-circle-active'></div> :
                                <div className='pagination-circle'></div>}
                        </div>
                    </div>
                    <div onClick={() => this.forwardSlide(this.state.currentSlide.transform)}>
                        <RightArrowNarrow />
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonials
