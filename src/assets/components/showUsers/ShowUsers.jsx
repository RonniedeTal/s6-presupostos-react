import React, { useState } from "react";
import users from "../../users.json";
import UserForm from "../User-form/UserForm";
import SearchBar from "../searchBar-component/SearchBar";
import CardComponent from "../cardComponent/CardComponent";
import BudgetSelection from "../../section/budgetsChooseSection/BudgetSelection";
function ShowUsers(props) {
  const [user, setUser] = useState(users);
  const [searchValue, setSearchValue] = useState("");
  const [sortBy, setSortBy] = useState("");
  // const [selectedService, setSelectedService]=useState(null)
  // console.log(selectedService, setSelectedService);

  return (
    <div>
      <div>
        <UserForm
          user={user}
          setUser={setUser}
          service={props.service}
          total={props.total}
          numLanguages={props.numLanguages}
          numPages={props.numPages}
        />
      </div>
      <div className="fw-bold text-center mt-5">
        <h4>Budgets Running:</h4>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} sortBy={sortBy}
  setSortBy={setSortBy}/>
      </div>
      <div>
        {user
          .filter((eachUser) => {
            return eachUser.name.startsWith(searchValue);
          })
          .sort((a, b) => {
            if (sortBy === "name") {
              return a.name.localeCompare(b.name);
            }
            if (sortBy === "price") {
              return parseFloat(a.total) - parseFloat(b.total);
            }
            return 0;
          })
          .map((eachUser, i) => {
            return (
              <div
                key={i}
                className="card mt-4 mx-auto shadow p-3 mb-4 bg-body rounded"
                style={{ maxWidth: "700px", fontSize: "0.9rem" }}
              >
                <div className="row g-3 align-items-center">
                  <div className="col-md-4">
                    <h5 className="mb-1">{eachUser.name}</h5>

                    <p className="mb-1">{eachUser.email}</p>
                    <p className="mb-1">{eachUser.telephone}</p>
                  </div>
                  <div className="col-md-5">
                    <p>{props.h4Content}</p>
                    <p>{eachUser.totalPrice}</p>
                    <h6 className="fw-bold">Services: {eachUser.service}</h6>
                  </div>
                  <div className="col-md-3 text-end">
                    {/* <p>languages: {eachUser.numLanguages}</p> */}
                    <h6 className="fw-bold">Total:</h6>
                    <p className="fs-4 fw-bold text-dark"> {eachUser.total}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
  
    </div>
    
  );
  
}

export default ShowUsers;
