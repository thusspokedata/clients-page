import React from "react";
import AddRestaurant from "../components/AddRestaurant";
import AddEmployee from "../components/AddEmployee";
import AddProduct from "../components/AddProduct";
import DeleteAccount from "../components/DeleteAccount";

function AdminPage() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6">
            <AddRestaurant />
          </div>
          <div className="col-12 col-sm-6">
            <AddEmployee />
          </div>
          <div className="col-12 col-sm-6">
            <AddProduct />
          </div>
          <div className="col-12 col-sm-6">
            <DeleteAccount />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
