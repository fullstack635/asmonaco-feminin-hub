import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Ticket, Calendar, MapPin, Clock, Users, ArrowRight, Phone, Globe, CreditCard } from 'lucide-react';

const Tickets = () => {
  const { language } = useLanguage();

  const ticketsContent = {
    fr: {
      title: "Billetterie",
      subtitle: "Venez soutenir AS Monaco Football Féminin au Stade Louis II",
      description: "Vivez l'émotion du football féminin monégasque en direct ! Réservez vos billets pour nos prochains matchs et faites partie de l'histoire de notre club.",
      upcomingMatches: "Prochains Matchs",
      ticketPrices: "Tarifs des Billets",
      howToBuy: "Comment Acheter",
      stadium: "Le Stade",
      buyTickets: "Acheter des Billets",
      soldOut: "Complet",
      available: "Disponible",
      vs: "vs",
      adult: "Adulte",
      student: "Étudiant/Senior",
      child: "Enfant (-12 ans)",
      family: "Famille",
      familyDesc: "2 adultes + 2 enfants",
      online: "En ligne",
      onlineDesc: "billetterie.asm-ff.com",
      phone: "Téléphone",
      phoneDesc: "+377 92 05 74 73", 
      boxOffice: "Guichet",
      boxOfficeDesc: "2h avant le match",
      access: "Accès au Stade",
      metro: "Métro: Station Stade Louis II",
      bus: "Bus: Lignes 5 et 6",
      parking: "Parking: Disponible sur site"
    },
    en: {
      title: "Tickets",
      subtitle: "Come support AS Monaco Football Féminin at Stade Louis II",
      description: "Experience the excitement of Monaco women's football live! Book your tickets for our upcoming matches and be part of our club's history.",
      upcomingMatches: "Upcoming Matches",
      ticketPrices: "Ticket Prices",
      howToBuy: "How to Buy",
      stadium: "The Stadium",
      buyTickets: "Buy Tickets",
      soldOut: "Sold Out",
      available: "Available",
      vs: "vs",
      adult: "Adult",
      student: "Student/Senior",
      child: "Child (under 12)",
      family: "Family",
      familyDesc: "2 adults + 2 children",
      online: "Online",
      onlineDesc: "billetterie.asm-ff.com",
      phone: "Phone",
      phoneDesc: "+377 92 05 74 73",
      boxOffice: "Box Office", 
      boxOfficeDesc: "2 hours before match",
      access: "Stadium Access",
      metro: "Metro: Stade Louis II Station",
      bus: "Bus: Lines 5 and 6",
      parking: "Parking: Available on-site"
    }
  };

  const content = ticketsContent[language];

  // Sample upcoming matches
  const upcomingMatches = [
    {
      id: 1,
      date: '2025-02-15',
      time: '15:00',
      home: 'AS Monaco FF',
      away: 'OGC Nice Féminin',
      competition: language === 'fr' ? 'Division 3 FFF' : 'FFF Division 3',
      venue: 'Stade Louis II',
      available: true,
      importance: 'high'
    },
    {
      id: 2,
      date: '2025-02-28',
      time: '18:00',
      home: 'AS Monaco FF',
      away: 'FC Cannes Féminin',
      competition: language === 'fr' ? 'Division 3 FFF' : 'FFF Division 3',
      venue: 'Stade Louis II',
      available: true,
      importance: 'medium'
    },
    {
      id: 3,
      date: '2025-03-08',
      time: '14:00',
      home: 'AS Monaco FF',
      away: 'RC Grasse Féminin',
      competition: language === 'fr' ? 'Coupe de France' : 'French Cup',
      venue: 'Stade Louis II',
      available: false,
      importance: 'high'
    }
  ];

  const ticketPrices = [
    { type: content.adult, price: '15€', icon: '👤' },
    { type: content.student, price: '10€', icon: '🎓' },
    { type: content.child, price: '5€', icon: '👶' },
    { type: content.family, price: '35€', icon: '👨‍👩‍👧‍👦', description: content.familyDesc }
  ];

  const purchaseOptions = [
    {
      method: content.online,
      description: content.onlineDesc,
      icon: Globe,
      color: 'bg-monaco-yellow text-black'
    },
    {
      method: content.phone,
      description: content.phoneDesc,
      icon: Phone,
      color: 'bg-primary'
    },
    {
      method: content.boxOffice,
      description: content.boxOfficeDesc,
      icon: Ticket,
      color: 'bg-monaco-red'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return language === 'fr' 
      ? date.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'high': return 'border-monaco-red bg-monaco-red/5';
      case 'medium': return 'border-monaco-yellow bg-monaco-yellow/5';
      default: return 'border-border bg-background';
    }
  };

  const MatchCard = ({ match }: { match: any }) => (
    <Card className={`p-6 hover:shadow-monaco transition-all duration-300 hover:scale-105 ${getImportanceColor(match.importance)}`}>
      <div className="flex items-center justify-between mb-4">
        <Badge variant="secondary">{match.competition}</Badge>
        <Badge className={match.available ? 'bg-green-500' : 'bg-red-500'}>
          {match.available ? content.available : content.soldOut}
        </Badge>
      </div>

      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="text-center">
            <div className="font-bold text-lg text-foreground">{match.home}</div>
          </div>
          <div className="text-2xl font-bold text-muted-foreground">{content.vs}</div>
          <div className="text-center">
            <div className="font-bold text-lg text-foreground">{match.away}</div>
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(match.date)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{match.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{match.venue}</span>
        </div>
      </div>

      <Button 
        className="w-full shadow-monaco hover:shadow-xl transition-all duration-300 hover:scale-105"
        disabled={!match.available}
      >
        {match.available ? (
          <>
            <Ticket className="w-4 h-4 mr-2" />
            {content.buyTickets}
          </>
        ) : (
          content.soldOut
        )}
      </Button>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-monaco">
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

      {/* Upcoming Matches */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 animate-fade-in">
            {content.upcomingMatches}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {upcomingMatches.map((match, index) => (
              <div 
                key={match.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MatchCard match={match} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticket Prices */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 animate-fade-in">
            {content.ticketPrices}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {ticketPrices.map((ticket, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-monaco transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{ticket.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {ticket.type}
                </h3>
                {ticket.description && (
                  <p className="text-sm text-muted-foreground mb-3">
                    {ticket.description}
                  </p>
                )}
                <div className="text-2xl font-bold text-primary">
                  {ticket.price}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 animate-fade-in">
            {content.howToBuy}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {purchaseOptions.map((option, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-monaco transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground text-center mb-3">
                  {option.method}
                </h3>
                <p className="text-center text-muted-foreground">
                  {option.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stadium Info */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 animate-fade-in">
            {content.stadium}
          </h2>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Stade Louis II
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {language === 'fr' 
                      ? 'Le mythique Stade Louis II, théâtre des exploits de l\'AS Monaco, accueille également les matchs de notre section féminine. Un cadre exceptionnel pour vivre l\'émotion du football féminin monégasque.'
                      : 'The legendary Stade Louis II, home to AS Monaco\'s exploits, also hosts our women\'s section matches. An exceptional setting to experience the excitement of Monaco women\'s football.'
                    }
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">{content.access}</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>🚇 {content.metro}</p>
                      <p>🚌 {content.bus}</p>
                      <p>🚗 {content.parking}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏟️</div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {language === 'fr' ? 'Capacité' : 'Capacity'}
                    </h4>
                    <p className="text-2xl font-bold text-primary">18,523</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl mb-2">📍</div>
                      <h5 className="font-semibold text-foreground text-sm">
                        {language === 'fr' ? 'Adresse' : 'Address'}
                      </h5>
                      <p className="text-xs text-muted-foreground">
                        7 Avenue des Castelans<br />98000 Monaco
                      </p>
                    </div>
                    <div>
                      <div className="text-2xl mb-2">🎫</div>
                      <h5 className="font-semibold text-foreground text-sm">
                        {language === 'fr' ? 'Guichets' : 'Ticket Office'}
                      </h5>
                      <p className="text-xs text-muted-foreground">
                        {language === 'fr' ? 'Ouverts 2h avant' : 'Open 2h before'}<br />
                        {language === 'fr' ? 'chaque match' : 'each match'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-monaco">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-6">
              {language === 'fr' ? 'Rejoignez-nous au Stade !' : 'Join Us at the Stadium!'}
            </h2>
            <p className="text-lg text-white/90 mb-8">
              {language === 'fr' 
                ? 'Vivez l\'émotion du football féminin et soutenez AS Monaco FF dans sa quête vers les sommets.'
                : 'Experience the excitement of women\'s football and support AS Monaco FF in their quest for the top.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="group shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <CreditCard className="w-4 h-4 mr-2" />
                {content.buyTickets}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="group border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
              >
                {language === 'fr' ? 'Calendrier Complet' : 'Full Schedule'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tickets;