import * as React from "react";
import Map from "react-map-gl";

function MyMapComponent({ lat, long }) {
  return (
    // <Map
    //   initialViewState={{
    //     longitude: 72.8334336,
    //     latitude: 21.2107264,
    //     zoom: 3.5,
    //   }}
    //   style={{ width: 600, height: 400 }}
    //   mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=L4i2XIgmCPxVYFMV2kmQ    "
    ///>
    <>
      <iframe
        width="800"
        height="400"
        src={`https://api.maptiler.com/maps/streets-v2/?key=L4i2XIgmCPxVYFMV2kmQ#14.0/${lat}/${long}`}
      ></iframe>
    </>
  );
}

export default MyMapComponent;
