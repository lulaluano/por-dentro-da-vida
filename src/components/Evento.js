import React from 'react';
import SubLinhado from "./SubLinhado";

export default function Evento(props) {

    let live
    if (props.live) {
        live = ':Live'
    } else {
        live = ''
    }

    return (
        <div className="col-3 evento flex-center bg-white">
            <div>
                <div className="d-flex align-items-center">
                    <div className="d-inline-flex align-items-center text-main fs-14">
                        <span className="fas fa-calendar-alt" />
                        <span className="text-main ps-2 fs-14">{props.date} <span className="text-sec">|</span> Online{live}</span>
                    </div>
                </div>

                <div className="pt-3">
                    <h2 className="mb-0 text-sec fs-20">{props.children}</h2>
                </div>

                <div className="pt-2">
                    <a href="#" className="text-decoration-none">
                        <SubLinhado id="ver-mais" textSize="27" textColor="sec" linePosition="start" lineColor="main">
                            ver mais
                        </SubLinhado>
                    </a>
                </div>
            </div>
        </div>
    )
}