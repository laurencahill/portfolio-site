import React, { Component } from 'react';
 
class Carousel extends Component {
    render() {
        return (
            <div>
                <div className="testimoinals">
                    <img src="./images/testimonial-1.jpg" alt="" />
                </div>
                <div className="testimoinals">
                    <img src="./images/testimonial-2.jpg" alt="" />
                </div>
                <div className="testimoinals">
                    <img src="./images/testimonial-3.jpg" alt="" />
                </div>
                <div className="testimoinals">
                    <img src="./images/testimonial-4.jpg"  alt=""/>
                </div>
            </div>
        );
    }
};
 
export default Carousel;

