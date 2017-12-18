import React, {Component} from 'react';
import ListItem from './list_item';

class ListContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('Data: ', this.props.list);

        const list = this.props.list.map((item, index) => {
            return <ListItem key={index} index={index} item={item} delete={this.props.delete}/>
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