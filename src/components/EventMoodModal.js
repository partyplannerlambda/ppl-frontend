import React, { useState, useEffect } from "react";
import axios from "axios";

export default function(props) {
  const { party } = props;
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://unsplash.com/search/photos?Client-ID=0b0cf775d52dc76301a5a814a41adf0d5159b2160989a1ee98b07ea3e086d28a&page=1&query=${encodeURIComponent(`party ${party.theme}`)}`,
        { //config optional arg
          headers: {
            "Content-Type": "application/json",
            Authorization:
              `Client-ID 0b0cf775d52dc76301a5a814a41adf0d5159b2160989a1ee98b07ea3e086d28a`
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
