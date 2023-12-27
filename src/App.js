import { useState } from "react";
import { useGeolocation } from "./useGeolocation";

const Key  = false;
export default function App() {
  const [countClicks, setCountClicks] = useState(0);

  const {isLoading, error, lat, lng, getPosition} = useGeolocation(setCountClicks,Key );


  return (
    <div>
      <button onClick={getPosition} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}
      {Key&&       <p>You requested position {countClicks} times</p>}

    </div>
  );
}
