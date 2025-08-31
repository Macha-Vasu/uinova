import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt=" New chat" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" />
              What is Programming{" "}
            </button>
            <p />
            <button className="query">
              <img src={msgIcon} alt="Query" />
              How to use an Api
            </button>
          </div>
        </div>
        <div className="LowerSide"></div>
        <div className="listItems">
          <img src={home} alt="" className="listitemsImg" />
          Home
        </div>
        <div className="listItems">
          <img src={saved} alt="" className="listitemsImg" />
          Saved
        </div>
        <div className="listItems">
          <img src={rocket} alt="" className="listitemsImg" />
          Upgrade to Pro
        </div>
      </div>
      <div className="Main"> </div>
    </div>
  );
}

export default App;
