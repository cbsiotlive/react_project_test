import React from "react";
import PropType from 'prop-types';

export default function Slider(slider) {

    return (
        <div className="row mt-4 p-4">
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{slider.FirstslideTitle}</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.
                        With supporting text below as a natural lead-in to additional content.
                        With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.
                        With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{slider.secundslideTitle}</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.
                        With supporting text below as a natural lead-in to additional content.
                        With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.
                        With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{slider.ThirdslideTitle}</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.
                        With supporting text below as a natural lead-in to additional content.
                        With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.
                        With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{slider.ForelideTitle}</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.
                        With supporting text below as a natural lead-in to additional content.
                        With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.
                        With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

Slider.defaultProps = {
    FirstslideTitle: '1 slide Text',
    secundslideTitle: '2 slide Text',
    ThirdslideTitle: '3 slide Text',
    ForelideTitle: '4 slide Text'
};