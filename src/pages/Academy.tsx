import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Users, Trophy, Heart, Mail, ArrowRight } from 'lucide-react';

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
      color: 'bg-monaco-yellow text-black'
    },
    {
      title: language === 'fr' ? 'Pré-Académie (U12 – U15)' : 'Pre-Academy (U12 – U15)',
      description: language === 'fr'
        ? 'Alors que les joueuses grandissent, l\'accent aussi. Ces années clés portent sur la conscience tactique, la croissance technique et le développement physique pour des niveaux de jeu plus élevés.'
        : 'As players grow, so does the focus. These key years are about tactical awareness, technical growth, and physical development for higher levels of play.',
      icon: Users,
      color: 'bg-monaco-yellow text-black'
    },
    {
      title: language === 'fr' ? 'Équipes Jeunes (U15 – U18)' : 'Youth Teams (U15 – U18)',
      description: language === 'fr'
        ? 'Où le talent rencontre la compétition. Nos équipes U15 et U18 participent aux ligues de district et régionales, construisant l\'expérience de match, la résilience mentale et le leadership.'
        : 'Where talent meets competition. Our U15 and U18 squads compete in district and regional leagues, building match experience, mental resilience, and leadership.',
      icon: Trophy,
      color: 'bg-primary'
    },
    {
      title: language === 'fr' ? 'Transition Senior (District & R1)' : 'Senior Transition (District & R1)',
      description: language === 'fr'
        ? 'Notre équipe de Régionale 1 est le tremplin pour les diplômées de l\'Académie vers le football féminin de haut niveau. C\'est là que les rêves se transforment en buts — littéralement.'
        : 'Our Régionale 1 team is the launchpad for Academy graduates into top-level women\'s football. This is where dreams turn into goals — literally.',
      icon: GraduationCap,
      color: 'bg-monaco-red'
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
      {/* Header */}
      <section className="py-20 bg-monaco-red">
        <div className="container mx-auto px-4 text-center">

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            {content.title}
          </h1>
          <h2 className="text-2xl text-white/90 mb-6 animate-fade-in">
            {content.subtitle}
          </h2>
          <p className="text-lg text-white/90 max-w-4xl mx-auto animate-fade-in leading-relaxed">
            {content.description}
          </p>
        </div>
      </section>

      {/* Pathway Section - Red Bulls Style 2x2 Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 animate-fade-in">
            {content.pathway}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {pathwayStages.map((stage, index) => (
              <div key={index} className="flex h-80 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Left Panel - Red Background with Content */}
                <div className="flex-1 bg-monaco-red p-8 flex flex-col justify-between">
                  {/* Logo and Title */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 ${stage.color} rounded-full flex items-center justify-center shadow-glow`}>
                        <stage.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{stage.title}</h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-white/90 leading-relaxed text-sm">
                      {stage.description}
                    </p>
                  </div>
                  
                  {/* Sponsor/Logo Area */}
                  <div className="mt-auto">
                    <div className="text-white/70 text-xs">
                      AS Monaco FF
                    </div>
                  </div>
                </div>

                {/* Right Panel - Image Placeholder */}
                <div className="flex-1 bg-gray-300 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <div className="w-16 h-16 bg-monaco-yellow rounded-full mx-auto mb-4 flex items-center justify-center">
                      <stage.icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-sm">Image Placeholder</p>
                    <p className="text-xs mt-1">{stage.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ASMFF */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 animate-fade-in">
            {content.whyChoose}
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-6 h-6 bg-monaco-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {content.readyToJoin}
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              {content.joinText}
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
              <Mail className="w-4 h-4" />
              <span>contact@asm-ff.com</span>
            </div>
            <p className="text-muted-foreground">
              {content.contactForm}
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 animate-fade-in">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {content.name} *
                  </label>
                  <Input placeholder={content.name} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {content.email} *
                  </label>
                  <Input type="email" placeholder={content.email} required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {content.birthDate} *
                  </label>
                  <Input type="date" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {content.currentClub}
                  </label>
                  <Input placeholder={content.currentClub} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {content.message}
                </label>
                <Textarea 
                  placeholder={content.message}
                  rows={4}
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-monaco-red hover:bg-monaco-red/90 text-white group shadow-monaco hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {content.submit}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-monaco-red">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-6">
              {language === 'fr' ? 'L\'Avenir Commence Ici' : 'The Future Starts Here'}
            </h2>
            <p className="text-lg text-white/90 mb-8">
              {language === 'fr' 
                ? 'Rejoignez une académie qui croit en votre potentiel et vous aide à le réaliser.'
                : 'Join an academy that believes in your potential and helps you achieve it.'
              }
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              className="group shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {language === 'fr' ? 'Commencer le Voyage' : 'Start the Journey'}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academy;