import { Load } from "../Component/Styles";

const Loader = () => {
    return (
        <div style={{backgroundColor:"black"}}>
        <Load>
            <span>&#x3c;</span>
            <span>&#x2f;</span>
            <span>&#x3e;</span>
        </Load>
        </div>
    );
};

export default Loader;
