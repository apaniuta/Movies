import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchMoviesByType } from '../actions';

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
    }
};

@connect(
    mapStateToProps,
    { fetchMoviesByType }
)
export default class MoviesByType extends Component {
    componentDidMount() {
        const { type, fetchMoviesByType } = this.props;

        if (type) {
            fetchMoviesByType(type);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.type !== this.props.type) {
            this.props.fetchMoviesByType(nextProps.type);
        }
    }

    render() {
        return (
            <div style={styles.container}>
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
        type: ownProps.route.path
    };
}
