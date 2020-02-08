import React, { useEffect } from "react";
import "./App.css";

const App = () => {
  // const myHeaders = new Headers({
  //   Accept: "application/json",
  //   authorization:
  //     "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImI0M2UyNGRhLWQwZGQtNDM5YS04YWJjLTViOWU5ZWEyMjRjOSIsImlhdCI6MTU3NzczNTUxMSwic3ViIjoiZGV2ZWxvcGVyL2U5NWM0NDk0LWU1NTctMGFhNC1lMzA5LTU0YjNmMTUwMmJkZSIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTc5LjIxOC4xNjguMTYiXSwidHlwZSI6ImNsaWVudCJ9XX0.8g7IDVG_JjpyOwAUFA7sSHM-d_eB7pzGI45AWUO4HZuww5GqNZWa4FMAyddXD6A-wx_1frQdnhwlRHJoyTR9Lw",
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
  // });
  // // curl -X GET --header 'Accept: application/json' --header "authorization: Bearer <API token>" 'https://api.brawlstars.com/v1/players/%2322CJ0R8Q'

  // const myInit = {
  //   method: "GET",
  //   headers: myHeaders,
  //   mode: "cors",
  //   cache: "default"
  // };

  useEffect(() => {
    fetch("http://localhost:8000/player/id").then(response => {
      response.json().then(json => {
        console.log(json);
      });
    });
  }, []);
  return <div className="App"></div>;
};

export default App;
