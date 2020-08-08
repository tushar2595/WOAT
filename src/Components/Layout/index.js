import React, { Component } from 'react';
import './style.scss';
import Table from './Table';
import AssignmentCell from './Assignment';
import data from '../../data/getEmployeeList.json';
import Assignment from './Assignment';


class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showorder: false
    }
  }
  render() {
    console.log(data);
    return (
      <div className={"layout-container"}>
        <div className={"title-container"}>
          <h3 className={"title"}>Work Order Assignment Tool</h3>
        </div>
        <div className={"employee-container"}>
          <div style={{ marginTop: "150px", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
            {
              data.Employess.map((person, index) => (
                <p><span style={{ margin: "10px" }}>{person.Name}</span></p>
              ))
            }
          </div>
          <div>
            <Table />
          </div>
        </div>


        <div style={{ display: "flex", justifyContent: "start", margin: "2px", marginLeft: "100px", padding: "10px" }}>
          <div style={{ margin: "5px" }}>
            <AssignmentCell />
          </div>

        </div>
      </div>

    );
  }
}

export default Layout;