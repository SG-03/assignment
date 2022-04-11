import React, { useEffect, useState } from "react";
import Data from "./Data";
const Form = (props) => {
  const [userData, setUserData] = useState({
    id: 0,
    title: "",
    description: "",
    email: "",
    range: 0,
    valid: false,
  });

  const [dataArr, setDataArr] = useState([]);
  //const [showData, setShowData] = useState(false);
  useEffect(() => {
    //ssetShowData(false);
  }, [userData]);
  useEffect(() => {
    setUserData((prev) => ({ ...userData, id: prev.id + 1 }));
  }, [setDataArr]);

  const changeHandle = (e) => {
    const { name, value, checked, type } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const submitClick = (e) => {
    e.preventDefault();
   
    setDataArr([...dataArr, userData]);
    localStorage.setItem("userdata", JSON.stringify(dataArr));
   //s setShowData(true);
    setUserData({
        id: 0,
        title: "",
        description: "",
        email: "",
        range: 0,
        valid: false,
    })
    
  };

  return (
    <div>
      <div>
        <div className="container">
          <div className="credentials-cont">
            <form onSubmit={(e) => submitClick(e)} className="credentials-cont">
              <div className="field">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={userData.title}
                  required
                  onChange={(e) => changeHandle(e)}
                />
                <div></div>
              </div>
              <div className="field">
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  value={userData.description}
                  onChange={(e) => changeHandle(e)}
                />
                <div></div>
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={userData.email}
                  onChange={(e) => changeHandle(e)}
                />
                <div></div>
              </div>
              <div className="field">
                <label>Range</label>
                <input
                  type="number"
                  name="range" min={0} max={100}
                  required
                  value={userData.range}
                  onChange={(e) => changeHandle(e)}
                />
                <div></div>
              </div>
              <div className="field">
                <label>Valid</label>
                <input
                  type="radio"
                  id="true"
                  name="valid"
                  required
                  value="true"
                  onChange={(e) => changeHandle(e)}
                />
                <label>True</label>

                <input
                  type="radio"
                  id="false"
                  name="valid"
                  required
                  value="false"
                  onChange={(e) => changeHandle(e)}
                />
                <label>False</label>
                <div></div>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Data data={dataArr} />
    </div>
  );
};

export default Form;
