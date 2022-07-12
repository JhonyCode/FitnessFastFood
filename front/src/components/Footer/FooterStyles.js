import styled from 'styled-components';
   
// Creamos la caja contenedora del footer.

export const Box = styled.div`
  background: #D1D1D1;
  position: absolute;
  width: 100%;
  align-items:center;
  margin-top:5%;
  
// Añadimos 2 mediaquery.

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
  @media (max-width: 800px) {
    padding: 70px 30px;

  }
`
   // Creamos los contenedores.
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`
   // Creamos las columnas.
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
   // Creamos las filas.
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
   //Creamos los links
export const FooterLink = styled.a`
color:black;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  font-style: italic;
   
  &:hover {
    
      color: #834E69;
      transition: 200ms ease-in;
  }
`;
   // Creamos el HEADER del footer.
export const Heading = styled.p`
  font-size: 24px;
  color:black;
  margin-bottom: 20px;
  font-weight: bold;
`;