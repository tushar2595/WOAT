import React, { Component } from 'react';
import data from '../../data/getWorkOrderList.json';
import moment from 'moment';
import './style.scss';
class Assignment extends Component {
  render() {
    console.log(data.job);
    return (
      <div className={'assignment-container'} >
        {
          data.job.map((item, index) =>
            (
              <div className={"work-order"}>
                {
                  item.workorders.map((items) =>
                    (
                      <div style={{ border: "1px solid", padding: "2px" }}>
                        <p > {item.jobname} </p>
                        <p > {items.name}</p>

                        <p>{moment(items.Date).format('llll')}</p>
                      </div>
                    ))
                }

              </div>
            ))
        }
      </div>
    );
  }
}

export default Assignment;