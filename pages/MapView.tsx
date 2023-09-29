import React, {useState,useEffect} from 'react'
import {Map, Marker} from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
// const Token ='pk.eyJ1IjoiYWFyeWF0aGFrb3IiLCJhIjoiY2xsM2M3dmMzMDZqOTNjbjJjZzg1ZXdpMCJ9.MUVljcF8mCYtARAUWXeVFA';

interface MapViewProps {
    MapLat:number;
    MapLong:number;
}

const MapView:React.FC<MapViewProps> = ({MapLat,MapLong}) => {
    const [initialViewState, setInitialViewState] = useState({
        latitude: MapLat,
        longitude: MapLong,
        zoom: 15,
    });

    // Update initial view state when MapLat or MapLong change
    useEffect(() => {
        setInitialViewState({
            latitude: MapLat,
            longitude: MapLong,
            zoom: 15,
        });
    }, [MapLat, MapLong]);


    return (

        <Map
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
            initialViewState={  initialViewState  }
            style={{width: '100%', height: '100%', borderRadius: '24px', border: "black solid "}}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            // mapStyle="mapbox://styles/mapbox/streets-v10"
            // mapStyle="mapbox://styles/aaryathakor/cllj5hwq6019s01qs83846lry"
        >
            <Marker latitude={MapLat} longitude={MapLong} anchor="center">
                <span className='text-3xl'>&#128205;</span>
            </Marker>
        </Map>

    )

}

export default MapView;