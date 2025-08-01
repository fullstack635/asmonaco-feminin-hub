import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Handshake, Heart, Star, ArrowRight, Building2, Flag, Globe, Smartphone, Hotel, Car, GraduationCap, Hospital, Tv, Coffee, Trophy } from 'lucide-react';

// Import partner logos
import mlnLogo from '@/assets/partner logo/MLN.png';
import marriottLogo from '@/assets/partner logo/Marriott_mc_logo_L.png';
import pvmLogo from '@/assets/partner logo/PVM-1.jpg';
import cismLogo from '@/assets/partner logo/Logo-CISM.png';
import kromykLogo from '@/assets/partner logo/Icon-Kromyk@.png';
import fidinamLogo from '@/assets/partner logo/fidinam_logo1.svg';
import alphabetLogo from '@/assets/partner logo/Alphabet.png';

const Partners = () => {
  const { language } = useLanguage();

  const partnersContent = {
    fr: {
      title: "Partenaires & Sponsors",
      subtitle: "Merci à nos Partenaires & Sponsors",
      tagline: "Ensemble, nous construisons quelque chose de spécial",
      values: [
        {
          icon: <Handshake className="w-8 h-8" />,
          title: "Soutien Continu",
          description: "Nous exprimons nos sincères remerciements pour votre engagement"
        },
        {
          icon: <Globe className="w-8 h-8" />,
          title: "Développement du Football",
          description: "Aider à développer le football féminin à Monaco"
        },
        {
          icon: <Star className="w-8 h-8" />,
          title: "Prochaine Génération",
          description: "Autonomiser la prochaine génération de joueuses"
        },
        {
          icon: <Trophy className="w-8 h-8" />,
          title: "Excellence",
          description: "À la fois sur et en dehors du terrain"
        }
      ],
      impactStatement: "Votre engagement joue un rôle vital dans notre succès",
      mainPartners: "Partenaires Principaux",
      officialSponsors: "Sponsors Officiels",
      supportingPartners: "Partenaires de Soutien",
      becomePartner: "Devenir Partenaire",
      partnerWithUs: "Partenaire avec Nous",
      partnerDescription: "Rejoignez notre famille de partenaires et soutenez l'avenir du football féminin à Monaco."
    },
    en: {
      title: "Partners & Sponsors", 
      subtitle: "Thank You to Our Partners & Sponsors",
      tagline: "Together, we are building something special",
      values: [
        {
          icon: <Handshake className="w-8 h-8" />,
          title: "Continued Support",
          description: "We extend our sincere thanks for your commitment"
        },
        {
          icon: <Globe className="w-8 h-8" />,
          title: "Growing Football",
          description: "Helping us grow women's football in Monaco"
        },
        {
          icon: <Star className="w-8 h-8" />,
          title: "Next Generation",
          description: "Empowering the next generation of players"
        },
        {
          icon: <Trophy className="w-8 h-8" />,
          title: "Excellence",
          description: "Both on and off the pitch"
        }
      ],
      impactStatement: "Your commitment plays a vital role in our success",
      mainPartners: "Main Partners",
      officialSponsors: "Official Sponsors", 
      supportingPartners: "Supporting Partners",
      becomePartner: "Become a Partner",
      partnerWithUs: "Partner with Us",
      partnerDescription: "Join our family of partners and support the future of women's football in Monaco."
    }
  };

  const content = partnersContent[language];

  // Updated partner data with real logos
  const mainPartners = [
    { 
      name: "Alphabet", 
      type: "Technologie & Innovation", 
      logo: alphabetLogo 
    },
    { 
      name: "CISM", 
      type: "Sport Militaire", 
      logo: cismLogo 
    },
    { 
      name: "Fidinam", 
      type: "Services Financiers", 
      logo: fidinamLogo 
    },
    { 
      name: "Kromyk", 
      type: "Technologie", 
      logo: kromykLogo 
    },
    { 
      name: "Marriott", 
      type: "Hospitalité & Hébergement", 
      logo: marriottLogo 
    },
    { 
      name: "MLN", 
      type: "Partenaire Principal", 
      logo: mlnLogo 
    },
    { 
      name: "PVM", 
      type: "Partenaire Stratégique", 
      logo: pvmLogo 
    }
  ];

  const officialSponsors = [
    { name: "Monaco Telecom", type: "Télécommunications", logo: <Smartphone className="w-12 h-12 text-black-500" /> },
    { name: "Société des Bains de Mer", type: "Hospitalité", logo: <Hotel className="w-12 h-12 text-black-600" /> },
    { name: "BMW Monaco", type: "Automobile", logo: <Car className="w-12 h-12 text-gray-700" /> }
  ];

  const supportingPartners = [
    { name: "Lycée Albert 1er", type: "Éducation", logo: <GraduationCap className="w-12 h-12 text-black-600" /> },
    { name: "Centre Cardio-Thoracique de Monaco", type: "Santé", logo: <Hospital className="w-12 h-12 text-black-500" /> },
    { name: "Monaco Info", type: "Médias", logo: <Tv className="w-12 h-12 text-black-700" /> },
    { name: "Café de Paris", type: "Restauration", logo: <Coffee className="w-12 h-12 text-black-600" /> }
  ];

  const PartnerSection = ({ title, partners }: { title: string, partners: any[] }) => (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-foreground text-center mb-8 animate-fade-in">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {partners.map((partner, index) => (
          <Card 
            key={index}
            className="p-6 text-center hover:shadow-monaco transition-all duration-300 hover:scale-105 animate-fade-in bg-white"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-center items-center mb-4 h-20">
              {typeof partner.logo === 'string' ? (
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="max-h-16 max-w-full object-contain"
                />
              ) : (
                partner.logo
              )}
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {partner.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {partner.type}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-monaco-red">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat-extrabold text-white mb-4 animate-fade-in">
            {content.title}
          </h1>
          <p className="text-xl md:text-2xl font-cinzel-decorative text-white/95 mb-2 animate-fade-in">
            {content.subtitle}
          </p>
          <p className="text-lg text-white/90 mb-8 animate-fade-in">
            {content.tagline}
          </p>
          
          {/* Decorative Line */}
          <div className="w-24 h-1 bg-monaco-yellow mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-cinzel-decorative-bold text-foreground mb-4">
              {content.impactStatement}
            </h2>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {content.values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-cinzel-decorative-bold text-foreground mb-3 group-hover:text-monaco-red transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Sections */}
      <section className="py-16">
        <div className="container mx-auto px-2 max-w-6xl font-cinzel-decorative">
          <PartnerSection title={content.mainPartners} partners={mainPartners} />
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-2">
          <h2 className="text-3xl font-cinzel-decorative-bold text-foreground text-center mb-12 animate-fade-in">
            {language === 'fr' ? 'Avantages du Partenariat' : 'Partnership Benefits'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center hover:shadow-monaco transition-all duration-300 animate-fade-in">
              <div className="w-16 h-16 bg-monaco-red rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-cinzel-decorative">
                {language === 'fr' ? 'Réseau d\'Excellence' : 'Excellence Network'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'fr' 
                  ? 'Rejoignez un réseau de partenaires prestigieux dans la Principauté'
                  : 'Join a network of prestigious partners in the Principality'
                }
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-monaco transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-monaco-red rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-cinzel-decorative">
                {language === 'fr' ? 'Impact Communautaire' : 'Community Impact'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'fr' 
                  ? 'Soutenez le développement du sport féminin et inspirez la prochaine génération'
                  : 'Support women\'s sports development and inspire the next generation'
                }
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-monaco transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-monaco-red rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-cinzel-decorative">
                {language === 'fr' ? 'Visibilité de Marque' : 'Brand Visibility'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'fr' 
                  ? 'Profitez d\'une exposition unique dans le football féminin monégasque'
                  : 'Enjoy unique exposure in Monaco women\'s football'
                }
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-2 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-cinzel-decorative-bold text-foreground mb-6">
              {content.partnerWithUs}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {content.partnerDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="group shadow-monaco hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {content.becomePartner}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="group hover:scale-105 transition-all duration-300"
              >
                {language === 'fr' ? 'Nous Contacter' : 'Contact Us'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;