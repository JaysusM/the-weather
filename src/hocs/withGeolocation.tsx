import React, { useState, useEffect } from 'react';
import Loading from '../pages/Loading/Loading';

const withGeolocation = (WrappedComponent: React.FunctionComponent) => {
  return (props: any) => {
    const [coords, setCoords] = useState<WithGeolocationProps>({});
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setLoading(false);
        setCoords({ lat: latitude, lon: longitude });
      }, () => {
        setLoading(false);
      });
    }, []);

    if (loading)
      return <Loading />
    return <WrappedComponent {...props} lat={coords.lat} lon={coords.lon} />;
  }
}

export type WithGeolocationProps = {
  lat?: number,
  lon?: number;
}

export default withGeolocation;