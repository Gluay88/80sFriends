import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function EditFriend({ id, name, role, img, updateFriend }) {
  //set new states for edit function start here..
  //default values => props useState(name)
  const [newName, setNewName] = useState(name);
  const [newRole, setNewRole] = useState(role);

  //states for modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("here");
    console.log(id, newName, newRole);
  };
  return (
    <>
      <button
        className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none "
        onClick={handleShow}
      >
        Update
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="update-btn">Update Friend</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="" id="edit-modal" onSubmit={handleSubmit}>
            <div>
              <div>
                <label htmlFor="name">Name</label>
              </div>
              <div>
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white "
                  id="newName"
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </div>
              {/* Role starts here.. */}
              <div>
                <label htmlFor="role">Role</label>
              </div>
              <div>
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white "
                  id="newRole"
                  type="text"
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded close-btn"
            onClick={handleClose}
          >
            Close
          </button>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded update"
            form="edit-modal"
            onClick={() => {
              updateFriend(id, newName, newRole);
              handleClose();
            }}
          >
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditFriend;
