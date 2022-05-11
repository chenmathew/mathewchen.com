import axios from "axios";
import React, { useEffect, useState } from "react";
import * as qs from "qs";

const auth_token = process.env.SPOTIFY_API_ID;



interface nowplayingProps {}

export const NowPlaying: React.FC<nowplayingProps> = ({}) => {
  const [currSong, setCurrSong] = useState({ name: "", artist: "" });
  const [token, setToken] = useState("");
  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setCurrSong({ name: res.data.item.name, artist: "" });
        console.log(currSong);
      })
      .catch((err) => console.error(err));
  });

  return <div>{currSong.name}</div>;
};
