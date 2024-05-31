import Link from "next/link"
import {FaGithub, FaFacebook, FaInstagram, FaTwitch, FaTwitter} from 'react-icons/fa'

const socials = [
  { icon: <FaGithub />, path: "https://github.com/tranducduy0304" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/profile.php?id=100012213881694" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/weekiii_/" },
  { icon: <FaTwitter />, path: "https://x.com/TrncDuy77007803" },
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} target="_blank" href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social