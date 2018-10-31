# Bike Map

Bike map is a simple front-end React/Redux based website that allows you to search and display biking related incidents in a given area.  Bike map uses your search criteria to call out to the [BikeWise API](https://github.com/bikeindex/bikewise) which returns GeoJson data related to your search query.  The results are then mapped out for you with clustering options for easy viewing.  Popups are also displayed to help the user learn more information about each incident.  Mapping is done primarily through the use of [React-Leaflet](https://www.npmjs.com/package/react-leaflet) & [Leaflet-MarkerCluster](https://github.com/Leaflet/Leaflet.markercluster)


## How to Use

You'll want Node and Git to begin.

Begin by running a 'git clone' to pull down the Github repo into your local repository.  Navigate into that directory and run an 'npm install' to install all dependencies.  Now you can run the program using 'npm start'.

When entering in a search criteria, the following fields at a minimum must be filled out:  Before Date, After Date, & Proximity (central searching location).

## Youtube Demo

[Bike Map Video](https://youtu.be/HGIxJUynFZM)

## Technologies

HTML, CSS, ReactStrap, JavaScript, Node.js, React.js, Redux.js, React-Leaflet, Leaflet-MarkerCluster, BikeWise API

## Author
* [Matthew Fisher](https://github.com/MicroFish91)