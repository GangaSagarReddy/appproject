// Filename - Home.js
import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  let history = useNavigate();

  // You may skip this part if you're
  // using react-context api or redux
  function setID(id, first_name, last_name, email, gender, DateOfBirth) {
    localStorage.setItem("id", id);
    localStorage.setItem("First_name", first_name);
    localStorage.setItem("Last_name", last_name);
    localStorage.setItem("email", email);
    localStorage.setItem("gender", gender);
    localStorage.setItem("DateOfBirth", DateOfBirth);
  }

  // Deleted function - functionality
  // for deleting the entry
//   function deleted(id) {
    // var index = array
    //   .map(function (e) {
    //     return e.id;
    //   })
    //   .indexOf(id);
	function deleted(id) {
	const conf= window.confirm("Do you want to delete ?");

 if(conf){

 axios.delete('array'+id).then(res => {

   alert("Record has deleted");


}).catch(err => console.log(err))

    // deleting the entry with index
     array.splice(array, 1);

    // We need to re-render the page for getting
    // the results so redirect to same page.
    history("/home");
  }
}

  return (
    <div style={{ margin: "0rem", width: "100%", height: "100%" }} >
      <h1  class="text-success" style={{backgroundColor: 'black', alignSelf: 'flex-start'}}>
        <button
          onClick={() => history(-1)}
          variant="blue"
          style={{ float: "left" }}
        >
          Back
        </button>
        <Link to="/create">
          <Button variant="warning" size="lg" style={{ float: "right" }}>
            Create
          </Button>
        </Link>
        EMPLOYEES TABLE
      </h1>
      <Table
        striped
        bordered
        hover
        size="xl"
        variant="dark"
        border="0"
        cellspacing="0"
        cellpadding="0"
        width="100%"
		
      >
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Gender</th>
            <th>DateOfBirth</th>
            <th>Action1</th>
            <th>Action2</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping though every element
						in the array and showing the
						data in the form of table */}
          {array.map((item) => {
            return (
              <tr>
                <td>{item.First_name}</td>
                <td>{item.Last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.DateOfBirth}</td>

                {/* getting theid,name, and
									age for storing these
									value in the jsx with
									onclick event */}
                <td>
                  <Link to={`/edit`}>
                    <Button
                      onClick={(e) =>
                        setID(
                          item.id,
                          item.First_name,
                          item.Last_name,
                          item.email,
                          item.gender,
                          item.DateOfBirth
                        )
                      }
                      variant="info"
                    >
                      Update
                    </Button>
                  </Link>
                </td>

                {/* Using thr deleted function passing
									the id of an entry */}
                <td>
                  <Link to={`/home`}>
                    <Button onClick={(e) => deleted(item.id)} variant="danger">
                      Delete
                    </Button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* Button for redirecting to create page for
				insertion of values */}
      {/* <Link className="d-grid gap-2" to='/create'>
				<Button variant="warning" size="lg">Create</Button>
			</Link> */}
    </div>
  );
}

export default Home;