import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function AddFriend({ id, name, role, img, updateFriend, newFriend }) {
  //set new states for edit function start here..
  //default values => props useState(name)
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newImg, setNewImg] = useState("");

  //states for modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewName("");
    setNewRole("");
    setNewImg("");
  };
  return (
    <>
      <button
        className="block mx-auto m-5 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded"
        onClick={handleShow}
      >
        Add Friend
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Friend</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            className="w-full max-w-sm"
            id="edit-modal"
            onSubmit={handleSubmit}
          >
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="name"
                >
                  Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="newName"
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Mr. Feynman KoolKat"
                />
              </div>
              {/* Role starts here.. */}
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="role"
                >
                  Role
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="newRole"
                  type="text"
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                  placeholder="The King of my apartment"
                />
              </div>
              {/* img starts here.. */}
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="role"
                >
                  Image URL
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="newRole"
                  type="text"
                  value={newImg}
                  onChange={(e) => setNewImg(e.target.value)}
                  placeholder="https://www.pexels.com/"
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
            onClick={handleClose}
          >
            Close
          </button>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-3 rounded"
            form="edit-modal"
            onClick={() => {
              newFriend(newName, newRole, newImg);
              handleClose();
            }}
          >
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddFriend;
