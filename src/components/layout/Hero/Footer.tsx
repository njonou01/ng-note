import { Facebook, Github, Instagram, Twitter } from 'lucide-react';
import React from 'react'

interface SocialLinkProps {
    href: string,
    Icon: React.ElementType<{ className?: string }>
}
interface ColumProps {
    title: string,
    links: { href: string, text: string }[]
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, Icon }) => {
    return (
        <a href={href} className="text-gray-400 hover:text-gray-300">
            <Icon className='text-lg' />
        </a>
    )
}
const Colum: React.FC<ColumProps> = ({ title, links }) => {
    return (
        <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">{title}</h3>
            <ul className="mt-4 space-y-4">
                {links.map((link, index) => (
                    <li key={index}><a href={link.href} className="text-base text-gray-300 hover:text-white">{link.text}</a></li>
                ))}
            </ul>
        </div>
    )
}
const socialNetworks: SocialLinkProps[] = [
    {
        href: '#',
        Icon: Twitter
    },
    {
        href: '#',
        Icon: Facebook
    },
    {
        href: '#',
        Icon: Instagram
    },
    {
        href: '#',
        Icon: Github
    }
]
const columns: ColumProps[] = [
    {
        title: 'Produit',
        links: [
            {
                href: '#',
                text: 'Fonctionnalités'
            },
            {
                href: '#',
                text: 'Tarifs'
            },
            {
                href: '#',
                text: 'FAQ'
            }
        ]
    },
    {
        title: 'Ressources',
        links: [
            {
                href: '#',
                text: 'Blog'
            },
            {
                href: '#',
                text: 'Guides'
            },
            {
                href: '#',
                text: 'Communauté'
            }
        ]
    },
    {
        title: 'Support',
        links: [
            {
                href: '#',
                text: 'Aide'
            },
            {
                href: '#',
                text: 'Contact'
            },
            {
                href: '#',
                text: 'Statut'
            }
        ]
    },
    {
        title: 'Légal',
        links: [
            {
                href: '#',
                text: 'Confidentialité'
            },
            {
                href: '#',
                text: 'CGU'
            },
            {
                href: '#',
                text: 'Cookies'
            }
        ]
    }
]


const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {columns.map((column, index) => (
                        <Colum key={index} {...column} />
                    ))}
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6 md:order-2">
                        {socialNetworks.map((network, index) => (
                            <SocialLink key={index} {...network} />
                        ))}
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