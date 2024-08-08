import React from "react";

export default function Alert(props) {
  const uppFirst = (word) => {
    const lower = word.toString().toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  
  return (
    <div style={{height:"15px"}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{uppFirst(props.alert.type)}</strong> {props.alert.msg}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>}
    </div>
  );
}
