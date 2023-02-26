import { fireEvent } from "@testing-library/react";
import { useEffect, useState } from "react";

export default function Friends() {
  const [friends, setFriends] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/api/friends/")
      .then((response) => response.json())
      .then((data) => {
        setFriends(data.friends);
      });
  }, []);
  return (
    <div className="sub-title">
      <h5>All my friends: From Django</h5>
      {friends
        ? friends.map((friend, index) => {
            return (
              <div key={index}>
                <p>{friend.name}</p>
              </div>
            );
          })
        : null}
    </div>
  );
}
