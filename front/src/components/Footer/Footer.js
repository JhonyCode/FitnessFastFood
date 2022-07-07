import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Follow us</Heading>
            <FooterLink target="blank" href="https://www.github.com"><FontAwesomeIcon href="#" icon="fa-brands fa-github" /></FooterLink>
             <FooterLink target="blank" href="https://www.instagram.com"><FontAwesomeIcon href="#" icon="fa-brands fa-instagram" /></FooterLink>
             <FooterLink target="blank" href="https://www.facebook.com"><FontAwesomeIcon href="#" icon="fa-brands fa-facebook" /></FooterLink>
          </Column>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="/About">Info</FooterLink>
            <FooterLink href="/About">FAQ</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="/contact">Contact form</FooterLink>
            <FooterLink href="/contact">Email</FooterLink>
            <FooterLink href="/contact">Whatsapp</FooterLink>
          </Column>
          <Column>
            <Heading>Company info</Heading>
            <FooterLink> <p>C:/ Avenida de los lirios 1, 25502</p>
            <p>Fuengirola, Málaga 29640</p></FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;