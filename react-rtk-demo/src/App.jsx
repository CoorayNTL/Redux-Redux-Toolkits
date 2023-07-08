import UserView  from "./user/userView";
import AppleView from "./features/apple/appleView";
import MSIView  from "./features/msi/msiView";
import "./App.css";


function App() {
   
    return (
        <>
            <div className="App">
                <h1>React Redux Toolkit Demo</h1>
                <UserView />
                <AppleView />
                <MSIView />
            </div>
        </>
    );
}

export default App;
 