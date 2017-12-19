import React, {Component} from 'react';
import '../assets/css/modal.css';

class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }

    }

    handleConfirm() {
        this.props.callback();

        this.setState({
            visible: false,
        });


    }

    render() {
        var button =  <button onClick={() => this.setState({visible: true})} className={this.props.className ? this.props.className : 'btn'}>
            {this.props.children ? this.props.children : 'X'}
        </button>
        if (this.state.visible) {
            return (
               <span>
                   {button}
                   <div className='mymodal'>
                       <div className='card'>
                           <div className="card-content">
                               {this.props.text}
                           </div>
                           <div className="card-action">
                               <button onClick={() => this.handleConfirm()}  className='btn red'>Confirm</button>
                               <button onClick={() => this.setState({visible: false})} className='btn green'>Cancel</button>
                           </div>
                       </div>
                   </div>
               </span>
            );
        }
        return (
            button
        )
    }
}

export default Modal;