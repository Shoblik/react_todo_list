import React from 'react';

export default props => {
    return(
        <li className='collection-item'>
            <div className='title'>{props.item.title}</div>
            <div className='buttonContainer'>
             <button onClick={() => props.delete(props.index)} className='btn red'>Delete</button>
            </div>
        </li>
    )
}