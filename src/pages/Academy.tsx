import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Users, Trophy, Heart, Mail, ArrowRight } from 'lucide-react';

// Import the academy images
import academyImage1 from '@/assets/Academy_Image_1.jpg';
import academyImage2 from '@/assets/Academy_Image_2.jpg';
import academyImage3 from '@/assets/Academy_Image_3.jpg';
import actionImage1 from '@/assets/Action_Image_1.jpg';

const Academy = () => {
  const { language } = useLanguage();

  const academyContent = {
    fr: {
      title: "Académie AS Monaco Football Féminin",
      subtitle: "Développer les Stars de Demain",
      description: "À AS Monaco Football Féminin, nous croyons que les grandes joueuses ne naissent pas seulement — elles sont cultivées. Notre Académie est construite pour inspirer et développer les filles des groupes d'âge les plus jeunes jusqu'à l'équipe senior, dans un environnement favorable et axé sur les valeurs, enraciné dans le respect, l'ambition et l'esprit d'équipe.",
      pathway: "Notre Parcours: De la Base à la Grandeur",
      whyChoose: "Pourquoi choisir ASMFF?",
      readyToJoin: "Prête à rejoindre l'Académie?",
      joinText: "Si vous êtes une fille âgée de 6 à 18 ans et que vous aimez le football, nous voulons avoir de vos nouvelles!",
      contactForm: "Commencez votre voyage avec AS Monaco Football Féminin. Construisons ensemble l'avenir du football féminin.",
      name: "Nom",
      email: "Email", 
      birthDate: "Date de naissance",
      currentClub: "Club ou École actuel",
      message: "Message (optionnel)",
      submit: "Envoyer"
    },
    en: {
      title: "AS Monaco Football Féminin Academy",
      subtitle: "Developing Tomorrow's Stars",
      description: "At AS Monaco Football Féminin, we believe great players aren't just born — they're nurtured. Our Academy is built to inspire and develop girls from the earliest age groups through to the senior squad, in a supportive, values-driven environment rooted in respect, ambition, and teamwork.",
      pathway: "Our Pathway: From Grassroots to Greatness",
      whyChoose: "Why Choose ASMFF?",
      readyToJoin: "Ready to Join the Academy?",
      joinText: "If you're a girl aged 6–18 and love football, we want to hear from you!",
      contactForm: "Start your journey with AS Monaco Football Féminin. Let's build the future of women's football — together.",
      name: "Name",
      email: "Email",
      birthDate: "Date of Birth", 
      currentClub: "Current Club or School",
      message: "Message (optional)",
      submit: "Submit"
    }
  };

  const content = academyContent[language];

  const pathwayStages = [
    {
      title: language === 'fr' ? 'École de Foot (U6 – U11)' : 'École de Foot (U6 – U11)',
      description: language === 'fr' 
        ? 'Le voyage commence par le plaisir et les fondamentaux. Nos plus jeunes joueuses développent leurs compétences à travers des jeux à effectifs réduits, des tournois et des plateaux régionaux axés sur la joie, le mouvement et l\'esprit d\'équipe.'
        : 'The journey begins with fun and fundamentals. Our youngest players build their skills through small-sided games, tournaments, and regional plateaus focused on joy, movement, and team spirit.',
      icon: Heart,
      color: 'bg-monaco-yellow text-black',
      image: academyImage1
    },
    {
      title: language === 'fr' ? 'Pré-Académie (U12 – U15)' : 'Pre-Academy (U12 – U15)',
      description: language === 'fr'
        ? 'Alors que les joueuses grandissent, l\'accent aussi. Ces années clés portent sur la conscience tactique, la croissance technique et le développement physique pour des niveaux de jeu plus élevés.'
        : 'As players grow, so does the focus. These key years are about tactical awareness, technical growth, and physical development for higher levels of play.',
      icon: Users,
      color: 'bg-monaco-yellow text-black',
      image: academyImage2
    },
    {
      title: language === 'fr' ? 'Équipes Jeunes (U15 – U18)' : 'Youth Teams (U15 – U18)',
      description: language === 'fr'
        ? 'Où le talent rencontre la compétition. Nos équipes U15 et U18 participent aux ligues de district et régionales, construisant l\'expérience de match, la résilience mentale et le leadership.'
        : 'Where talent meets competition. Our U15 and U18 squads compete in district and regional leagues, building match experience, mental resilience, and leadership.',
      icon: Trophy,
      color: 'bg-primary',
      image: academyImage3
    },
    {
      title: language === 'fr' ? 'Transition Senior (District & R1)' : 'Senior Transition (District & R1)',
      description: language === 'fr'
        ? 'Notre équipe de Régionale 1 est le tremplin pour les diplômées de l\'Académie vers le football féminin de haut niveau. C\'est là que les rêves se transforment en buts — littéralement.'
        : 'Our Régionale 1 team is the launchpad for Academy graduates into top-level women\'s football. This is where dreams turn into goals — literally.',
      icon: GraduationCap,
      color: 'bg-monaco-red',
      image: actionImage1
    }
  ];

  const benefits = [
    language === 'fr' ? 'Une fière histoire de développement des jeunes et de succès régional' : 'A proud history of youth development and regional success',
    language === 'fr' ? 'Un parcours solide de la base au niveau senior' : 'A strong pathway from grassroots to senior level',
    language === 'fr' ? 'Une culture de club basée sur la croissance personnelle et l\'excellence sportive' : 'A club culture built on personal growth and sporting excellence',
    language === 'fr' ? 'Un environnement accueillant pour les filles de tous niveaux et horizons' : 'A welcoming environment for girls of all levels and backgrounds'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Fully Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-monaco-red spacing-mobile">
        <div className="container-mobile text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-in mobile-text-shadow">
            {content.title}
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white/90 mb-4 sm:mb-6 animate-fade-in">
            {content.subtitle}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-4xl mx-auto animate-fade-in leading-relaxed">
            {content.description}
          </p>
        </div>
      </section>

      {/* Pathway Section - Responsive Grid */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="px-[50px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-8 sm:mb-12 animate-fade-in">
            {content.pathway}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            {pathwayStages.map((stage, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Mobile Layout - Stacked */}
                <div className="block lg:hidden bg-white rounded-lg shadow-lg overflow-hidden">
                  {/* Image */}
                  <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img 
                      src={stage.image} 
                      alt={stage.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 sm:p-6 bg-monaco-red">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 ${stage.color} rounded-full flex items-center justify-center shadow-glow`}>
                        <stage.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <h3 className="font-bold text-white" style={{ fontSize: 'clamp(16px, 4vw, 24px)' }}>{stage.title}</h3>
                    </div>
                    
                    <p className="text-white/90 leading-relaxed font-bold" style={{ fontSize: 'clamp(14px, 3.5vw, 18px)' }}>
                      {stage.description}
                    </p>
                    
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <div className="text-white/70" style={{ fontSize: 'clamp(10px, 2.5vw, 14px)' }}>
                        AS Monaco FF
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout - Side by Side */}
                <div className="hidden lg:flex h-[400px] xl:h-[500px]">
                  {/* Left Panel - Red Background with Content */}
                  <div className="flex-1 bg-monaco-red p-6 xl:p-8 flex flex-col justify-between">
                    {/* Logo and Title */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-14 h-14 xl:w-16 xl:h-16 ${stage.color} rounded-full flex items-center justify-center shadow-glow`}>
                          <stage.icon className="w-7 h-7 xl:w-8 xl:h-8 text-white" />
                        </div>
                        <h3 className="text-xl xl:text-2xl font-bold text-white">{stage.title}</h3>
                      </div>
                      
                      {/* Description */}
                      <p className="text-white/90 leading-relaxed text-base xl:text-lg">
                        {stage.description}
                      </p>
                    </div>
                    
                    {/* Sponsor/Logo Area */}
                    <div className="mt-auto">
                      <div className="text-white/70 text-sm">
                        AS Monaco FF
                      </div>
                    </div>
                  </div>

                  {/* Right Panel - Image */}
                  <div className="flex-[2] bg-gray-300 overflow-hidden">
                    <img 
                      src={stage.image} 
                      alt={stage.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ASMFF - Responsive */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container-mobile">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-8 sm:mb-12 animate-fade-in">
            {content.whyChoose}
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-monaco-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form - Responsive */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container-mobile">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              {content.readyToJoin}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4">
              {content.joinText}
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6 sm:mb-8">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">contact@asm-ff.com</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              {content.contactForm}
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 animate-fade-in">
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {content.name} *
                  </label>
                  <Input 
                    placeholder={content.name} 
                    required 
                    className="input-mobile"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {content.email} *
                  </label>
                  <Input 
                    type="email" 
                    placeholder={content.email} 
                    required 
                    className="input-mobile"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {content.birthDate} *
                  </label>
                  <Input 
                    type="date" 
                    required 
                    className="input-mobile"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {content.currentClub}
                  </label>
                  <Input 
                    placeholder={content.currentClub} 
                    className="input-mobile"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {content.message}
                </label>
                <Textarea 
                  placeholder={content.message}
                  rows={4}
                  className="input-mobile"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="btn-mobile w-full bg-monaco-red hover:bg-monaco-red/90 text-white group shadow-monaco hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {content.submit}
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action - Responsive */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-monaco-red">
        <div className="container-mobile text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 mobile-text-shadow">
              {language === 'fr' ? 'L\'Avenir Commence Ici' : 'The Future Starts Here'}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8">
              {language === 'fr' 
                ? 'Rejoignez une académie qui croit en votre potentiel et vous aide à le réaliser.'
                : 'Join an academy that believes in your potential and helps you achieve it.'
              }
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              className="btn-mobile group shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {language === 'fr' ? 'Commencer le Voyage' : 'Start the Journey'}
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academy;