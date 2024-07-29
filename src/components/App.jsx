import React from 'react'
import{APIProvider,Map,AdvancedMarker,useMapsLibrary} from '@vis.gl/react-google-maps'
import '../App.css'
function App() {
 const position={lat:0.05182700,lng:35.71991000}
  return (
      <APIProvider apiKey={'AIzaSyCctTv1yocCEBTs6a8XnHcg-nAp_S1ahRI'}>
        <Map center={position} zoom={10} mapId={'ccaaba54a18c4cdd'} style={{width: '100%', height: '100vh'}}>
          <AdvancedMarker position={position} />
        </Map>
      </APIProvider>

  )
}

export default App
