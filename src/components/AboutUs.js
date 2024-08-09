// import React,{useState} from "react";

export default function AboutUs(props) {
    // const [style,setStyle] = useState({
    //     color: "white",
    //     backgroundColor: "black"
    // });
    // const [button,setButton] = useState("Enable Light Mode");

    // const modes = () => {
    //     if(style.color === "white"){
    //         // console.log("butt1");
    //        setStyle({color: "black",
    //      backgroundColor: "white"});
    //      setButton("Enable Dark Mode");
    //     }else{
    //         // console.log("butt");
    //         setStyle({color: "white",
    //     backgroundColor: "black"});
    //     setButton("Enable Light Mode");
    //     }
    // }
    let myStyle = {
        backgroundColor : props.mode ==="light"?"white":"grey",
        color : props.mode === "light"?"black":"white"
    }
    
  return (
    <>
    <div className="container">
      <h2 className="my-5" style={myStyle}>About Us</h2>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                // style={style}
                >
                Accordion Item #1
                </button>
            </h2>
            {/* style={style}this style button */}
            <div 
                style={myStyle}
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that just
                about any HTML can go within the <code>.accordion-body</code>,
                though the transition does limit overflow.
                </div>
            </div>
            </div>
            <div style={myStyle} className="accordion-item">
            <h2 className="accordion-header">
                <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                // style={style}
                >
                Accordion Item #2
                </button>
            </h2>
            {/* style={style} this style button */}
            <div 
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
                >
                <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that just
                about any HTML can go within the <code>.accordion-body</code>,
                though the transition does limit overflow.
                </div>
            </div>
            </div>
            <div style={myStyle} className="accordion-item">
            <h2 className="accordion-header">
                <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                // style={style}
                >
                Accordion Item #3
                </button>
            </h2>
            {/* style={style} this style button */}
            <div 
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
                >
                <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that just
                about any HTML can go within the <code>.accordion-body</code>,
                though the transition does limit overflow.
                </div>
            </div>
            </div>
        </div>
        {/* <button value="button" onClick={modes} className="btn btn-primary my-4">{button}</button> */}
    </div>
</>
  );
}
