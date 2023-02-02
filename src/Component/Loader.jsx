import { Load } from "../Component/Styles";

const Loader = () => {
    return (
        <div style={{backgroundColor:"black"}}>
        <Load>
            <span style={{fontSize:"100px"}}>&#x3c;</span>
            <span  style={{fontSize:"100px"}}>&#x2f;</span>
            <span  style={{fontSize:"100px"}}>&#x3e;</span>
        </Load>
        </div>
    );
};

export default Loader;
