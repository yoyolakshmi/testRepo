import React, { useContext } from "react";
import moment from "moment";
import { useParams } from "react-router-dom";
import { DataContext } from "../../App";
import "./styles.scss";

const Detail = () => {
  let { id } = useParams();
  const dataSource = useContext(DataContext);
  const details = dataSource.data.features.find((x) => x.id === id);

  return (
    <div className="detail-container">
      <div className="titlePage">{details.properties.title}</div>
      <div className="column">
        <div className="text">Title</div>
        <div className="detail">{details.properties.title}</div>
        <div className="text">Magnitude</div>
        <div className="detail">{details.properties.mag}</div>
        <div className="text">Time</div>
        <div className="detail">
          {moment(details.properties.time).format("lll")}
        </div>
        <div className="text">Status</div>
        <div className="detail">{details.properties.status}</div>
        <div className="text">Tsunami</div>
        <div className="detail">{details.properties.tsunami}</div>
        <div className="text">Type</div>
        <div className="detail">{details.properties.type}</div>
      </div>
    </div>
  );
};

export default Detail;
