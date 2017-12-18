import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import ListContainer from './list_container';
import AddForm from './add_item';
import TodoData from '../todo_data';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoData: TodoData,
        }
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(item) {
        item.complete = false;
        this.setState({
            todoData: [item, ...this.state.todoData],
        })
    }
    deleteItem(index) {
        const tempData = this.state.todoData.slice();

        tempData.splice(index, 1);

        this.setState({
            todoData: tempData,
        })
    }

    render() {
        const {todoData} = this.state;

        return(
            <div className='container'>
                <h1 className='center-align'>To Do List</h1>
                <AddForm add={this.addItem}/>
                <ListContainer delete={this.deleteItem} list={todoData}/>
            </div>
        )
    }

};

export default App;
