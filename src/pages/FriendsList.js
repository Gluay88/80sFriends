import React, { useState } from "react";
import Friend from "../components/Friend";
import { v4 as uuidv4 } from "uuid";
import "../index.css";
import EditFriend from "../components/EditFriend";
import AddFriend from "../components/AddFriend";

function Friends() {
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
    {
      id: 4,
      name: "Uncle Pom",
      role: "Castle in the Sky",
      img: "https://static.wikia.nocookie.net/studio-ghibli/images/d/de/Uncle_Pom.png",
    },
    {
      id: 5,
      name: "Sheeta",
      role: "Castle in the Sky",
      img: "https://static.wikia.nocookie.net/studio-ghibli/images/b/bb/Sheeta_3.png",
    },
    {
      id: 6,
      name: "Sophie Hatter",
      role: "Howl's Moving Castle",
      img: "https://static.wikia.nocookie.net/howlscastle/images/c/c1/Sophie_Hatter.jpeg",
    },
    {
      id: 7,
      name: "Sōsuke",
      role: "Ponyo",
      img: "https://static.wikia.nocookie.net/studio-ghibli/images/c/cf/Sosuke.jpg",
    },
    {
      id: 8,
      name: "Hī-sama",
      role: "Princess Mononoke",
      img: "https://static.wikia.nocookie.net/studio-ghibli/images/8/83/Hii-sama.jpg",
    },
    {
      id: 9,
      name: "Jiro Horikoshi",
      role: "The Wind Rises",
      img: "https://static.wikia.nocookie.net/disney/images/8/8b/Wind_Rises_Screenshot_1190.jpg",
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

  function newFriend(name, role, img) {
    const addFriend = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setFreinds([...friends, addFriend]);
  }

  return (
    <div>
      <p className="flex flex-wrap justify-center main-title">My 80s Friends</p>
      <div className="flex flex-wrap justify-center">
        {friends.map((friend, index) => {
          const editFriend = (
            <EditFriend
              id={friend.id}
              name={friend.name}
              role={friend.role}
              updateFriend={updateFriend}
            />
          );
          return (
            <div key={index}>
              <Friend
                id={friend.id}
                name={friend.name}
                role={friend.role}
                img={friend.img}
                editFriend={editFriend}
              />
            </div>
          );
        })}
      </div>
      <AddFriend newFriend={newFriend} />
    </div>
  );
}

export default Friends;
