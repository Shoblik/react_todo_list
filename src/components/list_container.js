import React, {Component} from 'react';
import ListItem from './list_item';

class ListContainer extends Component {
    constructor(props) {
        super(props);
    }

    showDetails(index) {
        var details = this.props.list[index].details;
        console.log(details);
    }

    render() {

        const list = this.props.list.map((item, index) => {
            //Get this to work
            return (
                <div key={index}>
                    <ListItem key={index} index={index} item={item} delete={this.props.delete} complete={this.props.toggleComplete}/>

                </div>
            )
        })

        return(
            <div>
                <ul className='collection'>
                    {list}
                </ul>
            </div>
        )
    }
}

export default ListContainer;