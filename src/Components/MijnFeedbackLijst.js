import React from "react";

export default function MijnFeedbackLijst() {
    const handleClick = () => {
        console.log("YIPPEEE")
    }
    return (
        <div>
            <div className="list-group">
                <div className="list-group-item list-group-item-action" aria-current="true" onClick={handleClick}>
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Gebruiker 1</h5>
                        <small>27-3-2024</small>
                    </div>
                    <p className="mb-1">Feedback.....</p>
                </div>

                <div className="list-group-item list-group-item-action" aria-current="true" onClick={handleClick}>
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Gebruiker 2</h5>
                        <small>27-3-2024</small>
                    </div>
                    <p className="mb-1">Feedback.....</p>
                </div>

                <div className="list-group-item list-group-item-action" aria-current="true" onClick={handleClick}>
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Gebruiker 3</h5>
                        <small>27-3-2024</small>
                    </div>
                    <p className="mb-1">Feedback.....</p>
                </div>

                <div className="list-group-item list-group-item-action" aria-current="true" onClick={handleClick}>
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Gebruiker 4</h5>
                        <small>27-3-2024</small>
                    </div>
                    <p className="mb-1">Feedback.....</p>
                </div>
            </div>
        </div>
    )
}