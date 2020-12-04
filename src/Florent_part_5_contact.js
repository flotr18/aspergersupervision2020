import React from "react";

function Florent_part_5_contact() {
    return (
        <div>
            <p className="form_title h1 text-center">CONTACT US</p>

            <div className="container-fluid text-center w-75 form_contact">

                <div className="row mt-3">
                <div className="col-6">
                    <input className={"contact_input w-50 mt-5"} placeholder={"first name"} />

                </div>
                <div className="col-6">
                    <input className={"contact_input w-50 mt-5"} placeholder={"first name"} />

                </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 email">
                        <input className={"contact_input w-75 mt-3"} placeholder={"first name"} />

                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 message">
                        <textarea className={"contact_input-message w-75 mt-3"} placeholder={"first name"} />

                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 submit">
                        <button className={"submit-button w-25"}>SEND</button>

                    </div>
                </div>
            </div>

            <div className={"container-fluid text-center w-75"}>
                <div className={"row"}>
                    <div className={"col disclaimer"}>
                        <p className={"h6 disclaimer-message"}>DISCLAIMER/MESSAGE</p>
                    </div>

                </div>
            </div>
        </div>

    )

}

export default Florent_part_5_contact