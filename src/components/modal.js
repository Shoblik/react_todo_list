import React, {Component} from 'react';
import '../assets/css/modal.css';

class Modal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='mymodal'>
                <div className='card'>
                    <div className="card-content">
                        <p>Confirm Delete</p>
                    </div>
                    <div className="card-action">
                        <button className='btn red'>Confirm</button>
                        <button className='btn green'>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;