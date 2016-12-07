import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchMoviesExtra } from '../actions';

import SearchBox from '../components/SearchBox.jsx';
import Loader from '../components/Loader.jsx';
import MovieGrid from '../components/MovieGrid.jsx';

const styles = {
    container: {
        height: '100%',
        maxWidth: 800,
        width: '100%',
        paddingLeft: 16,
        paddingRight: 16,
        margin: '0 auto'
    },
    header: {
        textAlign: 'center'
    }
};

@connect(
    mapStateToProps,
    { fetchMoviesExtra }
)
export default class MovieRecommendations extends Component {
    componentDidMount() {
        const { movieId, type, fetchMoviesExtra } = this.props;

        if (type) {
            fetchMoviesExtra(movieId, type);
        }
    }

    render() {
        return (
            <div style={styles.container}>
                <h1 style={styles.header}>Movie Recommendations</h1>
                <Loader loading={this.props.loading}>
                    <MovieGrid movies={this.props.movies} />
                </Loader>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        movies: state.movies.items,
        loading: state.movies.isFetching,
        type: ownProps.route.path,
        movieId: ownProps.params.id
    };
}
