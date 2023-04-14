import styled from "styled-components";

// This is a demo component to demonstrate Styled Components integration

export function FishCard({fish, locked = false}) {
  return (
    <StyledCard color={fish?.color}>
      {locked ? (
        <h1>🔒 Unauthorized</h1>
      ) : (
        <>
          {" "}
          <h1>🔓 My profile</h1>
          <h2>🐟 {fish?.name}</h2>
          <p>{fish.secret}</p>
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
