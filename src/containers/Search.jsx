import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { searchMovies } from '../actions';

import SearchBox from '../components/SearchBox.jsx';
import Loader from '../components/Loader.jsx';
import MovieGrid from '../components/MovieGrid.jsx';
import MoviesByTypeBox from '../components/MoviesByTypeBox.jsx';

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

@withRouter
@connect(
    mapStateToProps,
    { searchMovies }
)
export default class Search extends Component {
    componentDidMount() {
        const { search, searchMovies } = this.props;

        if (search) {
            searchMovies(search);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.search && nextProps.search !== this.props.search) {
            this.props.searchMovies(nextProps.search);
        }
    }

    handleSearch = search => {
        const { location, router } = this.props;

        router.push({
            pathname: '/movies',
            query: { ...location.query, search }
        });
    }

    render() {
        const { search, loading, movies, children } = this.props;

        return (
            <div>
                <SearchBox search={search} onSearch={this.handleSearch} />
                <MoviesByTypeBox />
                { 
                    search
                    ?
                    <div style={styles.container}>
                        <Loader loading={loading}>
                            <MovieGrid movies={movies} />
                        </Loader>
                    </div>
                    :
                    children
                }
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        movies: state.movies.items,
        loading: state.movies.isFetching,
        search: ownProps.location.query.search
    };
}
