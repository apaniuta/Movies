import React, { Component } from 'react';
import { Link } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '16px',
    },
    button: {
        marginLeft: 16,
    }
};

const MoviesByTypeBox = props => {
    return (
        <div style={styles.container}>
            <Link to="/movies/popular">
                <RaisedButton
                    primary
                    label="Popular"
                    style={styles.button}
                />
            </Link>
            <Link to="/movies/top_rated">
                <RaisedButton
                    primary
                    label="Top Rated"
                    style={styles.button}
                />
            </Link>
            <Link to="/movies/now_playing">
                <RaisedButton
                    primary
                    label="Now Playing"
                    style={styles.button}
                />
            </Link>
        </div>
    );
}

export default MoviesByTypeBox;
