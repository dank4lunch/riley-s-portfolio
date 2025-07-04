import React, { useEffect, useState } from "react";
import "./NowPlaying.css";

const LastFmNowPlaying = () => {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const response = await fetch(
          "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=dank4lunch&api_key=36ded819778c30f629b03ad2b69b137c&format=json"
        );
        const data = await response.json();
        const trackList = data?.recenttracks?.track || [];
        const current = trackList[0];

        const isNowPlaying = current?.["@attr"]?.nowplaying === "true";

        if (isNowPlaying || current) {
          const albumArt =
            current.image?.find((img) => img.size === "extralarge")?.["#text"] ||
            "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png";

          setTrack({
            name: current.name,
            artist: current.artist?.["#text"],
            albumArt,
            playing: isNowPlaying,
          });
        } else {
          setTrack(null);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrack();
    const interval = setInterval(fetchTrack, 15000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p style={{ color: "white" }}>Loading...</p>;
  if (error) return <p style={{ color: "orange" }}>Error: {error}</p>;

  return !track ? (
    <p style={{ color: "white" }}>🎧 Nothing playing</p>
  ) : (
    <div className="now-playing-widget">
      <img src={track.albumArt} alt="Album Art" />
      <div className="track-info">
        <p className="track-name">{track.name}</p>
        <p className="artist-name">{track.artist}</p>
        <p style={{ fontSize: "0.8em", color: "#bbb" }}>
          {track.playing ? "Now Playing" : "Last Played"}
        </p>
      </div>
    </div>
  );
};

export default LastFmNowPlaying;