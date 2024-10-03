import { Pencil } from "lucide-react"

const Navbar: React.FC = () => {
    return (
        <nav className="fixed w-full z-50 transition-all duration-300 bg-transparent">
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
                        <a href="#features"
                            className="text-gray-600 hover:text-primary-500 transition-colors">Fonctionnalités</a>
                        <a href="#"
                            className="text-gray-600 hover:text-primary-500 transition-colors">Tarifs</a>
                        <a href="#" className="text-gray-600 hover:text-primary-500 transition-colors">Blog</a>
                        <a href="#"
                            className="bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-all transform hover:scale-105">
                            Essayer gratuitement
                        </a>
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