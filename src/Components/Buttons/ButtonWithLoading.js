import React from "react";

import { MDBBtn } from "mdbreact";

const ButtonWithLoading = ({btnColor, btnType, btnClass, btnText, loading}) =>(
    <>
        {loading ? (
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        ) : (
            <MDBBtn color={btnColor} type={btnType} className={btnClass}>
                {btnText}
            </MDBBtn>
        )}
    </>
)

export default ButtonWithLoading;