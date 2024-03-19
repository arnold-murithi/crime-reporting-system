import React from 'react'
import { GoogleMapsEmbed } from '@next/third-parties/google'



const Map = () => {
  return (
    <>
    <GoogleMapsEmbed
    apiKey="AIzaSyDb6sN_aNfRTBh3hi6m1ART6tP6g9xscko"
    height={600}
    width="100%"
    mode="place"
    //q="Brooklyn+Bridge,New+York,NY"
    q="-1.1820133394710317, 36.93681476905471"
    //q= "record+stores+in+Seattle"
  />
    </>
    
  )
}

export default Map