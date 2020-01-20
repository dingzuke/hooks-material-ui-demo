import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";
import '../App.css';
import HooksPage from './HooksPage';
import ClassPage from './ClassPage';
import MaterialUI from './MaterialUI';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

function App() {
    let history = useHistory();
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                        <Button color="inherit" onClick={() => history.push("/hooks")}>hooks</Button>
                        <Button color="inherit" onClick={() => history.push("/class")}>类</Button>
                        <Button color="inherit" onClick={() => history.push("/materialUI")}>material-ui</Button>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
            <Container maxWidth="sm">
                <Switch>
                    <Route exact path="/hooks" component={HooksPage} />
                    <Route exact path="/class" component={ClassPage} />
                    <Route exact path="/materialUI" component={MaterialUI} />
                    <Redirect path="/" to={{ pathname: '/hooks' }} />
                </Switch>
            </Container>
        </div>
    );
}

export default App;
