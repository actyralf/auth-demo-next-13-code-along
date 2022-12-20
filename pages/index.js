import styled from "styled-components";
import {useState, useEffect} from "react";
import Link from "next/link";
import {StyledContainer} from "../components/StyledContainer";
import {StyledButton} from "../components/StyledButton";

export default function Home() {
  const [octopodes, setOctopodes] = useState([]);

  useEffect(() => {
    const loadOctopodes = async () => {
      try {
        const response = await fetch("/api/octopodes");
        if (!response.ok) {
          throw new Error(
            `Response failed with status code ${response.status}`
          );
        }
        const data = await response.json();
        setOctopodes(data);
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    };
    loadOctopodes();
  }, []);

  return (
    <StyledContainer>
      <StyledSection>
        <StyledButton>Login</StyledButton>
      </StyledSection>
      <StyledList>
        {octopodes.map(octo => {
          return (
            <li key={octo.id}>
              <StyledLink href={`/octopodes/${octo.id}`}>
                {octo.name}
              </StyledLink>
            </li>
          );
        })}
      </StyledList>
    </StyledContainer>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;

  &:link,
  &:visited {
    color: #edf2f4;
  }
  &:hover {
    color: darkgoldenrod;
  }
  &:active {
    color: #edf2f4;
  }
`;

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 20px 0;
  padding: 0;
  li:before {
    content: "🐙";
    margin-right: 10px;
  }
`;
