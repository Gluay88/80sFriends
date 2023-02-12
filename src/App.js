import React, { useState } from "react";
import Friend from "./components/Friend";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

function App() {
  const [friends, setFreinds] = useState([
    {
      id: 1,
      name: "San",
      role: "Princess Mononoke",
      img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/02/1049425-limited-edition-princess-mononoke-collectors-set-arrives-today-1.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
    },
    {
      id: 2,
      name: "Totoro",
      role: "My Neighbor Totoro",
      img: "https://www.looper.com/img/gallery/the-30-best-studio-ghibli-characters-ranked/intro-1667174768.webp",
    },
    {
      id: 3,
      name: "Chihiro Ogino",
      role: "Spirited Away",
      img: "https://discourse.disneyheroesgame.com/uploads/default/original/2X/7/73ae7c0a3c13f84f530762b55c3a56a2dfac81a8.jpg",
    },
  ]);

  //update function renders here..
  function updateFriend(id, newName, newRole, img) {
    const updatedFriends = friends.map((friend, index) => {
      if (id === friend.id) {
        //...return New Data
        //...friend spread operator fixed the undefinded id
        //...img: friend.img =>use the same img
        //...newName and newRole could be anything here.. is fine with name: x, role: y
        return { ...friend, name: newName, role: newRole, img: friend.img };
      }
      return friend;
    });
    setFreinds(updatedFriends);
  }

  return (
    <div className="App ">
      <div className="flex flex-wrap justify-center">
        {friends.map((friend, index) => {
          return (
            <div key={index}>
              <Friend
                id={friend.id}
                name={friend.name}
                role={friend.role}
                img={friend.img}
                updateFriend={updateFriend}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
