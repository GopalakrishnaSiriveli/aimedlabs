// Login.js
import React from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  width: 200px;
  cursor: pointer;
`;

const Inputcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
`;

const Checkboxcontainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const P = styled.p`
  font-size: 15px;
  margin-left: 180px;
  color: orange;
`;

const Span = styled.span`
  color: orange;
  text-decoration: underline;
`;

const H = styled.p`
  font-size: 15px;

  color: black;
`;

const Name = styled.p`
  color: black;
  font-size: 15px;
`;

const Image = styled.img`
  height: 30px;
  width: 30px;
  margin: 5px;
  margin-left: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const Login = () => {
  return (
    <LoginContainer>
      <h2>Login</h2>
      <Inputcontainer>
        <label htmlFor="name">Login ID</label>
        <Input type="text" id="name" placeholder="Enter Login ID" />
        <label htmlFor="password">Password</label>
        <Container>
          <Input type="password" placeholder="Enter Password" id="password" />
          <Image
            src="https://res.cloudinary.com/dz7osr4ia/image/upload/v1698567625/icon_mh3qba.png"
            alt="img"
          />
        </Container>
        <Checkboxcontainer>
          <input type="checkbox" />
          <Name>Remember Me</Name>
          <P>Change Password</P>
        </Checkboxcontainer>
        <Checkboxcontainer>
          <input type="checkbox" />
          <Name>
            Agree to<Span>Terms & Conditions</Span>
          </Name>
        </Checkboxcontainer>
      </Inputcontainer>

      <Button>Login</Button>
      <H>
        Dont have an account?<Span>Register Here</Span>
      </H>
    </LoginContainer>
  );
};

export default Login;
