import React, { useState } from "react";
import { punjabiPlaylist } from "./data/punjabiPlaylist";
import { haryanviPlaylist } from "./data/haryanviPlaylist";
import { bhojpuriPlaylist } from "./data/bhojpuriPlaylist";
import { hindiPlaylist } from "./data/hindiPlaylist";
import {runningPlaylist} from "./data/runningPlaylist";

const PLAYLISTS = {
  punjabi: punjabiPlaylist,
  haryanvi: haryanviPlaylist,
  bhojpuri: bhojpuriPlaylist,
  hindi: hindiPlaylist,
  running:runningPlaylist,
};

function Main() {
  const [music, setMusic] = useState({
    title: "Select a Song",
    artist: "Click Play or choose a language",
  });
  const [language, setLanguage] = useState("punjabi");
  const [isPlay, setIsPlay] = useState(false);

  const selectMusic = (targetLang = language) => {
    const list = PLAYLISTS[targetLang];
    if (!list || list.length === 0)
      return;

    const idx = Math.floor(Math.random() * list.length);
    setMusic(list[idx]);
    setIsPlay(true);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    selectMusic(lang);
  };

  const togglePlay = () => {
    if (!music.id) {
      selectMusic();
      return;
    }
    setIsPlay((prev) => !prev);
  };

  return (
    <>
      <div className="nav border py-2 px-3 sticky-top">
        <h1 style={{ color: "#B9A7F8" }}>DOPAMINE_Booster</h1>
      </div>

      <div className="container mt-3">
        <p className="text-uppercase fw-bold" style={{ color: "#E8EDF5" }}>
          Current Language: {language}
        </p>

        <div className="row">
          <div className="col-6 my-2">
            <button
              style={{
                width: "100%",
                ...(language === "haryanvi"
                  ? { backgroundColor: "#B9A7F8", color: "#151c2c" }
                  : null),
              }}
              onClick={() => changeLanguage("haryanvi")}
              className="lang_btn btn py-2"
            >
              HARYANVI
            </button>
          </div>
          <div className="col-6 my-2">
            <button
              style={{
                width: "100%",
                ...(language === "punjabi"
                  ? { backgroundColor: "#B9A7F8", color: "#151c2c" }
                  : null),
              }}
              onClick={() => changeLanguage("punjabi")}
              className="lang_btn btn py-2"
            >
              PUNJABI
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-6 my-2">
            <button
              style={{
                width: "100%",
                ...(language === "bhojpuri"
                  ? { backgroundColor: "#B9A7F8", color: "#151c2c" }
                  : null),
              }}
              onClick={() => changeLanguage("bhojpuri")}
              className="lang_btn btn py-2"
            >
              BHOJPURI
            </button>
          </div>
          <div className="col-6 my-2">
            <button
              style={{
                width: "100%",
                ...(language === "hindi"
                  ? { backgroundColor: "#B9A7F8", color: "#151c2c" }
                  : null),
              }}
              onClick={() => changeLanguage("hindi")}
              className="lang_btn btn py-2"
            >
              HINDI
            </button>
          </div>
        </div>

        <div className="row">
        <div className="col-6 my-2">
          <button
            style={{
              width: "100%",
              ...(language === "running"
                ? { backgroundColor: "#B9A7F8", color: "#151c2c" }
                : null),
            }}
            onClick={() => changeLanguage("running")}
            className="lang_btn btn py-2"
          >
            RUNNING
          </button>
        </div>

        <div className="col-6 my-2">
          <button
            style={{
              width: "100%",
              ...(language === "cooking"
                ? { backgroundColor: "#B9A7F8", color: "#151c2c" }
                : null),
            }}
            onClick={() => changeLanguage("cooking")}
            className="lang_btn btn py-2"
          >
            COOKING
          </button>
        </div>
      </div>
      </div>

      

      <div className="container mt-5">
        <div className="row px-2">
          <div className="col-lg-6 col-md-12 border p-5 mt-3 card">
            <h3 className="cardH3">{music.title}</h3>
            <p className="cardP">{music.artist}</p>
          </div>
          <div className="col-lg-6 col-md-12 border p-5 mt-3 card">
            <h3 className="cardH3">Play the Music Ad-free</h3>
            <p className=" cardP">Made By-Akshit Saini</p>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row border p-3 align-items-center">
          <div className="col-6 text-center">
            <button
              style={{ backgroundColor: "#8FE3C0", color: "#10251E" }}
              onClick={togglePlay}
              className="f-btn btn btn-dark w-75 py-2"
            >
              {isPlay ? (
                <span style={{ backgroundColor: "#8FE3C0" }}>
                  Pause{" "}
                  <i
                    className="fa-solid fa-pause ms-1"
                    style={{ backgroundColor: "#8FE3C0", color: "#10251E" }}
                  />
                </span>
              ) : (
                <span style={{ backgroundColor: "#8FE3C0" }}>
                  Play{" "}
                  <i
                    className="fa-solid fa-play ms-1"
                    style={{ backgroundColor: "#8FE3C0", color: "#10251E" }}
                  />
                </span>
              )}
            </button>
          </div>

          <div className="col-6 text-center">
            <button
              onClick={() => selectMusic()}
              className="f-btn btn btn-secondary w-75 py-2"
              style={{ backgroundColor: "#B9A7F8", color: "#10251E" }}
            >
              <span style={{ backgroundColor: "#B9A7F8", color: "#10251E" }}>
                Change Song{" "}
                <i
                  style={{ backgroundColor: "#B9A7F8", color: "#10251E" }}
                  className="fa-solid fa-forward ms-1"
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {music.id && isPlay && (
        <iframe
          style={{
            position: "absolute",
            top: "-9999px",
            left: "-9999px",
            width: "1px",
            height: "1px",
          }}
          src={`https://www.youtube.com/embed/${music.id}?autoplay=1&enablejsapi=1`}
          title="YouTube Player"
          allow="autoplay; encrypted-media"
        />
      )}
    </>
  );
}

export default Main;
