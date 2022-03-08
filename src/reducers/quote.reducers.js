import { getNewQuotes } from "../saga/quote.saga";
import QuoteTypes from "../actionTypes/quote.types";

// Spread Operator

const INITIAL_STATE = {
    quote:'Let\'s Find a new Joke'
};

const quoteReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case QuoteTypes.GET_NEW_QUOTE:{
            const DerivedNewQuote = getNewQuotes();
            return {DerivedNewQuote,...state};
        }
        default:{
            return {...state}
        }
    }
}

export default quoteReducer;