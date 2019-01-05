import React from "react";

export function FormStatus(props) {
  console.log(props);
  if (props.status === true) {
    return (
      <div className="form-status">
        <h2>Thank You!</h2>
        <p> Your form has been submitted. We will get back with you shortly.</p>
      </div>
    );
  }
  if (props.status === false) {
    return (
      <div className="form-status">
          <h2>Uh-oh</h2>
          <p>Seems there has been an error on the server-side. Refresh and try
          again.</p>
      </div>
    );
  }
}
