import React, { useRef } from "react";
import './style.scss';
import Assignment from './Assignment';
import data from '../../data/getWorkOrderList.json';

import moment from 'moment';
import { Alert } from 'antd';


class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showorder: false,
      job: "",
      order: null,
      item: "",
      orders: "",
      id: false,
      items: "",
      clickref: "",
      showAlert: false
    }
    this.exampleRef = React.createRef();
    this.exampleRef1 = React.createRef();
  }

  handleClick = (items, item) => {
    const selectedRef = this.state.clickref;
    console.log(selectedRef, 'kamal');


    const rep = items.name;
    console.log(rep, 'sssssssssss');
    this.setState({ showorder: false })

    selectedRef.target.value = JSON.stringify(item.jobname + " " + items.name);




    // this.exampleRef1.current.value = JSON.stringify(items);
    // this.setState({ items: event.currentTarget.dataset.mode });

  }
  handletdClick = (ref) => {
    this.setState({ showorder: true, clickref: { ...ref } })
    //this.exampleRef.current.value = "snks"
    // ref.current.value = "kamal";
    //console.log(ref, 'iiiii');


  }
  render() {
    return (
      <>

        <div className={'save-btn-container'}>
          <button onClick={() => this.setState({ showAlert: true })} >Save</button>
        </div>
        {
          this.state.showAlert &&
          <Alert message="Saved" type="info" showIcon />
        }
        <div onClick={() => this.setState({ showAlert: false })} className={"table-container"} >
          <table className={"table"}>
            <tr className={"cell-container"}>
              <td>  20-Apr-2020</td>
              <td>  21-Apr-2020</td>
              <td>  22-Apr-2020</td>
              <td>  23-Apr-2020</td>
              <td>  24-Apr-2020</td>
              <td>  25-Apr-2020</td>
            </tr>
            <tr className={"cell-container"}>
              <td><input className={'input-container'} onClick={this.handletdClick} /></td>
              <td><input className={'input-container'} onClick={this.handletdClick} /></td>
              {/* <td><input onClick={() => { this.handletdClick(this.exampleRef) }} ref={this.exampleRef} /></td>
              <td><input onClick={() => { this.handletdClick(this.exampleRef1) }} ref={this.exampleRef1} /></td> */}
              <td><input className={'input-container'} onClick={this.handletdClick} /></td>
              <td><input className={'input-container'} onClick={this.handletdClick} /></td>
              <td><input className={'input-container'} onClick={this.handletdClick} /></td>
              <td><input className={'input-container'} onClick={this.handletdClick} /></td>

            </tr>
            <tr className={"cell-container"}>
              <td><input className={'input-container'} onClick={this.handletdClick} /></td>
              <td><input className={'input-container'} onClick={this.handletdClick} /></td>
              {/* <td><input onClick={() => { this.handletdClick(this.exampleRef) }} ref={this.exampleRef} /></td>
              <td><input onClick={() => { this.handletdClick(this.exampleRef1) }} ref={this.exampleRef1} /></td> */}
              <td><input className={'input-container'} onClick={this.handletdClick} /></td>
              <td><input className={'input-container'} onClick={this.handletdClick} /></td>
              <td><input className={'input-container'} onClick={this.handletdClick} /></td>
              <td><input className={'input-container'} onClick={this.handletdClick} /></td>

            </tr>
            <tr className={"cell-container"}>
              <td><input className={'input-container'} onClick={this.handletdClick} /></td>
              <td><input className={'input-container'} onClick={this.handletdClick} /></td>
              {/* <td><input onClick={() => { this.handletdClick(this.exampleRef) }} ref={this.exampleRef} /></td>
              <td><input onClick={() => { this.handletdClick(this.exampleRef1) }} ref={this.exampleRef1} /></td> */}
              <td><input className={'input-container'} onClick={this.handletdClick} /></td>
              <td><input className={'input-container'} onClick={this.handletdClick} /></td>
              <td><input className={'input-container'} onClick={this.handletdClick} /></td>
              <td><input className={'input-container'} onClick={this.handletdClick} /></td>

            </tr>

          </table>

        </div >
        {
          this.state.showorder &&
          <div className={"assign-container"}>
            {
              data.job.map((item, index) =>
                (
                  <div className={"work-order"}>
                    {
                      item.workorders.map((items) =>
                        (
                          <div onClick={this.handleClick.bind(this, items, item)} style={{ border: "1px solid", padding: "2px" }}>

                            <p> {item.jobname} </p>
                            <p> {items.name}</p>
                            <p>{moment(items.Date).format("llll")}</p>

                          </div>
                        ))
                    }

                  </div>
                ))
            }
          </div>
        }
      </>
    )
  }
}
export default Table;