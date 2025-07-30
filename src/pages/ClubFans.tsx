import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Instagram, Mail } from 'lucide-react';

const ClubFans = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const content = {
    fr: {
      title: "Supporters",
      subtitle: "❤️🤍 Restez Connectés au Cœur d'AS Monaco Football Féminin",
      backButton: "Retour au Club",
      content: `Pour la saison 2025/26, nous voulons rapprocher encore plus nos supporters de l'équipe.

Que vous encouragiez depuis les tribunes du Sud de la France ou que vous nous suiviez de loin, c'est votre chance de faire partie du voyage. Soyez les premiers à connaître les mises à jour des matchs, le contenu exclusif et les moments en coulisses en vous inscrivant à notre newsletter officielle ou en nous suivant sur Instagram.

Nous n'avons peut-être pas encore d'adhésion officielle, mais nous construisons quelque chose de spécial — et vous en faites partie.

Parce que cette saison, chaque supporter compte.
Ensemble, écrivons le prochain chapitre d'AS Monaco Football Féminin.
#UneÉquipeUneAmbition #ASMonacoFF`,
      followUs: "Suivez-nous sur Instagram",
      newsletter: "Inscrivez-vous à notre newsletter"
    },
    en: {
      title: "Fans",
      subtitle: "❤️🤍 Stay Connected to the Heart of AS Monaco Football Féminin",
      backButton: "Back to Club",
      content: `For the 2025/26 season, we want to bring our supporters even closer to the team.

Whether you're cheering from the stands in the South of France or following us from afar, this is your chance to stay part of the journey. Be the first to know about match updates, exclusive content, and behind-the-scenes moments by signing up for our official newsletter or following us on Instagram.

We may not have an official membership yet, but we're building something special — and you're part of it.

Because this season, every supporter counts.
Together, let's write the next chapter of AS Monaco Football Féminin.
#UneÉquipeUneAmbition #ASMonacoFF`,
      followUs: "Follow us on Instagram",
      newsletter: "Sign up for our newsletter"
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative h-[200px] bg-red-600 flex items-center justify-center">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-2">{currentContent.title}</h1>
          <p className="text-lg opacity-90">{currentContent.subtitle}</p>
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-[1200px] mx-auto px-4 pt-8">
        <Button 
          variant="outline" 
          onClick={() => navigate('/club')}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          {currentContent.backButton}
        </Button>
      </div>

      {/* Fans Section */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-2 pt-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              {currentContent.content.split('\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                {currentContent.followUs}
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {currentContent.newsletter}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClubFans; 