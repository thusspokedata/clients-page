import React from "react";
import foto from "../assets/instagram_profile_image.png";
import foto2 from "../assets/qr.png";

function MainPage() {
  return (
    <>
      <div className="container my-0">
        <div className="row py-0 d-flex align-items-center justify-content-center">
          <div className="col-5 p-0 firstContainer">
            <img src={foto} alt="foto" className="logo img-fluid" />
          </div>
        </div>
      </div>

      <div className="text1 p-0 d-flex align-items-center justify-content-center">
        <h2 className="col-5">
          Create a profile and get the discounts you deserve for being a loyal
          customer
        </h2>
      </div>

      <div className="container my-0 d-flex align-items-center justify-content-center">
        <div className="row col-10 d-flex align-items-center justify-content-center">
          <div className="col-12 col-sm-4 ">
            <img
              src={foto2}
              alt="foto"
              className="logo col-12 col-sm-6 img-fluid qr-size"
            />
          </div>

          <div className="col-12 col-sm-6 d-flex align-items-center justify-content-center">
            <h2 className="col-8 p-5">
              <ul>
                <li className="text2">Keep track of all your orders</li>
                <li className="text2">Get personalized discounts</li>
              </ul>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
