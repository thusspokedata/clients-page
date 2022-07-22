import React, { useState, useContext, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { AuthContext } from "../context/clientAuth";

import axios from "axios";

const QrCode = () => {
  const [userData, setUserData] = useState("");

  const { user } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    axios
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
          <h1 className="">
            Hi {userData.username} !! this your QR code, use it to get discounts
            on your favorites Restaurants
          </h1>
          <div className="qrcode__container mt-5">
            <div>{qrcode}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QrCode;
