import React, { useContext } from "react";
import moment from "moment";
import { useParams } from "react-router-dom";
import { DataContext } from "../../App";
import { Container, Title } from "../Home";
import { Column, Text, Detail as DetailView } from "../Profile";

const Detail = () => {
  let { id } = useParams();
  const dataSource = useContext(DataContext);
  const details = dataSource.data.features.find((x) => x.id === id);

  return (
    <Container>
      <Title children={details.properties.place} />
      <Column>
        <Text>Title</Text>
        <DetailView>{details.properties.place}</DetailView>
        <Text>Magnitude</Text>
        <DetailView>{details.properties.mag}</DetailView>
        <Text>Time</Text>
        <DetailView>{moment(details.properties.time).format("lll")}</DetailView>
        <Text>Status</Text>
        <DetailView>{details.properties.status}</DetailView>
        <Text>Tsunami</Text>
        <DetailView>{details.properties.tsunami}</DetailView>
        <Text>Type</Text>
        <DetailView>{details.properties.type}</DetailView>
      </Column>
    </Container>
  );
};

export default Detail;
