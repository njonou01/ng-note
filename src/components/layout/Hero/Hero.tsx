import { ArrowRight, Play } from 'lucide-react'
import React from 'react'
import img from '../../../assets/images/4481343.jpg';

export const Hero: React.FC = () => {
    return (
        <section className="pt-32 pb-20 hero-pattern">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-5xl font-bold leading-tight">
                            Capturez vos idées avec  
                            <span className="gradient-text"> NG-NOTE</span>
                        </h1>
                        <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                            Une application de prise de notes intelligente qui s'adapte à votre flux de
                            pensée. Organisez, créez et retrouvez vos idées en toute simplicité.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <a href="#"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white bg-primary-500 hover:bg-primary-600 transition-all transform hover:scale-105">
                                Commencer gratuitement
                                <ArrowRight className="ml-2" />
                            </a>
                            <a href="#"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-primary-600 bg-primary-50 hover:bg-primary-100 transition-all">
                                <Play className="mr-2" />
                                Voir la démo
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-300 to-primary-600 rounded-3xl transform rotate-6 animate-float">
                        </div>
                        <img src={img} alt="NG-NOTE Interface"
                            className="relative rounded-3xl shadow-2xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}