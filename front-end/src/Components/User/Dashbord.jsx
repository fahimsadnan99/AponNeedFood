import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Navbar from "../Navbar/Navbar";
import { userInfo } from "../../utils/auth";
import Profile from "./Profile";
import { GetProfileData } from "../../API/AllApi"
import {NavLink} from "react-router-dom"
import Footer from '../Footer/Footer'

const Dashbord = () => {
  const [data, setData] = useState()
  const [PurchaseHistory,setPurchaseHistory] = useState(false)
  const { name, email, role } = userInfo();

  useEffect(() => {
  GetProfileData()
    .then(res => setData(res.data))
  .catch(err => console.log(err))
},[])

  return (
    <>
      <Layout title="user dashbord">
        <Navbar></Navbar>
        <div className="row mt-3">
          <div className="col-md-3">
            <ul class="list-group">
              <li class="list-group-item active">User Link</li>
              <li class="list-group-item">
                <NavLink
                  to="/cart"
                  href="#"
                  type="button"
                  class="btn btn-primary"
                >
                  My Cart
                </NavLink>
              </li>
              <li class="list-group-item">
                <a
                  href="#"
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#Profile"
                >
                  Update Profile
                </a>
                <Profile el={data}></Profile>
              </li>

              <li class="list-group-item">
                <button
               
                  type="button"
                  class="btn btn-primary"
                  onClick={() => setPurchaseHistory(!PurchaseHistory)}
                >
                  Purchase History
                </button>
              </li>
            </ul>
          </div>

          <div className="col-md-6 offset-md-1">
            <ul class="list-group">
              <li class="list-group-item active">User Information</li>
              <li class="list-group-item">Name : {name} </li>
              <li class="list-group-item">Email : {email}</li>
              <li class="list-group-item">City : {data ? data.city : "N/A"}</li>
              <li class="list-group-item">
                Address :{data ? data.address : "N/A"}
              </li>
              <li class="list-group-item">
                Phone : {data ? data.phone : "N/A"}
              </li>
              <li class="list-group-item">
                postCode :{data ? data.postCode : "N/A"}
              </li>
              <li class="list-group-item">Role : {role} </li>
            </ul>
          </div>
         {PurchaseHistory && (<div className="col-md-8 offset-md-2 mt-3">
            <ul class="list-group">
              <li class="list-group-item active">Purchase History</li>
              <li class="list-group-item">History </li>
            </ul>
          </div>)}
        </div>
        <Footer></Footer>
      </Layout>
    </>
  );
};

export default Dashbord;
