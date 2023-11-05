import styled from "styled-components";
const Wrapper = styled.div`
background-image: url('your-image-url-here');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default Wrapper;
export const PageContainer = styled.div`
  padding: 20px;
`;

export const SectionHeader = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

export const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ServiceItem = styled.li`
  flex: 1;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  background-color: #f0f0f0;
  &:hover {
    transform: scale(1.02);
  }
`;

export const ServiceTitle = styled.h2`
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 10px;
  color: #333;
`;

export const ServiceDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
`;

