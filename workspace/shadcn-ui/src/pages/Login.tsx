import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from '../lib/translations';
import LanguageSelector from '../components/LanguageSelector';
import { Heart, Stethoscope, User } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState('en');
  const { login } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation(language);

  const handleLogin = async (role: 'doctor' | 'patient') => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const success = await login(email, password, role);
      if (success) {
        navigate(role === 'doctor' ? '/doctor-dashboard' : '/patient-dashboard');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
        </div>
        
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Heart className="h-12 w-12 text-green-600" />
            </div>
            <CardTitle className="text-2xl font-bold">{t('appTitle')}</CardTitle>
            <CardDescription>{t('appDescription')}</CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="doctor" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="doctor" className="gap-2">
                  <Stethoscope className="h-4 w-4" />
                  {t('doctor')}
                </TabsTrigger>
                <TabsTrigger value="patient" className="gap-2">
                  <User className="h-4 w-4" />
                  {t('patient')}
                </TabsTrigger>
              </TabsList>
              
              <div className="mt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">{t('email')}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="doctor@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">{t('password')}</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                  />
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
              </div>

              <TabsContent value="doctor" className="mt-6">
                <Button 
                  className="w-full" 
                  onClick={() => handleLogin('doctor')}
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : `${t('loginButton')} as ${t('doctor')}`}
                </Button>
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Demo: doctor@ayurveda.com / password123
                </p>
              </TabsContent>
              
              <TabsContent value="patient" className="mt-6">
                <Button 
                  className="w-full" 
                  onClick={() => handleLogin('patient')}
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : `${t('loginButton')} as ${t('patient')}`}
                </Button>
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Demo: patient@ayurveda.com / password123
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;