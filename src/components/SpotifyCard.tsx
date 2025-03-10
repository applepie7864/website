import { useEffect, useState } from 'react';
import querystring from 'querystring';
import axios from 'axios';
import Spotify from '../assets/svg/Spotify';
var Buffer = require('buffer').Buffer;

const SpotifyCard = () => {
    const recently_played_endpoint = process.env.REACT_APP_SPOTIFY_RECENTLY_PLAYED_ENDPOINT ?? "";
    const token_endpoint = process.env.REACT_APP_SPOTIFY_TOKEN_ENDPOINT ?? "";
    const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID ?? "";
    const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET ?? "";
    const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN ?? "";

    const basic = (Buffer(client_id + ':' + client_secret).toString('base64'));

    const [artist, setArtist] = useState("");
    const [track, setTrack] = useState("");

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
            axios(recently_played_endpoint, {
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + token_response.data.access_token }
            }).then((recently_played_response) => {
                console.log(recently_played_response)
                setArtist(recently_played_response.data.items[0].track.album.artists[0].name)
                setTrack(recently_played_response.data.items[0].track.name);
                setLoading(false)
            }).catch((recently_played_error) => {
                console.log(recently_played_error)
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
            className="bg-gray-50 dark:bg-gray-950 w-72 min-h-12 p-3 flex flex-row items-center justify-center rounded-full border-gray-200 dark:border-gray-800 border-2 gap-4 hover:scale-[1.01] cursor-default"
        >
            <Spotify />
            { loading ? (
                <div className='w-48 text-xs'>
                    <div className='text-gray-600 dark:text-gray-400 regular pb-[0.15rem]'>Loading ...</div>
                    <div className='text-gray-700 dark:text-gray-300 medium text-wrap'>/v1/me/player/recently-played</div>
                </div> 
            ) : error ? (
                <div className='w-48 text-xs'>
                    <div className='text-gray-600 dark:text-gray-400 regular pb-[0.15rem]'>Spotify Error</div>
                    <div className='text-gray-700 dark:text-gray-300 medium text-wrap'>Unable to retrieve data.</div>
                </div> 
            ) : (
                <div className='w-48 text-xs'>
                    <div className='text-gray-600 dark:text-gray-400 regular pb-[0.15rem]'>Recently Played</div>
                    <div className='text-gray-700 dark:text-gray-300 medium text-wrap'>{ track } by { artist }</div>
                </div> 
            )}
        </a>
    )
}

export default SpotifyCard