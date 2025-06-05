import { Facebook, Instagram } from "lucide-react"
const Footer = () => {
    return (
        <footer className="flex flex-row justify-between">
            <a href="https://facebook.com">
                <Facebook size={48}/>
            </a>
            <a href="https://Instagram.com">
                <Instagram size={48}/>
            </a>
        </footer>
    )
}
export default Footer;