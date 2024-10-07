import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, AArrowDownIcon, Lock } from 'lucide-react';

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginPage(): JSX.Element {
  const [formData, setFormData] = React.useState<LoginFormData>({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Login attempt with:', formData);

    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative py-12 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gray-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='notePattern' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='50' cy='50' r='1' fill='%236366f1' opacity='0.1'/%3E%3Ccircle cx='0' cy='0' r='1' fill='%236366f1' opacity='0.1'/%3E%3Ccircle cx='100' cy='0' r='1' fill='%236366f1' opacity='0.1'/%3E%3Ccircle cx='0' cy='100' r='1' fill='%236366f1' opacity='0.1'/%3E%3Ccircle cx='100' cy='100' r='1' fill='%236366f1' opacity='0.1'/%3E%3Cline x1='0' y1='25' x2='100' y2='25' stroke='%236366f1' stroke-width='0.5' opacity='0.05'/%3E%3Cline x1='0' y1='75' x2='100' y2='75' stroke='%236366f1' stroke-width='0.5' opacity='0.05'/%3E%3Cpath d='M20 40 L22 38 L24 40 L22 42 Z' fill='%236366f1' opacity='0.1'/%3E%3Cpath d='M80 60 L82 58 L84 60 L82 62 Z' fill='%236366f1' opacity='0.1'/%3E%3Ccircle cx='50' cy='0' r='0.5' fill='%236366f1' opacity='0.1'/%3E%3Ccircle cx='50' cy='100' r='0.5' fill='%236366f1' opacity='0.1'/%3E%3Ccircle cx='0' cy='50' r='0.5' fill='%236366f1' opacity='0.1'/%3E%3Ccircle cx='100' cy='50' r='0.5' fill='%236366f1' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23notePattern)'/%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px'
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-transparent"></div>
      </div>

      <div className="relative sm:mx-auto sm:w-full sm:max-w-md">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg transform transition-transform hover:scale-110">
          <Lock className="w-8 h-8 text-white" />
        </div>

        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-2">
          Connexion à <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">NG-NOTE</span>
        </h2>
        <p className="text-center text-lg text-gray-600 mb-8">
          Retrouvez vos notes et continuez à créer
        </p>
      </div>

      <div className="relative sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="border-0 shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-primary-100 backdrop-blur-sm bg-white/90">
          <CardContent className="relative pt-6">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Button variant="outline" className="w-full group transition-all duration-300 hover:border-primary-400 hover:bg-primary-50/50">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="w-5 h-5 mr-2 transition-transform group-hover:scale-110">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>                Google
              </Button>
              <Button variant="outline" className="w-full group transition-all duration-300 hover:border-primary-400 hover:bg-primary-50/50">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30" className="w-5 h-5 mr-2 transition-transform group-hover:scale-110">
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>

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

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2 group">
                <Label htmlFor="email" className="transition-colors group-focus-within:text-primary-500">
                  Adresse e-mail
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="transition-all duration-300 focus:border-primary-400 focus:ring-primary-400 bg-white/80"
                />
              </div>

              <div className="space-y-2 group">
                <Label htmlFor="password" className="transition-colors group-focus-within:text-primary-500">
                  Mot de passe
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="transition-all duration-300 focus:border-primary-400 focus:ring-primary-400 bg-white/80"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50" />
                  <span className="ml-2 text-sm text-gray-600">Se souvenir de moi</span>
                </label>
                <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-500 transition-colors">
                  Mot de passe oublié ?
                </a>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Connexion...' : 'Se connecter'}
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              Pas encore membre ?{' '}
              <a href="#" className="font-medium text-primary-600 hover:text-primary-500 transition-colors">
                Créez un compte
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}