import SocialIcons from './SocialIcons'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src='./images/logo_white.svg' alt='' />

        <Flex>
          <ul>
            <li>
              This is styled-component in react for those who are willing to use styled-component
              this is quite simple if you pay much of your attention to it.
            </li>
            <li>+234-816-5275-980</li>
            <li>akindeleapex@gmail.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; 2021 Styled-Component. All rights reserved</p>
      </Container>
    </StyledFooter>
  )
}
