export const bikeUpdate = (formData) => async dispatch => {

    // Set API Call Fetch String
    var searchString = searchFormat(formData);

    try {

        // Make API Call to BikeWise
        const response = await fetch(searchString)
        .then(result => result.json())
        
        console.log(response);

        dispatch({ type: "bikeData", payload: response});

    } catch (error) {

        console.log(error);

        dispatch({ type: "bikeData", payload: null });

    }

};



// Format incoming data to match formatting requirements for BikeWise API
function searchFormat(formData){

    // Initialize base url
    var requestURL = "https://bikewise.org:443/api/v2/locations?";

    // Add additional string search parameters as necessary
    if (formData.occurredBefore){
        requestURL += `occurred_before=${formData.occurredBefore}&`;
    }

    if (formData.occurredAfter){
        requestURL += `occurred_after=${formData.occurredAfter}&`;
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