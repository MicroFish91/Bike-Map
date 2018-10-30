function globalReducer(state, action){
    
    // Initialize States
    if (state === undefined){

        return {bikeData: []};

    }

    // Determine State Changes Based on Action Received
    switch (action.type){

        case 'bikeUpdate':

            console.log(action.payload.features);

            // action.payload.features represents an array of geojson objects
            return {
                ...state,
                bikeData: action.payload.features 
            }

        default:
            return state;
    }
}

export default globalReducer;