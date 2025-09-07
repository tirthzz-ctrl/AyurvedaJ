import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '../lib/translations';
import LanguageSelector from '../components/LanguageSelector';
import { Heart, Users, Database, FileText, Stethoscope, User, ArrowRight, CheckCircle } from 'lucide-react';

const Index: React.FC = () => {
  const [language, setLanguage] = useState('en');
  const { t } = useTranslation(language);

  const features = [
    {
      icon: Database,
      title: 'Comprehensive Food Database',
      description: '8000+ foods with detailed Ayurvedic properties including Rasa, Virya, and Vipaka',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Patient Management',
      description: 'Complete patient profiles with health parameters and constitution analysis',
      color: 'text-green-600'
    },
    {
      icon: FileText,
      title: 'Automated Diet Charts',
      description: 'AI-powered diet chart generation based on individual constitution and health needs',
      color: 'text-purple-600'
    },
    {
      icon: Heart,
      title: 'Holistic Wellness',
      description: 'Integration of traditional Ayurvedic principles with modern nutritional science',
      color: 'text-red-600'
    }
  ];

  const benefits = [
    'Personalized diet plans based on Ayurvedic constitution',
    'Comprehensive nutritional analysis with Ayurvedic properties',
    'Multi-language support for global accessibility',
    'Secure patient data management with HIPAA compliance',
    'Mobile-responsive design for on-the-go access',
    'Downloadable diet charts and reports'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">
                {t('appTitle')}
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <LanguageSelector 
                currentLanguage={language} 
                onLanguageChange={setLanguage} 
              />
              <Link to="/contact">
                <Button variant="ghost">Contact Us</Button>
              </Link>
              <Link to="/login">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              {t('appTitle')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-in fade-in delay-300 duration-700">
              {t('appDescription')} - Bridging ancient Ayurvedic wisdom with modern technology for personalized nutrition and wellness.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-in fade-in delay-500 duration-700">
              <Link to="/login">
                <Button size="lg" className="gap-2 text-lg px-8 py-6">
                  <Stethoscope className="h-5 w-5" />
                  Login as Doctor
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6">
                  <User className="h-5 w-5" />
                  Login as Patient
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Ayurvedic Practice
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage patients and create personalized Ayurvedic diet plans
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <feature.icon className={`h-12 w-12 mx-auto mb-4 ${feature.color}`} />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Platform?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive Ayurvedic Diet Management System combines traditional wisdom with modern technology to deliver personalized healthcare solutions.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 shadow-xl">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌿</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ancient Wisdom, Modern Technology
                  </h3>
                  <p className="text-gray-600">
                    Experience the perfect blend of 5000-year-old Ayurvedic principles with cutting-edge AI technology for optimal health outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of Ayurvedic practitioners and patients who trust our platform for personalized diet management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 py-6">
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-green-600">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-green-400" />
                <span className="text-xl font-bold">{t('appTitle')}</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Empowering healthcare professionals with comprehensive Ayurvedic diet management tools for better patient outcomes.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/login" className="hover:text-white">Login</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">API Reference</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Ayurvedic Diet Management System. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* JotForm Chatbot Integration */}
      <div id="jotform-chatbot">
        <script 
          src="https://cdn.jotfor.ms/s/umd/latest/for-chatbot.js"
          data-jf-chatbot-id="019918f3c42c79b69bdbff676e0cda51d706"
          data-jf-chatbot-position="bottom-right"
          data-jf-chatbot-theme="light"
        ></script>
      </div>
    </div>
  );
};

export default Index;