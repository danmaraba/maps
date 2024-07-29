import React,{ useState } from 'react'
import{APIProvider,Map,Marker} from '@vis.gl/react-google-maps'
import '../App.css'
function App() {
 const position={lat:0.05182700,long:35.71991000}
  return (
      <APIProvider apiKey={'AIzaSyCctTv1yocCEBTs6a8XnHcg-nAp_S1ahRI'}>
        <Map center={position} zoom={10}>

        </Map>
      </APIProvider>

  )
}

export default App
