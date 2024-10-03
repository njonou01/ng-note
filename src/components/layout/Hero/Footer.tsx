import { Facebook } from 'lucide-react';
import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Produit</h3>
                        <ul className="mt-4 space-y-4">
                            <li><a href="#"
                                className="text-base text-gray-300 hover:text-white">Fonctionnalités</a>
                            </li>
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">Tarifs</a>
                            </li>
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Ressources
                        </h3>
                        <ul className="mt-4 space-y-4">
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">Guides</a>
                            </li>
                            <li><a href="#"
                                className="text-base text-gray-300 hover:text-white">Communauté</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Support</h3>
                        <ul className="mt-4 space-y-4">
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">Aide</a></li>
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">Contact</a>
                            </li>
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">Statut</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Légal</h3>
                        <ul className="mt-4 space-y-4">
                            <li><a href="#"
                                className="text-base text-gray-300 hover:text-white">Confidentialité</a>
                            </li>
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">CGU</a></li>
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">Cookies</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6 md:order-2">
                        <a href="#" className="text-gray-400 hover:text-gray-300">
                            <i className="fab fa-twitter text-lg"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-300">
                            <Facebook  className='text-lg'/>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-300">
                            <i className="fab fa-instagram text-lg"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-300">
                            <i className="fab fa-github text-lg"></i>
                        </a>
                    </div>
                    <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                        &copy; 2024 NG-NOTE. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;