import React, { useContext, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { DataContext } from "../../App";
import "./styles.scss";

const sortColumn = (a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

const Grid = ({ properties, id }) => {
  return (
    <>
      <Link className="TitleElements" to={"/detail/" + id}>
        {properties.place}
      </Link>
      <div className="GridElements">{properties.mag}</div>
      <div className="GridElements">
        {moment(properties.time).format("lll")}
      </div>
    </>
  );
};

const Home = () => {
  const dataSouce = useContext(DataContext);
  const [gridData, setGridData] = useState({
    data: dataSouce.data.features,
    order: false,
  });

  const onMagClickHanlder = useCallback(() => {
    const sorted = !gridData.order
      ? [...gridData.data].sort((a, b) =>
          sortColumn(a.properties.mag, b.properties.mag)
        )
      : [...gridData.data].reverse((a, b) =>
          sortColumn(a.properties.mag, b.properties.mag)
        );
    setGridData({ data: sorted, order: !gridData.order });
  }, [gridData]);

  const onDateClickHanlder = useCallback(() => {
    const sorted = !gridData.order
      ? [...gridData.data].sort((a, b) =>
          sortColumn(new Date(a.properties.time), new Date(b.properties.time))
        )
      : [...gridData.data].reverse((a, b) =>
          sortColumn(new Date(a.properties.time), new Date(b.properties.time))
        );
    setGridData({ data: sorted, order: !gridData.order });
  }, [gridData]);

  const onTitleClickHanlder = useCallback(() => {
    const sorted = !gridData.order
      ? [...gridData.data].sort((a, b) =>
          sortColumn(a.properties.place, b.properties.place)
        )
      : [...gridData.data].reverse((a, b) =>
          sortColumn(a.properties.place, b.properties.place)
        );
    setGridData({ data: sorted, order: !gridData.order });
  }, [gridData]);

  return (
    <div className="home-container">
      <div className="titlePage">{dataSouce.data.metadata.title}</div>
      <div className="grid-container">
        <div onClick={onTitleClickHanlder} className="header">
          Title
        </div>
        <div onClick={onMagClickHanlder} className="header">
          Magnitude
        </div>
        <div onClick={onDateClickHanlder} className="header">
          Time
        </div>
        {gridData.data.map(({ properties, id }) => (
          <Grid properties={properties} key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
