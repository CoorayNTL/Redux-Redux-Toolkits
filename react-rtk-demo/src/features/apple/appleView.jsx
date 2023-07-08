import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./appleSlice";

const appleView = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const nuOfAppleslaps = useSelector((state) => state.apple.nuOfApples);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Number of Apple laps : {nuOfAppleslaps}</h1>
            <button onClick={() => dispatch(ordered())}>Decrement</button>
            <button onClick={() => dispatch(restocked(2))}>Increment</button>
        </>
    );
};

export default appleView;
