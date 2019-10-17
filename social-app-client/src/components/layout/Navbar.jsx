import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MyButton from '../../util/MyButton';
import PostScream from '../scream/PostScream';
import Notifications from './Notifications';

//MUI stuff
import {
    AppBar,
    Toolbar,
    Button,
    Tooltip
} from '@material-ui/core';

//Icons
import HomeIcon from '@material-ui/icons/Home';

//Redux stuff
import { connect } from 'react-redux';

class Navbar extends Component {
    render() {
        const { authenticated } = this.props;
        return (
                <AppBar>
                    <Toolbar className="nav-container">
                        {authenticated ? (
                            <Fragment>
                                <PostScream />
                                <Link to="/">
                                    <MyButton tip="Home">
                                        <HomeIcon/>
                                    </MyButton>
                                </Link>
                                <Notifications/>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <Button color="inherit" component={Link} to="/login">
                                Login
                                </Button>
                                <Button color="inherit" component={Link} to="/">
                                    Home
                                </Button>
                                <Button color="inherit" component={Link} to="/signup">
                                    Sign Up
                                </Button>
                            </Fragment>
                        )}
                    </Toolbar>
                </AppBar>
        )
    }
}

Navbar.propTypes = {
    authenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(Navbar);
