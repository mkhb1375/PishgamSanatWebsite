import  React from "react";
import NeshanMap  from "@neshan-maps-platform/react-openlayers"
import "@neshan-maps-platform/react-openlayers/dist/style.css"

function Mymap() {
    return <NeshanMap
        mapKey="web.730a3da8472949ee94c24e0b08b5255e"
        center={{ latitude: 36.425589099933305, longitude: 59.40446830875909 }}
        zoom={17}
    ></NeshanMap>
}

export default Mymap;
