import React, { useState } from "react";
//import Header from "components/Header";
//import AppConfig from "App.config";
//import ExternalInfo from "components/ExternalInfo";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";

const App = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [modalShow, setModalShow] = useState(false);
    const show = () => {
        setModalShow(!modalShow);
    }


    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
        
    };

    return (
        <>
          {/*  <Header title="Building OTP box using Hooks" />

    <ExternalInfo page="otpBox" />*/}
    <button type="button" style={{margin:"auto"}}class="btn btn-primary" onClick = {show} data-toggle="modal" data-target="#exampleModal">
  PHONE VERIFICATION
</button>

            <div>
                <div>
                  
                    <Modal
                
                show={modalShow}
                onHide={() => {
                    setModalShow(false);
                }}
            >
                <Modal.Header />
                <Modal.Body>
                    <div className="modal-popup">
                        <p className="fs-20 primary-color fw-500">
                            Phone Verification
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer >
                    {/*<div className="align-right">*/}
                  
                    {/*</div>*/}
                    <div className="form-row" style={{display:"flex",flexDirection:"row"}}>
                    {otp.map((data, index) => {
                        return (
                            
                            <input
                                style={{width:"40px",}}
                
                              //id="search-form"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                                //onCopy = {e => e.target.value}
                                
                            />
                    
                        );
                    })}
                    </div>
                  
                    <p>OTP Entered - {otp.join("")}</p>
                    <p>
                        <button
                            className="btn btn-secondary mr-2"
                            onClick={e => setOtp([...otp.map(v => "")])}
                        >
                            Clear
                        </button>
                       
                    </p>
                    




                </Modal.Footer>
            </Modal>
            


                    
                </div>
            </div>
        </>
    );
};

export default App;