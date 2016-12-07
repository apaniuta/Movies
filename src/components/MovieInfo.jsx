import React from 'react';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router';

import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

const styles = {
    container: {
        width: '100%',
        maxWidth: 800,
        margin: '0 auto',
        display: 'flex',
    },
    info: {
        marginLeft: 16,
        padding: 16,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        width: '100%'
    },
    img: {
        height: 450,
    },
    title: {
        fontWeight: 500
    },
    subtitle: {
        fontWeight: 500
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center',
        padding: '8px'
    },
    button: {
        marginLeft: 16,
    }
};

const MovieInfo = props => {
    return (
        <Paper zDepth={3} style={styles.container}>
            {
                props.posterPath
                && <img style={styles.img} src={`https://image.tmdb.org/t/p/w500${props.posterPath}`} />
            }
            <div style={styles.info}>
                <div>
                    <h1 style={styles.title}>{props.title}</h1>

                    <p>{props.overview}</p>
                </div>
                <div>
                    <Divider />
                    <div style={styles.buttons}>
                        
                        <Link to={`/movies/${props.id}/similar`}>
                            <FlatButton
                                label="Similar"
                                style={styles.button}
                            />
                        </Link>
                        <Link to={`/movies/${props.id}/recommendations`}>
                            <FlatButton
                                label="Recommendations"
                                style={styles.button}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </Paper>
    );
}

export default MovieInfo;
