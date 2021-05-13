import React, { useContext } from "react";
import styled from "styled-components";
import { Title } from "../Home";
import { DataContext } from "../../App";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Column = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  width: 50%;
`;

const ProfileImage = styled.img`
  width: 100px;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ProfileDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const Text = styled.div`
  font-size: 14px;
  font-family: sans-serif;
  font-weight: bold;
  padding: 10px;
  text-align: left;
`;

export const Detail = styled.div`
  font-size: 14px;
  font-family: sans-serif;
  padding: 10px;
  text-align: left;
`;

const Profile = () => {
  const dataSource = useContext(DataContext);
  return (
    <Container>
      <Title children={"Profile"} />
      <Column>
        <ProfileContainer>
          <ProfileImage src={dataSource.profile.avatarImage} />
        </ProfileContainer>
        <ProfileDetails>
          <Text>First Name</Text>
          <Detail>{dataSource.profile.firstName}</Detail>
          <Text>Last Name</Text>
          <Detail>{dataSource.profile.lastName}</Detail>
          <Text>Phone</Text>
          <Detail>{dataSource.profile.phone}</Detail>
          <Text>Email</Text>
          <Detail>{dataSource.profile.email}s</Detail>
          <Text>Bio</Text>
          <Detail>{dataSource.profile.bio}</Detail>
        </ProfileDetails>
      </Column>
    </Container>
  );
};

export default Profile;
