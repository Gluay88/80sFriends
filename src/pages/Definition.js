import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import DefinitionSearch from "../components/DefinitionSearch";
import NotFound from "../components/NotFound";

export default function Definition() {
  const [word, setWord] = useState([]);
  const [notFound, setNotFound] = useState(false);
  //   destructure useParams from route in App.js
  let { search } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  useEffect(() => {
    // add params seach
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        }
        if (!response.ok) {
          setError(true);
          throw new Error("Something went wrong!!");
        }
        return response.json();
      })
      .then((data) => {
        setWord(data[0].meanings);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  // check the state
  if (notFound === true) {
    return (
      <>
        <NotFound />
        <Link to="/dictionary">Back to search..</Link>
      </>
    );
  }

  return (
    <>
      {word ? (
        <div className="block text-center">
          <p className="sub-title">Here is a definition: </p>
          {word.map((meaning) => {
            return (
              <p key={uuidv4()}>
                {meaning.partOfSpeech} : {meaning.definitions[0].definition}
              </p>
            );
          })}
          <br />
          <p>Continue searching...</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "5rem",
            }}
          >
            <DefinitionSearch />
          </div>
        </div>
      ) : (
        <p>Loading..</p>
      )}
    </>
  );
}
