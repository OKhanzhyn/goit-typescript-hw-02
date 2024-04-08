import { Blocks } from "react-loader-spinner";


const Loader = () => {
    return (<Blocks
        height= "40"
        width="40"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
        />);
};
export default Loader;
