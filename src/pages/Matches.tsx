import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';

const Matches = () => {
  const { language } = useLanguage();

  const matchesInfo = {
    fr: {
      title: "Calendrier & Résultats",
      wpsl: "WPSL",
      tst: "Calendrier TST",
      upcoming: "Prochains matchs",
      results: "Résultats",
      watch: "Regarder",
      tickets: "Billets"
    },
    en: {
      title: "Matches & Results",
      wpsl: "WPSL",
      tst: "TST Schedule", 
      upcoming: "Upcoming Matches",
      results: "Results",
      watch: "Watch",
      tickets: "Tickets"
    }
  };

  const content = matchesInfo[language];

  // Sample match data based on the screenshot
  const wpslMatches = [
    {
      id: 1,
      date: "May 18, 2025",
      time: "7:00 pm CST",
      home: "FC Dallas",
      away: "AS Monaco FF",
      result: "1-0",
      status: "finished",
      venue: "Toyota Stadium"
    },
    {
      id: 2,
      date: "May 23, 2025", 
      time: "7:00 pm CST",
      home: "AS Monaco FF",
      away: "Futbolera Select Club",
      result: "1-1",
      status: "finished",
      venue: "Stade Louis II"
    },
    {
      id: 3,
      date: "May 30, 2025",
      time: "7:00 pm CST", 
      home: "Fortworth Vaqueras",
      away: "AS Monaco FF",
      result: "2-0",
      status: "finished",
      venue: "Fortworth Stadium"
    },
    {
      id: 4,
      date: "June 1, 2025",
      time: "7:00 pm CST",
      home: "AS Monaco FF", 
      away: "Southstar FC",
      result: "3-1",
      status: "finished",
      venue: "Stade Louis II"
    },
    {
      id: 5,
      date: "June 7, 2025",
      time: "7:00 pm CST",
      home: "AS Monaco FF",
      away: "Fortworth Vaqueras", 
      result: null,
      status: "upcoming",
      venue: "Stade Louis II"
    }
  ];

  const tstMatches = [
    {
      id: 6,
      date: "June 5, 2025",
      time: "8:00 pm CST",
      home: "US Women",
      away: "AS Monaco FF",
      result: null,
      status: "upcoming",
      venue: "National Stadium"
    },
    {
      id: 7,
      date: "June 6, 2025", 
      time: "7:00 pm CST",
      home: "Angel City FC",
      away: "AS Monaco FF",
      result: null,
      status: "upcoming",
      venue: "Angel City Stadium"
    }
  ];

  const MatchCard = ({ match, showTickets = false }: { match: any, showTickets?: boolean }) => (
    <Card className="p-6 hover:shadow-monaco transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{match.date}</span>
          <Clock className="w-4 h-4 ml-2" />
          <span>{match.time}</span>
        </div>
        {match.status === 'finished' && match.result && (
          <Badge variant="secondary">{match.result}</Badge>
        )}
        {match.status === 'upcoming' && (
          <Badge className="bg-monaco-yellow text-black">
            {language === 'fr' ? 'À venir' : 'Upcoming'}
          </Badge>
        )}
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="text-center flex-1">
          <div className="font-semibold text-lg">{match.home}</div>
        </div>
        <div className="mx-4 text-2xl font-bold text-muted-foreground">VS</div>
        <div className="text-center flex-1">
          <div className="font-semibold text-lg">{match.away}</div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <MapPin className="w-4 h-4" />
        <span>{match.venue}</span>
      </div>

      {showTickets && match.status === 'upcoming' && (
        <div className="flex gap-2">
          <Button size="sm" className="flex-1">
            <ExternalLink className="w-4 h-4 mr-2" />
            {content.tickets}
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            {content.watch}
          </Button>
        </div>
      )}
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
          <p className="text-lg text-white/90 max-w-3xl mx-auto animate-fade-in">
            {language === 'fr' 
              ? 'Suivez tous nos matchs et résultats de la saison 2024-2025'
              : 'Follow all our matches and results for the 2024-2025 season'
            }
          </p>
        </div>
      </section>

      {/* WPSL Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 animate-fade-in">
              {content.wpsl}
            </h2>
            <p className="text-muted-foreground animate-fade-in">
              {language === 'fr' 
                ? 'Women\'s Premier Soccer League - Saison 2025'
                : 'Women\'s Premier Soccer League - 2025 Season'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {wpslMatches.map((match, index) => (
              <div 
                key={match.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MatchCard match={match} showTickets={true} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TST Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 animate-fade-in">
              {content.tst}
            </h2>
            <p className="text-muted-foreground animate-fade-in">
              {language === 'fr' 
                ? 'Tournoi Spécial Trophée - Matchs amicaux internationaux'
                : 'Special Trophy Tournament - International friendly matches'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tstMatches.map((match, index) => (
              <div 
                key={match.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MatchCard match={match} showTickets={true} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Season Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12 animate-fade-in">
            {language === 'fr' ? 'Statistiques de la saison' : 'Season Statistics'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-primary mb-2">8</div>
              <p className="text-muted-foreground">
                {language === 'fr' ? 'Matchs joués' : 'Matches Played'}
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold text-monaco-yellow mb-2">3</div>
              <p className="text-muted-foreground">
                {language === 'fr' ? 'Victoires' : 'Wins'}
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-accent mb-2">2</div>
              <p className="text-muted-foreground">
                {language === 'fr' ? 'Nuls' : 'Draws'}
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl font-bold text-monaco-red mb-2">3</div>
              <p className="text-muted-foreground">
                {language === 'fr' ? 'Défaites' : 'Losses'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Matches;