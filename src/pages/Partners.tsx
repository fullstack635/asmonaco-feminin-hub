import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Handshake, Heart, Star, ArrowRight } from 'lucide-react';

const Partners = () => {
  const { language } = useLanguage();

  const partnersContent = {
    fr: {
      title: "Partenaires & Sponsors",
      subtitle: "Merci à nos Partenaires & Sponsors. Nous exprimons nos sincères remerciements à tous nos partenaires et sponsors pour leur soutien continu. Votre engagement joue un rôle vital en nous aidant à développer le football féminin à Monaco et à autonomiser la prochaine génération de joueuses. Ensemble, nous construisons quelque chose de spécial — à la fois sur et en dehors du terrain.",
      mainPartners: "Partenaires Principaux",
      officialSponsors: "Sponsors Officiels",
      supportingPartners: "Partenaires de Soutien",
      becomePartner: "Devenir Partenaire",
      partnerWithUs: "Partenaire avec Nous",
      partnerDescription: "Rejoignez notre famille de partenaires et soutenez l'avenir du football féminin à Monaco."
    },
    en: {
      title: "Partners & Sponsors", 
      subtitle: "Thank You to Our Partners & Sponsors. We extend our sincere thanks to all of our partners and sponsors for their continued support. Your commitment plays a vital role in helping us grow women's football in Monaco and empower the next generation of players. Together, we are building something special — both on and off the pitch.",
      mainPartners: "Main Partners",
      officialSponsors: "Official Sponsors", 
      supportingPartners: "Supporting Partners",
      becomePartner: "Become a Partner",
      partnerWithUs: "Partner with Us",
      partnerDescription: "Join our family of partners and support the future of women's football in Monaco."
    }
  };

  const content = partnersContent[language];

  // Sample partner data
  const mainPartners = [
    { name: "AS Monaco FC", type: "Club Principal", logo: "🏰" },
    { name: "Principauté de Monaco", type: "Soutien Institutionnel", logo: "🇲🇨" },
    { name: "Fédération Française de Football", type: "Fédération", logo: "⚽" }
  ];

  const officialSponsors = [
    { name: "Monaco Telecom", type: "Télécommunications", logo: "📱" },
    { name: "Société des Bains de Mer", type: "Hospitalité", logo: "🏨" },
    { name: "BMW Monaco", type: "Automobile", logo: "🚗" }
  ];

  const supportingPartners = [
    { name: "Lycée Albert 1er", type: "Éducation", logo: "🎓" },
    { name: "Centre Cardio-Thoracique de Monaco", type: "Santé", logo: "🏥" },
    { name: "Monaco Info", type: "Médias", logo: "📺" },
    { name: "Café de Paris", type: "Restauration", logo: "☕" }
  ];

  const PartnerSection = ({ title, partners }: { title: string, partners: any[] }) => (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-foreground text-center mb-8 animate-fade-in">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner, index) => (
          <Card 
            key={index}
            className="p-6 text-center hover:shadow-monaco transition-all duration-300 hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-4xl mb-4">{partner.logo}</div>
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            {content.title}
          </h1>
          <p className="text-lg text-white/90 max-w-4xl mx-auto animate-fade-in leading-relaxed">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Partners Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <PartnerSection title={content.mainPartners} partners={mainPartners} />
          <PartnerSection title={content.officialSponsors} partners={officialSponsors} />
          <PartnerSection title={content.supportingPartners} partners={supportingPartners} />
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 animate-fade-in">
            {language === 'fr' ? 'Avantages du Partenariat' : 'Partnership Benefits'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center hover:shadow-monaco transition-all duration-300 animate-fade-in">
              <div className="w-16 h-16 bg-monaco-red rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
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
              <h3 className="text-xl font-bold text-foreground mb-3">
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
              <h3 className="text-xl font-bold text-foreground mb-3">
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
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6">
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