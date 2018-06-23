import React, { Component } from 'react';
import RightArrowNarrow from '../icons/right-arrow-narrow.js'
import LeftArrowNarrow from '../icons/left-arrow-narrow'

class Testimonials extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slideA: "translateX(0)",
            slideB: "translateX(-100%)",
            slideC: "translateX(-200%)",
            currentSlide: { transform: "translateX(0)" },
            navCircle: ""
        }
    }

    viewedSlide = (slide) => {
        switch (slide) {
            case "a":
                this.setState({ currentSlide: "translateX(0)" })
                break;
            case "b":
                this.setState({ currentSlide: "translateX(-100%)" })
                break;
            case "c":
                this.setState({ currentSlide: "translateX(-200%)" })
            default:
                break;
        }
    };
    forwardSlide = (current) => {
        switch (current) {
            case "translateX(0)":
                this.setState({currentSlide: "translateX(-100%)"})
                break;
            case "translateX(-100%)":
                this.setState({currentSlide: "translateX(-200%)"})
                break;
            default:
                break;
        }
    }
    backSlide = (current) => {
        switch (current) {
            case "translateX(-100%)":
                this.setState({currentSlide: "translateX(0)"})
                break;
            case "translateX(-200%)":
                this.setState({currentSlide: "translateX(-100)"})
                break;
            default:
                break;
        }
    }
    message = () => alert("message!")

    render() {
        console.log(this.state.currentSlide.transform === this.state.slideA)
        console.log(this.state.currentSlide)
        console.log(this.state.slideA)
        console.log(this.state)
        return (
            <div className='testimonials'>
                <div className='portrait'></div>
                <div className='eyebrow-blue'>Testimonials</div>
                <div className='carousel-view'>
                    <div style={{ transform: this.state.currentSlide }} className='slides'>
                        <div className='slide1'>
                            slide 1
                        </div>
                        <div className='slide2'>
                            slide 2
                        </div>
                        <div className='slide3'>
                            slide 3
                        </div>
                    </div>
                </div>
                <div className='carousel-pagination'>
                    <div onClick={()=>this.backSlide(this.state.currentSlide.transform)}>
                        <LeftArrowNarrow />
                    </div>
                    <div className='pagination-circles-container'>
                        <div id="a" onClick={() => this.viewedSlide("a")} className='circle-container'>
                            {this.state.currentSlide.transform === this.state.slideA ?
                                <div className='pagination-circle-active'></div> :
                                <div className='pagination-circle'></div>}
                        </div>
                        <div id="b" onClick={() => this.viewedSlide("b")} className='circle-container'>
                            <div className='pagination-circle'></div>
                        </div>
                        <div id="c" onClick={() => this.viewedSlide("c")} className='circle-container'>
                            <div className='pagination-circle'></div>
                        </div>
                    </div>
                    <div onClick={()=>this.forwardSlide(this.state.currentSlide.transform)}>
                        <RightArrowNarrow />
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonials
