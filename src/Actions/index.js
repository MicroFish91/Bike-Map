// Update State with New Bike Data
export const bikeUpdate = (formData) => async dispatch => {

    // Set API Call Fetch String
    var searchString = searchFormat(formData);

    try {

        // Make API Call to BikeWise
        const response = await fetch(searchString)
        .then(result => result.json())

        return dispatch({ type: "bikeUpdate", payload: response });

    } catch (error) {

        console.log(error);

        return dispatch({ type: "bikeUpdate", payload: null });

    }

};

// Clear Existing Bike Data from State
export const bikeClear = () => dispatch => {

    return dispatch({type: "bikeClear"});

}


// Toggle Add Button
export const toggleAdd = () => dispatch => {

    return dispatch({type: "toggleAdd"});

}


// Toggle Scatter Button
export const toggleScatter = () => dispatch => {

    return dispatch({type: "toggleScatter"});

}

// Toggle Form Button
export const toggleForm = () => dispatch => {

    return dispatch({type: "toggleForm"});

}


// Format incoming data to match formatting requirements for BikeWise API
function searchFormat(formData){

    // Initialize base url
    var requestURL = "https://bikewise.org:443/api/v2/locations?";

    // Add additional string search parameters as necessary
    if (formData.occurredBefore){
        // Convert to unix timestamp
        requestURL += `occurred_before=${Math.round((new Date(formData.occurredBefore)).getTime() / 1000)}&`;
    }

    if (formData.occurredAfter){
        // Convert to unix timestamp
        requestURL += `occurred_after=${Math.round((new Date(formData.occurredAfter)).getTime() / 1000)}&`;
    }

    if (formData.incidentType){
        requestURL += `incident_type=${formData.incidentType}&`;
    }

    if (formData.proximity){
        requestURL += `proximity=${encodeURIComponent(formData.proximity)}&`;
    }

    if (formData.proximitySquare){
        requestURL += `proximity_square=${formData.proximitySquare}&`;
    }

    if (formData.query){
        requestURL += `query=${formData.query}&`;
    }

    if (formData.limit){
        requestURL += `limit=${formData.limit}&`;
    }

    // Remove extraneous ampersand from end of string
    requestURL = requestURL.slice(0, -1);

    return requestURL;

}

