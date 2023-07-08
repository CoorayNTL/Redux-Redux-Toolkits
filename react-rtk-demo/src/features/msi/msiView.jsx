import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./rtk-msiSlice";

const msiView = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const nuOfMsilaps = useSelector((state) => state.msi.nuOflaps);
    const dispatch = useDispatch();
    return (
        <>
            <h1>Number of MSI laps : {nuOfMsilaps}</h1>
            <button onClick={() => dispatch(ordered())}>Decrement</button>
            <button onClick={() => dispatch(restocked(5))}>Increment</button>
            
        </>
    );
};

export default msiView;
