import { useState, useEffect } from "react";
import { LoginBtn } from '../components';

export default function Explore(props) {
  //get auth token from state
  const authToken = props.token
  //useState for checking authorization status
  const [authorized, setAuthorized] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );
  
  useEffect(() => {
    if(authToken) {
      setAuthorized(true);
    }
  }, [authToken, setAuthorized])

  return(
    <>
    {authorized ? (
      <div className="" style={{backgroundImage: "url('../images/lake.jpg')", backgroundSize: "cover"}}>
        <div className="text-center h-screen flex flex-col justify-center items-center ">
          My Trips

        </div>
      </div>
    ) : (
      <div className="" style={{backgroundImage: "url('../images/lake.jpg')", backgroundSize: "cover"}}>
          <div className="text-center h-screen flex flex-col justify-center items-center ">
            <h1 className="text-3xl font-bold mb-5">Please Login to start your journey</h1>
            <div className=" p-5 ">
              <LoginBtn />
            </div>
          </div>
        </div>
    )}
    </>
  )
}