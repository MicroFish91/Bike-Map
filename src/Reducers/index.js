function globalReducer(state, action){
    
    // Initialize States
    if (state === undefined){

        return { bikeData: [], lat: -95.370441, lng: 29.759019 };

    }

    // Determine State Changes Based on Action Received
    switch (action.type){

        case 'bikeUpdate':

            // action.payload.features represents an array of geojson objects

            if (action.payload !== null) {

                return {
                    ...state,
                    bikeData: action.payload.features,
                    lat: action.payload.features[0].geometry.coordinates[0],
                    lng: action.payload.features[0].geometry.coordinates[1]
                }

            } else {

                return {
                    ...state,
                    bikeData: action.payload,
                    lat: 29.759019, 
                    lng: -95.370441
                }

            }

        case "bikeClear":

            return {
                ...state,
                bikeData: [],
                lat: 29.759019, 
                lng: -95.370441
            }

        default:
            return state;
    }
}

export default globalReducer;