import React, { useState } from "react";
import Friend from "./components/Friend";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

function App() {
  const [role, setRole] = useState("My Neighbor Totoro");
  const [friends, setFreinds] = useState([
    {
      name: "San",
      role: "Princess Mononoke",
      img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/02/1049425-limited-edition-princess-mononoke-collectors-set-arrives-today-1.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
    },
    {
      name: "Totoro",
      role: "My Neighbor Totoro",
      img: "https://www.looper.com/img/gallery/the-30-best-studio-ghibli-characters-ranked/intro-1667174768.webp",
    },
    {
      name: "Chihiro Ogino",
      role: "Spirited Away",
      img: "https://discourse.disneyheroesgame.com/uploads/default/original/2X/7/73ae7c0a3c13f84f530762b55c3a56a2dfac81a8.jpg",
    },
  ]);
  const showFriends = true;

  return (
    <div className="App ">
      {showFriends ? (
        <div>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {friends.map((friend) => {
              return (
                <div key={uuidv4()}>
                  <Friend
                    name={friend.name}
                    role={friend.role}
                    img={friend.img}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <p>You can not see Employees!</p>
      )}
    </div>
  );
}

export default App;
