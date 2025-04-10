import {useEffect, useState} from 'react';
import querystring from 'querystring';
import axios from 'axios';
import Spotify from '../svg/spotify';

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
                    setArtist(currently_playing_response.data.item.artists[0].name)
                    setTrack(currently_playing_response.data.item.name)
                    setActive(true)
                }
                setLoading(false)
            }).catch((currently_playing_error) => {
                console.log(currently_playing_error)
                setLoading(false)
                setError(true)
            });
        }).catch((token_error) => {
            console.log(token_error)
            setLoading(false)
            setError(true)
        });
    }, []);

    return (
        <a
            href="https://open.spotify.com/user/5xb1ufphwez97tv2q5yu50eb0?si=dab77ec091e0407d"
            target='_blank'
            className="bg-gray-50 dark:bg-gray-950 w-80 flex flex-row items-center justify-center p-2 rounded-full border-2 border-gray-200 dark:border-gray-800 cursor-default"
            rel="noreferrer"
        >
            <Spotify/>
            <div className='w-4/5 p-2 flex flex-col items-start justify-center'>
                <div className='text-sm text-gray-500 medium'>
                    {loading ? "Loading ..." : error ? "Spotify Error" : active ? "Now Playing" : "Spotify Offline"}
                </div>
                <div className='text-md text-gray-700 dark:text-gray-300 regular text-wrap'>
                    {loading ? "/v1/me/player/currently-playing" : error ? "Unable to retrieve data." : active ? track + " by " + artist : "It's quiet right now."}
                </div>
            </div>
        </a>
    )
}

export default SpotifyCard