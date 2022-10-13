import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useMemo } from 'react';
import './maps.scss'

const Maps = () => {

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.MAPS_API
      })
      const center = useMemo(() => ({lat: 25.097457408827974, lng: 55.168799270199344}), [])
      if (!isLoaded) return <div>Loading...</div>;
      if (loadError) return 'Error loading maps';
      const containerStyle = {
        width: '100%',
        height: '100%'
      };

  return (
    <div className='maps'>
        <GoogleMap zoom={15} center={center} mapContainerStyle={containerStyle}>
        <Marker key={1} id='1' position={{lat: 25.28337413723937, lng: 55.38785676808126}} />
        </GoogleMap>
    </div>
  )
}

export default Maps