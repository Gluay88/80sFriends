import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "../components/NotFound";

export default function Friend() {
  const [friend, setFriend] = useState();
  const [notFound, setNotFound] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const url = "http://localhost:8000/api/friends/" + id;
    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        }
        return response.json();
      })
      .then((data) => {
        setFriend(data.friend);
      });
  }, []);
  return (
    <>
      {notFound ? <NotFound /> : null}

      {friend ? (
        <div>
          <p>Id: {friend.id}</p>
          <p>Name: {friend.name}</p>
          <p>Role: {friend.role}</p>
        </div>
      ) : null}
      <Link to="/friends">Go back to Friends..</Link>
    </>
  );
}
