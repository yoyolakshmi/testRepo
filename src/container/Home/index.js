import React, { useContext, useCallback, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import moment from "moment";
import { brandmedium } from "../../utils/colors";
import { DataContext } from "../../App";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.div`
  color: ${brandmedium};
  font-size: 20px;
  padding: 20px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  gap: 20px;
`;

const Header = styled.div`
  font-size: 16px;
  padding: 5px;
  cursor: pointer;
`;

const sortMag = (a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

const sortTitle = (a, b) => {
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
      <Link to={"/detail/" + id}>{properties.place}</Link>
      <div>{properties.mag}</div>
      <div>{moment(properties.time).format("lll")}</div>
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
          sortMag(a.properties.mag, b.properties.mag)
        )
      : [...gridData.data].reverse((a, b) =>
          sortMag(a.properties.mag, b.properties.mag)
        );
    setGridData({ data: sorted, order: !gridData.order });
  }, [gridData]);

  const onDateClickHanlder = useCallback(() => {
    const sorted = !gridData.order
      ? [...gridData.data].sort((a, b) =>
          sortMag(new Date(a.properties.time), new Date(b.properties.time))
        )
      : [...gridData.data].reverse((a, b) =>
          sortMag(new Date(a.properties.time), new Date(b.properties.time))
        );
    setGridData({ data: sorted, order: !gridData.order });
  }, [gridData]);

  const onTitleClickHanlder = useCallback(() => {
    const sorted = !gridData.order
      ? [...gridData.data].sort((a, b) =>
          sortTitle(a.properties.title, b.properties.title)
        )
      : [...gridData.data].reverse((a, b) =>
          sortTitle(a.properties.title, b.properties.title)
        );
    setGridData({ data: sorted, order: !gridData.order });
  }, [gridData]);

  return (
    <Container>
      <Title children={dataSouce.data.metadata.title} />
      <GridContainer>
        <Header onClick={onTitleClickHanlder}>Title</Header>
        <Header onClick={onMagClickHanlder}>Magnitude</Header>
        <Header onClick={onDateClickHanlder}>Time</Header>
        {gridData.data.map(({ properties, id }) => (
          <Grid properties={properties} key={id} id={id} />
        ))}
      </GridContainer>
    </Container>
  );
};

export default Home;
