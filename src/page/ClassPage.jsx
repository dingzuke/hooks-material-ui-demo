import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <h1>react-类</h1>
                <Divider />
                <p>You clicked {this.state.count} times</p>
                <Fab onClick={() => this.setState({ count: this.state.count + 1 })} size="medium" color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>
            </div>
        );
    }
}
export default Example;