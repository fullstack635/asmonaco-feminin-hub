import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, MapPin, Clock, ExternalLink, ArrowRight, Play } from 'lucide-react';

const Matches = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'wpsl' | 'tst'>('wpsl');

  const matchesInfo = {
    fr: {
      title: "MATCHES & RÉSULTATS",
      subtitle: "Retrouvez ici tous les matchs à venir et les résultats de l'AS Monaco Football Féminin.",
      upcoming: "PROCHAINS MATCHS",
      results: "RÉSULTATS",
      tickets: "BILLETS",
      watch: "REGARDER"
    },
    en: {
      title: "MATCHES & RESULTS",
      subtitle: "Find all upcoming matches and results for AS Monaco Football Féminin right here.",
      upcoming: "UPCOMING MATCHES",
      results: "RESULTS",
      tickets: "TICKETS",
      watch: "WATCH"
    }
  };

  const content = matchesInfo[language];

  // WPSL match data
  const wpslMatches = [
    {
      id: 1,
      date: "SEPT. 7, 2025",
      result: "W: 1-0",
      homeTeam: "AS MONACO FF",
      awayTeam: "GIRONDINS BORDEAUX",
      status: "completed",
      hasTickets: false,
      hasYoutube: true
    },
    {
      id: 2,
      date: "OCT. 12, 2025",
      result: null,
      homeTeam: "ALC LONGVIC",
      awayTeam: "AS MONACO FF",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 3,
      date: "OCT. 19, 2025",
      result: null,
      homeTeam: "MONTPELLIER HSC 2",
      awayTeam: "AS MONACO FF",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 4,
      date: "NOV. 2, 2025",
      result: null,
      homeTeam: "AS MONACO FF",
      awayTeam: "CLERMONT FOOT 63",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 5,
      date: "NOV. 16, 2025",
      result: null,
      homeTeam: "AS CHATENOY LE ROYAL",
      awayTeam: "AS MONACO FF",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 6,
      date: "NOV. 30, 2025",
      result: null,
      homeTeam: "AS MONACO FF",
      awayTeam: "AS CANNES",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 7,
      date: "DEC. 14, 2025",
      result: null,
      homeTeam: "ALBI MARSSAC TF",
      awayTeam: "AS MONACO FF",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 8,
      date: "JAN. 11, 2026",
      result: null,
      homeTeam: "AS MONACO FF",
      awayTeam: "OLYMPIQUE LYONNAIS 2",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 9,
      date: "JAN. 25, 2026",
      result: null,
      homeTeam: "MONTAUBAN FC TG",
      awayTeam: "AS MONACO FF",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 10,
      date: "FEB. 8, 2026",
      result: null,
      homeTeam: "AS MONACO FF",
      awayTeam: "LE PUY FOOT 43 AUV",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 11,
      date: "FEB. 22, 2026",
      result: null,
      homeTeam: "GIRONDINS BORDEAUX",
      awayTeam: "AS MONACO FF",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 12,
      date: "MAR. 8, 2026",
      result: null,
      homeTeam: "AS MONACO FF",
      awayTeam: "ALC LONGVIC",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 13,
      date: "MAR. 22, 2026",
      result: null,
      homeTeam: "AS MONACO FF",
      awayTeam: "MONTPELLIER HSC 2",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 14,
      date: "MAR. 29, 2026",
      result: null,
      homeTeam: "AS MONACO FF",
      awayTeam: "EXEMPT",
      status: "exempt",
      hasTickets: false,
      hasYoutube: false
    },
    {
      id: 15,
      date: "APR. 12, 2026",
      result: null,
      homeTeam: "CLERMONT FOOT 63",
      awayTeam: "AS MONACO FF",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 16,
      date: "APR. 26, 2026",
      result: null,
      homeTeam: "AS MONACO FF",
      awayTeam: "AS CHATENOY LE ROYAL",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 17,
      date: "MAY. 3, 2026",
      result: null,
      homeTeam: "AS CANNES",
      awayTeam: "AS MONACO FF",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 18,
      date: "MAY. 17, 2026",
      result: null,
      homeTeam: "AS MONACO FF",
      awayTeam: "ALBI MARSSAC TF",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 19,
      date: "MAY. 31, 2026",
      result: null,
      homeTeam: "OLYMPIQUE LYONNAIS 2",
      awayTeam: "AS MONACO FF",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    }
  ];

  // TST Tournament match data
  const tstMatches = [
    {
      id: 1,
      date: "JUN. 15, 2025",
      result: null,
      homeTeam: "AS MONACO FF",
      awayTeam: "PARIS SAINT-GERMAIN",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 2,
      date: "JUN. 22, 2025",
      result: null,
      homeTeam: "OLYMPIQUE LYONNAIS",
      awayTeam: "AS MONACO FF",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 3,
      date: "JUN. 29, 2025",
      result: null,
      homeTeam: "AS MONACO FF",
      awayTeam: "MARSEILLE",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 4,
      date: "JUL. 6, 2025",
      result: null,
      homeTeam: "NICE",
      awayTeam: "AS MONACO FF",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 5,
      date: "JUL. 13, 2025",
      result: null,
      homeTeam: "AS MONACO FF",
      awayTeam: "LILLE",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 6,
      date: "JUL. 20, 2025",
      result: null,
      homeTeam: "RENNES",
      awayTeam: "AS MONACO FF",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 7,
      date: "JUL. 27, 2025",
      result: null,
      homeTeam: "AS MONACO FF",
      awayTeam: "STRASBOURG",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 8,
      date: "AUG. 3, 2025",
      result: null,
      homeTeam: "NANTES",
      awayTeam: "AS MONACO FF",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    }
  ];

  const getTeamLogo = (teamName: string) => {
    const logoMap: { [key: string]: string } = {
      'AS MONACO FF': '/teams/AS MONACO FF.png',
      'GIRONDINS BORDEAUX': '/teams/GIRONDINS BORDEAUX.png',
      'ALC LONGVIC': '/teams/ALC LONGVIC.png',
      'MONTPELLIER HSC 2': '/teams/MONTPELLIER HSC 2.png',
      'CLERMONT FOOT 63': '/teams/CLERMONT FOOT 63.png',
      'AS CHATENOY LE ROYAL': '/teams/AS CHATENOY LE ROYAL.png',
      'AS CANNES': '/teams/AS CANNES.png',
      'ALBI MARSSAC TF': '/teams/ALBI MARSSAC TF.png',
      'OLYMPIQUE LYONNAIS 2': '/teams/OLYMPIQUE LYONNAIS 2.png',
      'MONTAUBAN FC TG': '/teams/MONTAUBAN FC TG.png',
      'LE PUY FOOT 43 AUV': '/teams/LE PUY FOOT 43 AUV.png',
      'EXEMPT': '/teams/EXEMPT.png',
      // TST Tournament teams
      'PARIS SAINT-GERMAIN': '/teams/EXEMPT.png',
      'OLYMPIQUE LYONNAIS': '/teams/OLYMPIQUE LYONNAIS 2.png',
      'MARSEILLE': '/teams/EXEMPT.png',
      'NICE': '/teams/EXEMPT.png',
      'LILLE': '/teams/EXEMPT.png',
      'RENNES': '/teams/EXEMPT.png',
      'STRASBOURG': '/teams/EXEMPT.png',
      'NANTES': '/teams/EXEMPT.png'
    };
    return logoMap[teamName] || '/teams/EXEMPT.png';
  };

  const MatchCard = ({ match }: { match: any }) => (
    <div className="py-6 last:border-b-0">
      <div className="grid grid-cols-12 items-center gap-4">
        {/* Date and Result - Left Column */}
        <div className="col-span-2 text-center">
          <div className="font-bold text-sm text-gray-900">
            {match.date}
          </div>
          <div className={`text-base font-medium mt-1 ${
            match.result ? 'text-gray-900' : 'text-gray-500'
          }`}>
            {match.result || (match.status === 'exempt' ? 'EXEMPT' : 'TBD')}
          </div>
        </div>

        {/* Teams and VS - Center */}
        <div className="col-span-8 flex items-center justify-center">
          {/* Home Team */}
          <div className="flex items-center space-x-4 w-1/3 justify-end">
            <div className="text-lg font-serif font-semibold text-[#1A2A44] text-right uppercase tracking-wide flex-1">
              {match.homeTeam}
            </div>
            <div className="w-20 h-20 bg-white flex items-center justify-center flex-shrink-0">
              <img 
                src={getTeamLogo(match.homeTeam)}
                alt={match.homeTeam}
                className="w-20 h-20 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* VS Separator */}
          <div className="text-gray-900 font-bold text-lg px-2 flex items-center justify-center w-1/6">
            VS
          </div>

          {/* Away Team */}
          <div className="flex items-center space-x-4 w-1/3 justify-start">
            <div className="w-20 h-20 bg-white flex items-center justify-center flex-shrink-0">
              <img 
                src={getTeamLogo(match.awayTeam)}
                alt={match.awayTeam}
                className="w-20 h-20 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <div className="text-lg font-serif font-semibold text-[#1A2A44] text-left uppercase tracking-wide flex-1">
              {match.awayTeam}
            </div>
          </div>
        </div>

        {/* Action Links - Right Column */}
        <div className="col-span-2 flex flex-col gap-1 items-end">
          {match.hasTickets && (
            <a 
              href="#" 
              className="text-red-600 font-semibold underline text-xs hover:text-red-700 transition-colors"
            >
              Match Tickets
            </a>
          )}
          {match.hasYoutube && (
            <a 
              href="#" 
              className="text-red-600 font-semibold underline text-xs hover:text-red-700 transition-colors"
            >
              Youtube
            </a>
          )}
        </div>
      </div>
    </div>
  );

  const MatchesList = ({ matches, title }: { matches: any[], title: string }) => (
    <section className="py-16 bg-white">
              <div className="container mx-auto pr-4 pl-0 max-w-5xl">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">{title}</h2>
        <div className="bg-white rounded-lg overflow-hidden max-w-5xl mx-auto">
          {matches.map((match, index) => (
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
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Brand Colors */}
      <section className="relative h-[250px] bg-monaco-red flex items-center justify-center">
        {/* Content */}
        <div className="relative z-10 text-center text-white">

          <h1 className="text-4xl md:text-5xl font-bold mb-3">{content.title}</h1>
          <p className="text-lg md:text-xl opacity-95 max-w-4xl mx-auto px-4 leading-relaxed">{content.subtitle}</p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 bg-white py-4 max-w-md mx-auto">
            <button
              onClick={() => setActiveTab('wpsl')}
              className={`font-semibold text-sm transition-colors border-b-2 ${
                activeTab === 'wpsl'
                  ? 'text-red-600 border-red-600'
                  : 'text-gray-600 border-transparent hover:text-red-600 hover:border-red-600'
              }`}
            >
              WPSL
            </button>
            <button
              onClick={() => {
                setActiveTab('tst');
                const element = document.getElementById('tst-tournament');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`font-semibold text-sm transition-colors border-b-2 ${
                activeTab === 'tst'
                  ? 'text-red-600 border-red-600'
                  : 'text-gray-600 border-transparent hover:text-red-600 hover:border-red-600'
              }`}
            >
              TST Tournament
            </button>
          </div>
        </div>
      </section>

      {/* WPSL Matches */}
      <MatchesList matches={wpslMatches} title="WPSL Season Schedule" />

      {/* TST Tournament Matches - Always at bottom */}
      <div id="tst-tournament">
        <MatchesList matches={tstMatches} title="TST Tournament Schedule" />
      </div>

      {/* Season Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-12 animate-fade-in">
            {language === 'fr' ? 'Statistiques de la saison' : 'Season Statistics'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-gray-900 mb-2">19</div>
              <p className="text-gray-600">
                {language === 'fr' ? 'Matchs programmés' : 'Scheduled Matches'}
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold text-green-600 mb-2">1</div>
              <p className="text-gray-600">
                {language === 'fr' ? 'Victoires' : 'Wins'}
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
              <p className="text-gray-600">
                {language === 'fr' ? 'Nuls' : 'Draws'}
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl font-bold text-red-600 mb-2">0</div>
              <p className="text-gray-600">
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