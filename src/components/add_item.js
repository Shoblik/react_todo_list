import React, {Component} from 'react';

class AddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            details: '',
        }
        this.handleAddItem = this.handleAddItem.bind(this);
    }

    handleAddItem(e) {
        e.preventDefault();
        this.props.add(this.state);

        this.setState({
            title: '',
            details: '',
        })
    }
    render() {
        const {title, details} = this.state;


        return(
            <form onSubmit={this.handleAddItem}>
                <input onChange={({target}) => this.setState({title: target.value})} type='text' placeholder='Title' value={title}/>
                <input  onChange={({target}) => this.setState({details: target.value})} type='text' placeholder='Details' value={details}/>
                <button className='btn  green'>Add Item</button>
            </form>
        );
    }
}
export default AddForm