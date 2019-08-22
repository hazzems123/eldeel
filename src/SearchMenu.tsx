import * as React from "react";
import Modal from "react-bootstrap/Modal";
import Searchbutton from "./Searchbutton";
import DropDownSearch from "./DropDownSearch";

const modalStyle = () => {
  // we use some psuedo random coords so nested modals
  // don't sit right on top of each other.

  return {
    position: "fixed",
    width: 200,
    height: 700,
    zIndex: 1040,
    left: 10,
    top: 100,
    border: "1px solid #e5e5e5",
    backgroundColor: "white",
    boxShadow: "0 5px 15px rgba(0,0,0,.5)",
    padding: 20
  };
};

class SearchMenu extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false
    };

    this.handleShow = () => {
      this.setState({ show: true });
    };

    this.handleHide = () => {
      this.setState({ show: false });
    };
  }
  render() {
    const { open } = this.state;
    return (
      <div>
        <Searchbutton onClick={this.handleShow} />
        <Modal
          style={modalStyle()}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DropDownSearch />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default SearchMenu;
