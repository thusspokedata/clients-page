import React from "react";
import foto from "../Assets/instagram_profile_image.png";
import foto2 from "../Assets/instagram_profile_image.png";



function MainPage() {
    return  ( 
      <><div className="container" >
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-5 firstContainer">
              <img src={foto} alt="foto" className="logo" class="img-fluid" />
          </div>
        </div>
        </div>
       
        
        <div className="text1 mt-4 d-flex align-items-center justify-content-center" >
          <h2 className="col-5">
            Create a profile and get the discounts you deserve for being a loyal customer
          </h2>
        </div>

       
        
        <div className="container">
           <div className="row">
                
                <div className="col-12 col-sm-6">
                  <img src={foto} alt="foto" className="logo col-10" class="img-fluid" />
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
     
      </ >
    );
  };

export default MainPage;