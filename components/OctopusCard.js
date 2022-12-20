import styled from "styled-components";

// This is a demo component to demonstrate Styled Components integration

export function OctopusCard({octopus, locked = false}) {
  return (
    <StyledCard color={octopus?.color}>
      {locked ? (
        <h1>🔒 Unauthorized</h1>
      ) : (
        <>
          {" "}
          <h1>🔓 My secret octopus profile</h1>
          <h2>🐙 {octopus?.name}</h2>
          <p>I am {octopus?.age} years old</p>
        </>
      )}
    </StyledCard>
  );
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({color}) => color};
  border: 1px solid black;
  border-radius: 5px;
  width: 400px;
  height: 400px;
`;
