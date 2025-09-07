import React, { useState } from 'react';
// Note: External component imports have been removed and replaced with self-contained versions below.
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Leaf } from 'lucide-react';

// --- Self-Contained Dependencies ---

// 1. Mock UI Components (Styled for a more appealing look)
const Card = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => <div className={`bg-white border border-stone-200 rounded-xl shadow-sm transition-shadow hover:shadow-md ${className}`}>{children}</div>;
const CardHeader = ({ children }: { children: React.ReactNode }) => <div className="p-6 border-b border-stone-200">{children}</div>;
const CardTitle = ({ children }: { children: React.ReactNode }) => <h3 className="text-xl font-semibold text-stone-800">{children}</h3>;
const CardDescription = ({ children }: { children: React.ReactNode }) => <p className="text-sm text-stone-500 mt-1">{children}</p>;
const CardContent = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => <div className={`p-6 ${className}`}>{children}</div>;

const Button = ({ children, variant = 'default', size = 'default', className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string, size?: string }) => (
    <button
        className={`inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none
        ${variant === 'outline' ? 'border border-stone-300 bg-transparent hover:bg-stone-100 text-stone-700 focus-visible:ring-emerald-500' : 'bg-emerald-700 text-white hover:bg-emerald-800 focus-visible:ring-emerald-500'}
        ${size === 'sm' ? 'px-3 py-1.5' : 'px-4 py-2'}
        ${className}`}
        {...props}
    >
        {children}
    </button>
);

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => <input className="w-full px-3 py-2 border border-stone-300 rounded-lg bg-stone-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow" {...props} />;
const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => <textarea className="w-full px-3 py-2 border border-stone-300 rounded-lg bg-stone-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow" {...props}></textarea>;
const Label = (props: React.LabelHTMLAttributes<HTMLLabelElement>) => <label className="block text-sm font-medium text-stone-600 mb-1.5" {...props} />;

