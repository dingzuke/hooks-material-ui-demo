import React from 'react';
import { useState, useEffect } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
function Example(props) {
    // 声明一个新的状态变量，我们将其称为 "count" 
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('useEffect');
        return () => {
            console.log('clear====');  
        }
    }, []);

    return (
        <div>
            <h1>react-hooks</h1>
            <Divider/>
            <p>You clicked {count} times</p>
            <Fab onClick={() => setCount(count + 1)} size="medium" color="secondary" aria-label="add">
                <AddIcon />
            </Fab>
        </div>
    );
}
export default Example;