
import './App.css'
import { Hero } from './components/layout/Hero/Hero'
import Navbar from './components/layout/NavBar/Navbar'
import FeaturesSection from './components/layout/Hero/FeaturesSection'
import Footer from './components/layout/Hero/Footer'
import { Lightbulb, Pencil, WandSparkles } from 'lucide-react'
const links: LinkProps[] = [
  {
    href: '#features',
    text: 'Fonctionnalités'
  },
  {
    href: '#',
    text: 'Tarifs'
  },
  {
    href: '#',
    text: 'Blog'
  },
  {
    href: '#',
    text: 'Aide'
  }
]
interface LinkProps {
  href: string,
  text: string
}
function App() {
  return (
    <>
      <Navbar links={links} />
      <Hero />
      <FeaturesSection />
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comment ça marche
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Pencil className="text-primary-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Notez</h3>
              <p className="text-gray-600">Capturez rapidement vos idées dans une interface intuitive.
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <WandSparkles className="text-primary-500 text-2xl " />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Organisez</h3>
              <p className="text-gray-600">Laissez NG-NOTE classer et lier intelligemment vos notes.
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-primary-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Inspirez-vous</h3>
              <p className="text-gray-600">Retrouvez et développez vos idées quand vous en avez
                besoin.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Prêt à libérer votre créativité ?</h2>
          <p className="mt-4 text-xl opacity-90">
            Rejoignez des milliers d'utilisateurs satisfaits et commencez à noter intelligemment.
          </p>
          <a href="#"
            className="mt-8 inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all transform hover:scale-105">
            Essayer NG-NOTE gratuitement
          </a>
        </div>
      </section>
      <Footer></Footer>
    </>
  )
}

export default App
