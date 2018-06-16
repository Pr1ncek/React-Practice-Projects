import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action){
    console.log(action);
    switch(action.type){
        case FETCH_WEATHER: {
            // concat returns a new array with our old data and the new data addded.
            // return state.concat([action.payload.data]);
            return [action.payload.data, ...state]; 
        }
            
    }
    return state;
}