// How to use the vis.gl react google.maps library
// It comes up with a collection of components and hooks to create maps, markers and info windows.Some of these components include APIProvider,Map,Marker,Advanced Marker,Pin,Info Window. Some of the hooks include useMap,useMapsLibrary
// To use it install it by running the code npm install  @vis.gl/react-google-maps
// import APIProvider, Maps, Marker and  any other components you need from the @vis.gl/react-google-maps
//  import the API provider to load the Maps JavaScript API and any other components you'll need, such as the Map component.
// define your latitudes and longitudes
// Use the APIProvider to load the Map component. Use the zoom and center properties to adjust map display. For instance, center property specifies the geographical coordinates that should be positioned at the center of the map's initial view but zoom property  determines the level of magnification of the map.
// Create MapID by going to map management
// Remember to add width and height to you map to be visible
// there are three main ways and concepts to interact with the Maps JavaScript API on lower level with this library. You can use the provided hooks, the refs that are available for some components or use the useMapsLibrary hook to tap into other libraries and services of the Maps JavaScript API or craft your own custom hooks.




// When using maps, access the google console,create a project and enable APIs such as Maps JavaScript API, Aerial view API,Geolocation API etc.

// There are various ways of restricting your key: Restrict usage of your key to a specific application (IP address, referrer URLs, Android app, iOs app), or Restrict usage of your key to one or more specific APIs. Tip: Use independent API keys for different apps.This limits the scope of each key. If the key becomes compromised, you can delete and revoke the impacted key without needing to update your other API keys.