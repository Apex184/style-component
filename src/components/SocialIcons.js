import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { StyledSocialIcons } from './styles/SocialIcons.styled'

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href='https://twitter.com/akindele-apex'>
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href='https://facebook.com/akindeleapexsimeon'>
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href='https://linkedin.com/apex-simeon'>
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  )
}
