import React from 'react';
import { Brain, RefreshCcw, Zap } from 'lucide-react';

const FeaturesSection: React.FC = () => {
    return (
        <section id="features" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Simplifiez votre prise de notes
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Découvrez comment NG-NOTE transforme votre façon de capturer et d'organiser vos idées
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="feature-card bg-gray-50 p-8 rounded-2xl">
                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                            <Zap className="text-primary-500 text-xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Prise de notes rapide</h3>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Interface épurée et intuitive pour capturer vos idées instantanément, sans friction.
                        </p>
                    </div>
                    <div className="feature-card bg-gray-50 p-8 rounded-2xl">
                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                            <Brain className="text-primary-500 text-xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Organisation intelligente</h3>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Classement automatique et suggestions contextuelles pour retrouver facilement vos notes.
                        </p>
                    </div>
                    <div className="feature-card bg-gray-50 p-8 rounded-2xl">
                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                            <RefreshCcw className="text-primary-500 text-xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Synchronisation multi-appareils</h3>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Accédez à vos notes sur tous vos appareils, toujours à jour et sécurisées.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
