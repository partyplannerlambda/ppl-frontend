import React, { useState, useEffect } from "react";
import axios from "axios";

export default function(props) {
  const { party } = props;
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://unsplash.com/search/photos/?query=${encodeURIComponent(party.theme)}`,
        { //config optional arg
          headers: {
            "Content-Type": "application/json",
            Authorization:
              `Client-ID ${UNSPLASH_API_KEY}`
          }
        }
      )
      .then(res => {
        console.log("This is in the Image Modal", res);
        
      })
      .catch(err => {
        console.log("This is in the Image Modal", err);
      });
  }, []);

  
  let imgUrl = "https://picsum.photos/1800/700/?random";
  return <img alt="generic banner" src={imgUrl} />;
}
