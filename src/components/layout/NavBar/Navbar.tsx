import { Pencil } from "lucide-react"
import { useEffect, useRef } from "react"
interface LinkProps {
    href: string,
    text: string
}
interface LinksProps { links: LinkProps[] }
const Link: React.FC<LinkProps> = ({ href, text }) => {
    return (
        <a href={href}
            className="text-gray-600 hover:text-primary-500 transition-colors">
            {text}
        </a>
    )
}
const Navbar: React.FC<LinksProps> = ({ links }) => {
    const navbar = useRef<HTMLDivElement>(null)
    const navbarEffect = () => {
        if (window.scrollY > 50) {
            navbar.current?.classList.add('bg-white', 'shadow-lg');
            navbar.current?.classList.remove('bg-transparent');
        } else {
            navbar.current?.classList.remove('bg-white', 'shadow-lg');
            navbar.current?.classList.add('bg-transparent');
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', () => navbarEffect());
        return () => {
            window.removeEventListener('scroll', () => navbarEffect());
        };
    }, [])
    return (
        <nav ref={navbar} className="fixed w-full z-50 transition-all duration-300 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center space-x-3">
                        <div
                            className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                            <Pencil className="text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900">NG-NOTE</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link, index) => (
                            <Link key={index} {...link} />
                        ))}
                    </div>
                    <button className="md:hidden text-gray-600">
                        <i className="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </nav>
    )
}
export default Navbar