import React, { useEffect, useState } from 'react';
import querystring from 'querystring';
import axios from 'axios';
import Spotify from '../assets/svg/Spotify';
var Buffer = require('buffer').Buffer;

const SpotifyCard = () => {
    const RECENTLY_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played";
    const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
    const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID ?? "";
    const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET ?? "";
    const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN ?? "";
    const basic = (Buffer(client_id + ':' + client_secret).toString('base64'));

    const [artist, setArtist] = useState("");
    const [track, setTrack] = useState("");
    const [spotifyLoading, setSpotifyLoading] = useState(true);
    useEffect(() => {
        axios(TOKEN_ENDPOINT, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ` + basic
            },
            data: querystring.stringify({
                grant_type: 'refresh_token',
                refresh_token
            }),
            method: 'POST'
        }).then((tokenResponse) => {
            axios(RECENTLY_PLAYED_ENDPOINT, {
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + tokenResponse.data.access_token }
            }).then((recentlyPlayedResponse) => {
                setArtist(recentlyPlayedResponse.data.items[0].track.album.artists[0].name)
                setTrack(recentlyPlayedResponse.data.items[0].track.name);
                setSpotifyLoading(false)
            }).catch(recentlyPlayedError => {
                console.log(recentlyPlayedError)
            });
        }).catch(tokenError => {
            console.log(tokenError)
        });
    }, []);

    return (
        <div className="w-60 h-12 p-2 flex flex-row items-center justify-left rounded-full shadow-md border-zinc-300 border-2 gap-2">
            <a href="https://open.spotify.com/user/5xb1ufphwez97tv2q5yu50eb0?si=dab77ec091e0407d" target='_blank' className='hover:scale-105'>
                <Spotify />
            </a>
            <div>
                <div className='text-zinc-500 text-xs'>Recently Played</div>
                <div className='text-zinc-700 text-xs m'>{ track } by { artist }</div>
            </div>
        </div>
    )
}

export default SpotifyCard