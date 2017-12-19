import React, {Component} from 'react';
import Modal from './modal';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailsVisible: false,
        }
    }

    changeDetailVisibility() {
        let newState = this.state.detailsVisible = !this.state.detailsVisible;

        this.setState({
            detailsVisible: newState,
        })
    }
    render() {
        const styles = {
            'backgroundColor': 'black',
            'color': 'white',
            'height': '10vh',
        }

        const {complete} = this.props.item;

        const listStyle = {
            textDecoration: 'line-through',
            color: '#ddd',
        }

        const modalMessage= (
            <div>
                <h4>Are you sure you want to delete?</h4>
                <ul>
                    <li>{this.props.item.title}</li>
                </ul>
            </div>)

        return(
            <li className='collection-item'>
                <div style={complete ? listStyle: {}} className='title'>{this.props.item.title}</div>
                <div className='buttonContainer'>
                    <Modal callback={() => this.props.delete(this.props.index)} text={modalMessage} className='btn btn-floating red'>
                        <i className='material-icons'>delete_forever</i>
                    </Modal>
                    <button onClick={() => this.props.complete(this.props.index)} className={`btn btn-floating ${ complete ? 'green' : 'yellow'}`}>
                        <i className='material-icons'>{complete ? 'check' : 'check_box_outline_blank'}</i>
                    </button>
                    <button onClick={() => {this.changeDetailVisibility()}} className={`btn btn-floating`}>
                        info
                    </button>
                </div>
                <div style = {this.state.detailsVisible ? styles : null}>{this.state.detailsVisible ? this.props.item.details : ''}</div>
            </li>
        )
    }
}
export default ListItem;