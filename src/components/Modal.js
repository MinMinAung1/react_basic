function Modal(props) {
  
  function onCancel() {
    props.onCancel();
  }

  function onConfirm() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are You Sure?</p>
      <div>
        <button className="btn btn--alt" onClick={onCancel}>
          Cancel
        </button>
        <button className="btn" onClick={onConfirm}>
          Confirm
        </button>
      </div>
    </div>
  );
}
export default Modal;
