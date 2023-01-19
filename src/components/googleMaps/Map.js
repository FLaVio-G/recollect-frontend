import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import Parked from "../../assets/images/parked.png";
import Incident from "../../assets/images/IncidentsDrones.png";
import InAir from "../../assets/images/IntheAirDrones.png";
import Mission from "../../assets/images/missionmarker.png";
import Offline from "../../assets/images/offlinedrones.png";
import { useEffect, useRef, useState } from "react";
import "./Map.css";
import ChangeMapType from "./Layers/ChangeMapType";

const markers = [
  {
    name: "teste1",
    status: "status-1",
    location: {
      lat: -2.418819281045441, 
      lng: -54.71887619444126
    },
  },
  {
    name: "teste2",
    status: "status-2",
    location: {
      lat:  -2.428875336729783,
      lng: -54.74180467143027,
    },
  },
  {
    name: "Denver, Colorado",
    status: "incident",
    location: {
      lat: 30.2553,
      lng: 78.0972,
    },
  },
  {
    name: "Chicago, Illinois",
    status: "offline",
    location: {
      lat: 30.3165,
      lng: 78.0322,
    },
  },
  {
    name: "location-5",
    status: "mission",
    location: {
      lat: 30.267,
      lng: 78.0909,
    },
  },
];

const Map = (props) => {
  const { isLoaded } = props;
  const [selectedMarker, setSelectedMarker] = useState("");

  const [allMarkers, setAllMarkers] = useState(null)
  useEffect(() => {
    setTimeout(() => {

      console.log(`markers`,markers)
      setAllMarkers(markers)
    }, 2000);
 
  
  }, [])
  

  const containerStyle = {
    width: "90vw",
    height: "90vh",
  };
  const center = {
    lat: -2.431181066739566, 
    lng: -54.73047809203529
  };

  const [changeMyTypeID, setToggleChangeMyTypeID] = useState(1);
  const mapRef = useRef(null);

  const onMapLoad = (mapInstance) => {
    mapRef.current = mapInstance;
  };
  console.log("mapRefCurrent", mapRef.current);

  const MapType = {
    roadmap: "roadmap",
    satellite: "satellite",
    hybrid: "hybrid",
    terrain: "terrain",
  };
  const handleMapToggle = () => {
    if (changeMyTypeID === 0) {
      setToggleChangeMyTypeID(1);
    } else if (changeMyTypeID === 1) {
      setToggleChangeMyTypeID(2);
    } else if (changeMyTypeID === 2) {
      setToggleChangeMyTypeID(3);
    } else if (changeMyTypeID === 3) {
      setToggleChangeMyTypeID(4);
    } else if (changeMyTypeID === 4) {
      setToggleChangeMyTypeID(1);
    }
  };

  useEffect(() => {
    if (mapRef.current) {
      if (changeMyTypeID === 1) {
        mapRef.current.setMapTypeId(MapType.roadmap);
      } else if (changeMyTypeID === 2) {
        mapRef.current.setMapTypeId(MapType.terrain);
      } else if (changeMyTypeID === 3) {
        mapRef.current.setMapTypeId(MapType.satellite);
      } else if (changeMyTypeID === 4) {
        mapRef.current.setMapTypeId(MapType.hybrid);
      }
    }
  }, [changeMyTypeID]);

  console.log(changeMyTypeID);
  return (

    isLoaded && allMarkers && (
      
      <>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onMapLoad}
        >
          {allMarkers.map((marker) => {
            return (
              <Marker
                key={marker.name}
                position={marker.location}
                options={{
                  icon:
                    marker.status === "parked"
                      ? Parked
                      : marker.status === "inair"
                      ? InAir
                      : marker.status === "incident"
                      ? Incident
                      : marker.status === "mission"
                      ? Mission
                      : marker.status === "offline"
                      ? Offline
                      : "",
                }}
                onClick={() => {
                  setSelectedMarker(marker);
                }}
              />
            );
          })}
          {selectedMarker && (
            <InfoWindow
              position={selectedMarker.location}
              options={{
                pixelOffset: new window.google.maps.Size(0, -40),
              }}
            >
              <div>
                <h1>location -{selectedMarker.name}</h1>
                <h1>status - {selectedMarker.status}</h1>
                <button onClick={() => setSelectedMarker("")}>close</button>
              </div>
            </InfoWindow>
          )}

          <ChangeMapType handleMapToggle={handleMapToggle} />
        </GoogleMap>
      </>
    )
  );
};

export default Map;
