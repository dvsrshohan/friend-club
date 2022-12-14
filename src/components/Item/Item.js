import React from 'react';
import './Item.css'

const Item = (props) => {
    const { id, name, about, age, time, img } = props.activet;
    
    return (
        <div>
            <div className="col">
                <div className="card h-100 border border-0 p-3">
                    <img src={img} class="card-img-top" alt=""/>
                        <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{ about }</p>
                        <p className="card-text">For Age:{ age }</p>
                        <p className="card-text">Time required:{time}</p>
                        </div>
                        <button onClick={() => props.handlerAddToTime(time)} className='btn btn-primary w-100'>Add to list</button>
                </div>
            </div>
        </div>
    );
};

export default Item;
