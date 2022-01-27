import React from 'react';

const SingleSlide = ({ item }) => {
    return (
        <div style={{ background: `linear-gradient(190deg, #fa7c30 30%, rgba(0, 0, 0, 0)30%), url(${item.img}) ;` }}>
            <div >
                <h2>{item.title}</h2>
                {/* <img src={item.img} alt="" /> */}
            </div>
        </div>

    );
};

export default SingleSlide;

// linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${item.img})