// 2. Self-contained Navbar Component
const Navbar: React.FC = () => (
  <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-stone-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Leaf className="h-7 w-7 text-emerald-700" />
          <span className="font-bold text-xl text-stone-800">AyurDiet</span>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-1">
            <a href="#" className="text-stone-600 hover:bg-stone-100 px-3 py-2 rounded-md text-sm font-medium transition-colors">Dashboard</a>
            <a href="#" className="text-stone-600 hover:bg-stone-100 px-3 py-2 rounded-md text-sm font-medium transition-colors">Patients</a>
            <a href="#" className="bg-emerald-100 text-emerald-800 font-semibold px-3 py-2 rounded-md text-sm transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

// 3. Self-contained Translation Hook
const translations = {
  en: { contactUs: 'Contact Us' },
  es: { contactUs: 'Contáctenos' }
};
const useTranslation = (language: 'en' | 'es') => ({ t: (key: keyof typeof translations['en']) => translations[language][key] || key });

// 4. Self-contained Footer Component
const Footer: React.FC = () => (
    <footer className="bg-stone-100 border-t border-stone-200 mt-16">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-sm text-stone-500">
            <p>&copy; {new Date().getFullYear()} AyurDiet. All Rights Reserved.</p>
            <p className="mt-1">Your journey to holistic wellness starts here.</p>
        </div>
    </footer>
);

// --- Main ContactUs Component ---

const App: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const { t } = useTranslation(language);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    // In a real app, use a custom modal instead of alert.
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const teamMembers = [
    {
      name: 'TIRTHARAJ DHAR',
      role: 'Lead Backend Engineer',
      email: 't.dhar@ayurdiet.dev',
      phone: '+91 98765 11111',
      image: 'https://placehold.co/200x200/2c7a7b/FFFFFF?text=TD'
    },
    {
      name: 'SOURYARAJ SINGHA ROY',
      role: 'Senior Frontend Developer',
      email: 's.roy@ayurdiet.dev',
      phone: '+91 98765 22222',
      image: 'https://placehold.co/200x200/38a169/FFFFFF?text=SR'
    },
    {
      name: 'RUDRANGSHI ROY',
      role: 'AI & Machine Learning Specialist',
      email: 'r.roy@ayurdiet.dev',
      phone: '+91 98765 33333',
      image: 'https://placehold.co/200x200/dd6b20/FFFFFF?text=RR'
    },
    {
      name: 'PARAM BANERJEE',
      role: 'DevOps & Cloud Architect',
      email: 'p.banerjee@ayurdiet.dev',
      phone: '+91 98765 44444',
      image: 'https://placehold.co/200x200/4a5568/FFFFFF?text=PB'
    },
     {
      name: 'RISHIN KUNDU',
      role: 'Full-Stack Developer',
      email: 'r.kundu@ayurdiet.dev',
      phone: '+91 98765 55555',
      image: 'https://placehold.co/200x200/805ad5/FFFFFF?text=RK'
    },
    {
      name: 'ISHITA ROY',
      role: 'Lead UI/UX Designer',
      email: 'i.roy@ayurdiet.dev',
      phone: '+91 98765 66666',
      image: 'https://placehold.co/200x200/d53f8c/FFFFFF?text=IR'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-emerald-800 tracking-tight mb-4 animate-fade-in-down">
            {t('contactUs')}
          </h1>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto animate-fade-in-up">
            Get in touch with our team of Ayurvedic experts and developers. We're here to help you on your wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Have questions about our Ayurvedic Diet Management system? We'd love to hear from you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><Label htmlFor="name">Full Name</Label><Input id="name" name="name" value={formData.name} onChange={handleInputChange} required /></div>
                    <div><Label htmlFor="email">Email Address</Label><Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required /></div>
                  </div>
                  <div><Label htmlFor="subject">Subject</Label><Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required /></div>
                  <div><Label htmlFor="message">Message</Label><Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleInputChange} required /></div>
                  <Button type="submit" className="w-full gap-2" disabled={isSubmitting}><Send className="h-4 w-4" />{isSubmitting ? 'Sending...' : 'Send Message'}</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in-left">
            <Card>
              <CardHeader><CardTitle>Get in Touch</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4"><Mail className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" /><div><p className="font-semibold text-stone-700">Email</p><p className="text-stone-600">support@ayurvedadiet.com</p></div></div>
                <div className="flex items-start gap-4"><Phone className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" /><div><p className="font-semibold text-stone-700">Phone</p><p className="text-stone-600">+91 98765 43200</p></div></div>
                <div className="flex items-start gap-4"><MapPin className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" /><div><p className="font-semibold text-stone-700">Address</p><p className="text-stone-600 leading-relaxed">123 Wellness Street, Ayurveda District, Mumbai 400001, India</p></div></div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Follow Us</CardTitle></CardHeader>
              <CardContent><div className="flex flex-wrap gap-2"><Button variant="outline" size="sm" className="gap-2"><Github className="h-4 w-4" />GitHub</Button><Button variant="outline" size="sm" className="gap-2"><Linkedin className="h-4 w-4" />LinkedIn</Button><Button variant="outline" size="sm" className="gap-2"><Twitter className="h-4 w-4" />Twitter</Button></div></CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        {teamMembers.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-stone-800 mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center group overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <CardContent className="p-6">
                     <img src={member.image} alt={`Photo of ${member.name}`} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg transform group-hover:scale-105 transition-transform duration-300" />
                    <h3 className="font-semibold text-lg text-stone-800 mb-1">{member.name}</h3>
                    <p className="text-emerald-700 text-sm font-medium mb-4">{member.role}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center gap-2 text-stone-600"><Mail className="h-4 w-4 text-stone-400" /><span>{member.email}</span></div>
                      <div className="flex items-center justify-center gap-2 text-stone-600"><Phone className="h-4 w-4 text-stone-400" /><span>{member.phone}</span></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* About the Project */}
        <Card className="animate-fade-in-up">
          <CardHeader><CardTitle>About Our Ayurvedic Diet Management System</CardTitle></CardHeader>
          <CardContent>
            <div className="prose-sm sm:prose lg:prose-lg max-w-none text-stone-600">
              <p>Our Ayurvedic Diet Management System is a comprehensive platform designed to bridge the gap between traditional Ayurvedic wisdom and modern nutritional science. We combine ancient principles of Ayurveda with cutting-edge technology to provide personalized diet recommendations.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div><h4 className="font-semibold text-stone-800 mb-2">Our Mission</h4><p>To make Ayurvedic dietary principles accessible to everyone through technology, helping people achieve optimal health through personalized nutrition based on their unique constitution.</p></div>
                <div><h4 className="font-semibold text-stone-800 mb-2">Our Vision</h4><p>To become the leading platform for Ayurvedic diet management globally, empowering both practitioners and patients with tools for holistic wellness.</p></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />

      {/* JotForm Chatbot Integration - This can be added back if needed */}
    </div>
  );
};

export default App;

