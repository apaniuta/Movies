import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './containers/App.jsx';
import Search from './containers/Search.jsx';
import MoviesByType from './containers/MoviesByType.jsx';
import Movie from './containers/Movie.jsx';
import MovieSimilar from './containers/MovieSimilar.jsx';
import MovieRecommendations from './containers/MovieRecommendations.jsx';

import store from './store';

import './assets/main.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

const routes = (
    <Route component={App}>
        <Redirect from="/" to="movies" />
        <Route path="movies" component={Search}>
            <Route path="popular" component={MoviesByType} />
            <Route path="top_rated" component={MoviesByType} />
            <Route path="now_playing" component={MoviesByType} />
        </Route>

        <Route path="movies/:id" component={Movie}>
            <Route path="recommendations" component={MovieRecommendations} />
            <Route path="similar" component={MovieSimilar} />
        </Route>
    </Route>
);

const history = syncHistoryWithStore(hashHistory, store);

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root')
);
