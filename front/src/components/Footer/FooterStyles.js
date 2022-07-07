import styled from 'styled-components';
   
export const Box = styled.div`
  background: #D1D1D1;
  position: absolute;
  width: 100%;
  align-items:center;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
    max-width:456px;
  }
  @media (max-width: 800px) {
    padding: 70px 30px;
    max-width:426px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
color:black;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  font-style: italic;
  font-weight: 700;
   
  &:hover {
    
      color: #834E69;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color:black;
  margin-bottom: 20px;
  font-weight: bold;
`;