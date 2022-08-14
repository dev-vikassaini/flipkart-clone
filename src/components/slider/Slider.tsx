import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './slider.css';

function Slider() {
    const sliderData = (
        <AwesomeSlider
            bullets={false}
            media={[
                {
                    source: 'https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/0d2bb014b565d3cb.jpg?q=50',
                },
                {
                    source: 'https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/5c3e2bfdfad129b8.jpg?q=50',
                }
            ]}
        />
    );

    return (
        <div className='slider-container'>{sliderData}</div>
    )
}

export default Slider