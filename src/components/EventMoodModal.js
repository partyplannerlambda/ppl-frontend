import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import axios from "axios";

export default function(props) {
  const { party } = props;
  let [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${encodeURIComponent(
          `${party.theme}`
        )}`,
        {
          //config optional arg
          headers: {
            Authorization:
              "Client-ID 0b0cf775d52dc76301a5a814a41adf0d5159b2160989a1ee98b07ea3e086d28a"
          }
        }
      )
      .then(res => {
        console.log("This is in the Image Modal", res);
        setImgUrl(res.data.results[0].urls.small);
      })
      .catch(err => {
        console.log("This is in the Image Modal", err);
      });
  }, []);

  if (!!imgUrl) {
    return <BannerImage className="" alt="generic banner" src={imgUrl} />
  }
  
  return <div className="center"><Loader type="Ball-Triangle" color="#0f0f0f" height={80} width={80} /></div>
}

const BannerImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;
