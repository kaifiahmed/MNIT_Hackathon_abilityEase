import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fservice-background&psig=AOvVaw2_uXMAOZs9-TzlImJpygPk&ust=1699252396958000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDaic-erIIDFQAAAAAdAAAAABAE');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .services-container {
    max-width: 80%;
    padding: 20px;
    background-color: teal;
    border: 1px solid #ccc;
    border-radius: 10px;
  }

.services-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.service {
  flex: 1;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.service:hover {
  transform: scale(1.02);
}

h1 {
  font-size: 24px;
  text-align: center;
}

h2 {
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  line-height: 1.5;
}
`
