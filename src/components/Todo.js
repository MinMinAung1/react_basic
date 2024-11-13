import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [isModalShow, setIsModalShow] = useState(false);

  function deleteHandler() {
    setIsModalShow(true);
  }

  function backdropHandler() {
    setIsModalShow(false);
  }

  function cancelHandler() {
    setIsModalShow(false);
  }

  function confirmHandler() {
    setIsModalShow(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {isModalShow && <Backdrop onBackdrop={backdropHandler} />}
      {isModalShow && (
        <Modal onCancel={cancelHandler} onConfirm={confirmHandler} />
      )}
    </div>
  );
}

export default Todo;
