import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Github, AArrowDown } from 'lucide-react';

export default function SignUpPage() {
  return (
    <div className="min-h-screen relative py-12 sm:px-6 lg:px-8">
      {/* Motif d'arrière-plan */}
      <div className="absolute inset-0 bg-gray-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='notePattern' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='50' cy='50' r='1' fill='%236366f1' opacity='0.1'/%3E%3Ccircle cx='0' cy='0' r='1' fill='%236366f1' opacity='0.1'/%3E%3Ccircle cx='100' cy='0' r='1' fill='%236366f1' opacity='0.1'/%3E%3Ccircle cx='0' cy='100' r='1' fill='%236366f1' opacity='0.1'/%3E%3Ccircle cx='100' cy='100' r='1' fill='%236366f1' opacity='0.1'/%3E%3Cline x1='0' y1='25' x2='100' y2='25' stroke='%236366f1' stroke-width='0.5' opacity='0.05'/%3E%3Cline x1='0' y1='75' x2='100' y2='75' stroke='%236366f1' stroke-width='0.5' opacity='0.05'/%3E%3Cpath d='M20 40 L22 38 L24 40 L22 42 Z' fill='%236366f1' opacity='0.1'/%3E%3Cpath d='M80 60 L82 58 L84 60 L82 62 Z' fill='%236366f1' opacity='0.1'/%3E%3Ccircle cx='50' cy='0' r='0.5' fill='%236366f1' opacity='0.1'/%3E%3Ccircle cx='50' cy='100' r='0.5' fill='%236366f1' opacity='0.1'/%3E%3Ccircle cx='0' cy='50' r='0.5' fill='%236366f1' opacity='0.1'/%3E%3Ccircle cx='100' cy='50' r='0.5' fill='%236366f1' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23notePattern)'/%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px'
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-transparent"></div>
      </div>

      <div className="relative sm:mx-auto sm:w-full sm:max-w-md">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg transform transition-transform hover:scale-110">
          <span className="text-white text-2xl font-bold">NG</span>
        </div>
        
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-2">
          Rejoignez <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">NG-NOTE</span>
        </h2>
        <p className="text-center text-lg text-gray-600 mb-8">
          Commencez à capturer vos idées intelligemment
        </p>
      </div>

      <div className="relative sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="border-0 shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-primary-100 backdrop-blur-sm bg-white/90">
          <CardContent className="relative pt-6">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Button variant="outline" className="w-full group transition-all duration-300 hover:border-primary-400 hover:bg-primary-50/50">
                <AArrowDown className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                Google
              </Button>
              <Button variant="outline" className="w-full group transition-all duration-300 hover:border-primary-400 hover:bg-primary-50/50">
                <Github className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                GitHub
              </Button>
            </div>
            
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Ou par email</span>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 group">
                  <Label htmlFor="firstName" className="transition-colors group-focus-within:text-primary-500">Prénom</Label>
                  <Input 
                    id="firstName" 
                    type="text" 
                    required 
                    className="transition-all duration-300 focus:border-primary-400 focus:ring-primary-400 bg-white/80"
                  />
                </div>
                <div className="space-y-2 group">
                  <Label htmlFor="lastName" className="transition-colors group-focus-within:text-primary-500">Nom</Label>
                  <Input 
                    id="lastName" 
                    type="text" 
                    required 
                    className="transition-all duration-300 focus:border-primary-400 focus:ring-primary-400 bg-white/80"
                  />
                </div>
              </div>
              
              <div className="space-y-2 group">
                <Label htmlFor="email" className="transition-colors group-focus-within:text-primary-500">Adresse e-mail</Label>
                <Input 
                  id="email" 
                  type="email" 
                  required 
                  className="transition-all duration-300 focus:border-primary-400 focus:ring-primary-400 bg-white/80"
                />
              </div>

              <div className="space-y-2 group">
                <Label htmlFor="password" className="transition-colors group-focus-within:text-primary-500">Mot de passe</Label>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  className="transition-all duration-300 focus:border-primary-400 focus:ring-primary-400 bg-white/80"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" className="transition-all duration-300 data-[state=checked]:bg-primary-500 data-[state=checked]:border-primary-500" />
                <Label htmlFor="terms" className="text-sm">
                  J'accepte les{' '}
                  <a href="#" className="text-primary-600 hover:text-primary-500 transition-colors">
                    conditions d'utilisation
                  </a>
                  {' '}et la{' '}
                  <a href="#" className="text-primary-600 hover:text-primary-500 transition-colors">
                    politique de confidentialité
                  </a>
                </Label>
              </div>

              <Button className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg">
                Créer mon compte
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              Déjà membre ?{' '}
              <a href="#" className="font-medium text-primary-600 hover:text-primary-500 transition-colors">
                Connectez-vous
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}