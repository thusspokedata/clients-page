import React, { useState, useContext, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { AuthContext } from "../context/auth";

import axios from "axios";

const QrCode = () => {
  const [userData, setUserData] = useState("");

  const { user } = useContext(AuthContext);
  console.log(`this is the userId: ${user._id}`);

  useEffect(() => {
    axios
      // .get(`https://foodstrap-berlin.herokuapp.com/api/auth/${user._id}`)
      .get(`/api/auth/${user._id}`)
      .then((response) => {
        console.log(response);
        setUserData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const qrcode = (
    <QRCodeCanvas id="qrCode" value={userData._id} size={300} level={"H"} />
  );
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-center mt-sm-5">
            <h1 className="col-12 col-sm-3 ">
              Hi {userData.username} !! this your QR code, use it to get
              discounts on your favorites Restaurants
            </h1>
          </div>
          <div className="qrcode__container mt-2 mt-sm-5 d-flex align-items-center justify-content-center">
            <div>{qrcode}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QrCode;
