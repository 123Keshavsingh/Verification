import React from "react";
import App from "./App";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Otp = () =>{

    const [modalShow, setModalShow] = useState(false);
const show = () => {
    setModalShow(true);
}
return (
    <div>
    <Modal
                className="action-popup"
                show={modalShow}
                onHide={() => {
                    setModalShow(false);
                }}
            >
                <Modal.Header />
                <Modal.Body>
                    <div className="modal-popup">
                        <p className="fs-20 primary-color fw-500">
                            Add your image details
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {/*<div className="align-right">*/}
                  <App/>
                    {/*</div>*/}
                </Modal.Footer>
            </Modal>
        <Button onClick={show}>Show</Button>

</div>

)

}
export default Otp;