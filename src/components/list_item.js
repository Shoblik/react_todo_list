import React from 'react';
import Modal from './modal';

export default props => {
    const {complete} = props.item;

    const listStyle = {
        textDecoration: 'line-through',
        color: '#ddd',
    }

    return(
        <li className='collection-item'>
            <div style={complete ? listStyle: {}} className='title'>{props.item.title}</div>
            <div className='buttonContainer'>
                <Modal/>
             <button onClick={() => props.delete(props.index)} className='btn red btn-floating'>
                 <i className='material-icons'>delete_forever</i>
             </button>
                <button onClick={() => props.complete(props.index)} className={`btn btn-floating ${ complete ? 'green' : 'yellow'}`}>
                    <i className='material-icons'>{complete ? 'check' : 'check_box_outline_blank'}</i>
                </button>
            </div>
        </li>
    )
}