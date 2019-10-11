import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchJokes = () => dispatch => {
    dispatch({ 
        type: START_FETCHING 
    });
    axios
    .get('https://sv443.net/jokeapi/category/programming')
    .then(res => {
        console.log('Jokes were loaded successfully',res)
        dispatch({ 
            type: FETCH_SUCCESS, 
            payload: res.data,
        })
    })

    .catch( error => {
        console.log('There was an error retrieving data',error)
        dispatch({ 
            type: FETCH_FAILURE, 
            payload: error 
        });
    })

};


