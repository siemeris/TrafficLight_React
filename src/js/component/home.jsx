import React, {useState} from "react";


//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
    const [color,funcionBrillo] = useState("verde");

    let ColorList = ['rojo', 'ambar', 'verde', 'morado']
    const [counter, setCounter] = useState(0)
    const handleClick = () => {
        let ctrTemp = counter >= 3 ? 0 : counter +1
        setCounter(ctrTemp)
        funcionBrillo(ColorList[counter])
       };

    const [closed, setOpened] = useState(true);

	return closed ? (
		<div className="container-fluid">
			<div className="semaforo container">
                <div className="semaforoTop bg-dark mx-auto"></div>
                <div className="semaforoLuces bg-dark mx-auto d-flex flex-column justify-content-around align-items-center">
                    <div className={color === "rojo" ? "luzRoja bg-danger rounded-circle luzON" : "luzRoja bg-danger rounded-circle"} onClick={() => funcionBrillo("rojo")}></div>
                    <div className={color === "ambar" ? "luzAmbar bg-warning rounded-circle luzON" : "luzAmbar bg-warning rounded-circle"} onClick={() => funcionBrillo("ambar")} ></div>
                    <div className={color === "verde" ? "luzVerde bg-success rounded-circle luzON" : "luzVerde bg-success rounded-circle"} onClick={() => funcionBrillo("verde")} ></div>
                </div>
                <button type="button" onClick={() => setOpened(false)}>Open Purple Light</button>
            </div>
            <div><button type="button" className="btn btn-dark ms-5 mt-5" onClick={handleClick}>Change color</button><p className="text-wrap ms-5" style={{width: "16rem"}}><small className="fw-lighter">You can change the color clicking on the button or clicking on the traffic light </small></p></div>
        </div> 
	): (<div className="container-fluid">
    <div className="semaforo container">
        <div className="semaforoTop bg-dark mx-auto"></div>
        <div className="semaforoLuzMor bg-dark mx-auto d-flex flex-column justify-content-around align-items-center">
            <div className={color === "rojo" ? "luzRoja bg-danger rounded-circle luzON" : "luzRoja bg-danger rounded-circle"} onClick={() => funcionBrillo("rojo")}></div>
            <div className={color === "ambar" ? "luzAmbar bg-warning rounded-circle luzON" : "luzAmbar bg-warning rounded-circle"} onClick={() => funcionBrillo("ambar")} ></div>
            <div className={color === "verde" ? "luzVerde bg-success rounded-circle luzON" : "luzVerde bg-success rounded-circle"} onClick={() => funcionBrillo("verde")} ></div>
            <div className={color === "morado" ? "luzMor rounded-circle luzON" : "luzMor rounded-circle"} onClick={() => funcionBrillo("morado")}></div>
        </div>
        <button type="button" onClick={() => setOpened(true)}>
        Close Purple Light
        </button>
    </div>
    <div><button type="button" className="btn btn-dark ms-5 mt-5" onClick={handleClick}>Change color</button><p className="text-wrap ms-5" style={{width: "16rem"}}><small className="fw-lighter">You can change the color clicking on the button or clicking on the traffic light </small></p></div>
</div> );
    
};

export default Home;
