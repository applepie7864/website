import { useEffect, useRef, useState } from 'react';
import querystring from 'querystring';
import axios from 'axios';
import '../../styles/icons.scss';
import data from "../../config.json";
import Spotify from './icons/spotify';

const Buffer = require('buffer').Buffer;

const SpotifyCard = () => {
  const currently_playing_endpoint = "https://api.spotify.com/v1/me/player/currently-playing";
  const token_endpoint = "https://accounts.spotify.com/api/token";

  const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID ?? "";
  const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET ?? "";
  const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN ?? "";

  const basic = (Buffer(client_id + ':' + client_secret).toString('base64'));

  const [artist, setArtist] = useState("");
  const [track, setTrack] = useState("");

  const [active, setActive] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const spotifyContainerRef = useRef<HTMLDivElement>(null);
  const spotifyDataRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const directionRef = useRef(-1);
  const positionRef = useRef(0);

  useEffect(() => {
    axios(token_endpoint, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ` + basic
      },
      data: querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token
      }),
      method: 'POST'
    }).then((token_response) => {
      axios(currently_playing_endpoint, {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + token_response.data.access_token}
      }).then((currently_playing_response) => {
        if (currently_playing_response.data.is_playing) {
          setArtist(currently_playing_response.data.item.artists[0].name);
          setTrack(currently_playing_response.data.item.name);
          setActive(true);
        };
        setLoading(false);
      }).catch((currently_playing_error) => {
        console.log(currently_playing_error);
        setLoading(false);
        setError(true);
      });
    }).catch((token_error) => {
      console.log(token_error);
      setLoading(false);
      setError(true);
    });
  }, []);

  useEffect(() => {
    const spotifyContainer = spotifyContainerRef.current;
    const spotifyData = spotifyDataRef.current;

    if (spotifyContainer && spotifyData && spotifyContainer.clientWidth < spotifyData.clientWidth) {
      const overflow = spotifyData.clientWidth - spotifyContainer.clientWidth + 5;

      const pause = (duration: number) => {
        return new Promise(resolve => setTimeout(resolve, duration));
      };

      const animate = async () => {
        if (positionRef.current <= -overflow) {
          directionRef.current = 1;
          await pause(500);
        } else if (positionRef.current >= 0) {
          directionRef.current = -1;
          await pause(1000);
        };

        positionRef.current += directionRef.current * 0.5;
        spotifyData.style.transform = `translateX(${positionRef.current}px)`;
        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
      return () => {
        if (animationRef.current !== null) {
          cancelAnimationFrame(animationRef.current);
        };
      };
    };
  }, [track]);

  return (
    <div className="bg-gray-50 dark:bg-gray-950 w-80 p-2 flex flex-row items-center justify-center rounded-full border-2 border-gray-200 dark:border-gray-800">
      <a
        className="spotify-card-icon m-2"
        href={data.links.spotify}
        target="_blank"
        rel="noreferrer"
      >
        <Spotify />
      </a>
      <div className='w-4/5 p-2 flex flex-col items-start justify-center'>
        <div className='text-sm text-gray-500 medium'>
          {
            loading ? "Loading ..."
              : error ? "Spotify Error"
                : active ? "Now Playing"
                  : "Spotify Offline"
          }
        </div>
        <div className='w-[95%] text-md text-gray-700 dark:text-gray-300 regular overflow-hidden whitespace-nowrap' ref={spotifyContainerRef}>
          {
            loading ? "/v1/me/player/currently-playing"
              : error ? "Unable to retrieve data."
                : active ? <div className="inline-block" ref={spotifyDataRef}>{track} by {artist}</div>
                  : "It's quiet right now."
          }
        </div>
      </div>
    </div>
  );
};

export default SpotifyCard;