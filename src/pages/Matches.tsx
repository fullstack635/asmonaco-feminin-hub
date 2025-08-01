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
      title: "MATCH SCHEDULE",
      subtitle: "Retrouvez ici tous les matchs à venir et les résultats de l'\nAS Monaco Football Féminin.",
      upcoming: "PROCHAINS MATCHS",
      results: "RÉSULTATS"
    },
    en: {
      title: "MATCH SCHEDULE", 
      subtitle: "Find all upcoming matches and results for \nAS Monaco Football Féminin right here.",
      upcoming: "UPCOMING MATCHES",
      results: "RESULTS"
    }
  };

  const content = matchesInfo[language];

  // WPSL match data
  const wpslMatches = [
    {
      id: 1,
      date: "SEPT. 7, 2025",
      result: "W: 1-0",
      homeTeam: "AS Monaco Football Féminin",
      awayTeam: "GIRONDINS BORDEAUX",
      status: "completed",
      hasTickets: false,
      hasYoutube: true
    },
    {
      id: 2,
      date: "SEPT. 14, 2025",
      result: null,
      homeTeam: "ALC LONGVIC",
      awayTeam: "AS Monaco Football Féminin",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 3,
      date: "SEPT. 21, 2025",
      result: null,
      homeTeam: "AS Monaco Football Féminin",
      awayTeam: "AS CANNES",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 4,
      date: "SEPT. 28, 2025",
      result: null,
      homeTeam: "AS CHATENOY LE ROYAL",
      awayTeam: "AS Monaco Football Féminin",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 5,
      date: "OCT. 5, 2025",
      result: null,
      homeTeam: "AS Monaco Football Féminin",
      awayTeam: "CLERMONT FOOT 63",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 6,
      date: "OCT. 12, 2025",
      result: null,
      homeTeam: "EXEMPT",
      awayTeam: "AS Monaco Football Féminin",
      status: "exempt",
      hasTickets: false,
      hasYoutube: false
    },
    {
      id: 7,
      date: "NOV. 9, 2025",
      result: null,
      homeTeam: "AS Monaco Football Féminin",
      awayTeam: "ALBI MARSSAC TF",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 8,
      date: "NOV. 16, 2025",
      result: null,
      homeTeam: "AS Monaco Football Féminin",
      awayTeam: "OLYMPIQUE LYONNAIS 2",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 9,
      date: "DEC. 7, 2025",
      result: null,
      homeTeam: "MONTPELLIER HSC 2",
      awayTeam: "AS Monaco Football Féminin",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 10,
      date: "DEC. 21, 2025",
      result: null,
      homeTeam: "AS Monaco Football Féminin",
      awayTeam: "MONTAUBAN FC TG",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 11,
      date: "JAN. 18, 2026",
      result: null,
      homeTeam: "LE PUY FOOT 43 AUV.",
      awayTeam: "AS Monaco Football Féminin",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 12,
      date: "FEB. 1, 2026",
      result: null,
      homeTeam: "AS Monaco Football Féminin",
      awayTeam: "ALC LONGVIC",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 13,
      date: "FEB. 15, 2026",
      result: null,
      homeTeam: "AS CANNES",
      awayTeam: "AS Monaco Football Féminin",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 14,
      date: "FEB. 22, 2026",
      result: null,
      homeTeam: "AS Monaco Football Féminin",
      awayTeam: "AS CHATENOY LE ROYAL",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 15,
      date: "MAR. 22, 2026",
      result: null,
      homeTeam: "CLERMONT FOOT 63",
      awayTeam: "AS Monaco Football Féminin",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 16,
      date: "MAR. 29, 2026",
      result: null,
      homeTeam: "AS Monaco Football Féminin",
      awayTeam: "EXEMPT",
      status: "exempt",
      hasTickets: false,
      hasYoutube: false
    },
    {
      id: 17,
      date: "APR. 5, 2026",
      result: null,
      homeTeam: "ALBI MARSSAC TF",
      awayTeam: "AS Monaco Football Féminin",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 18,
      date: "APR. 26, 2026",
      result: null,
      homeTeam: "OLYMPIQUE LYONNAIS 2",
      awayTeam: "AS Monaco Football Féminin",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 19,
      date: "MAY. 3, 2026",
      result: null,
      homeTeam: "AS Monaco Football Féminin",
      awayTeam: "MONTPELLIER HSC 2",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 20,
      date: "MAY. 17, 2026",
      result: null,
      homeTeam: "MONTAUBAN FC TG",
      awayTeam: "AS Monaco Football Féminin",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 21,
      date: "MAY. 24, 2026",
      result: null,
      homeTeam: "AS Monaco Football Féminin",
      awayTeam: "LE PUY FOOT 43 AUV.",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    },
    {
      id: 22,
      date: "MAY. 31, 2026",
      result: null,
      homeTeam: "GIRONDINS BORDEAUX",
      awayTeam: "AS Monaco Football Féminin",
      status: "upcoming",
      hasTickets: true,
      hasYoutube: false
    }
  ];

  const getTeamLogo = (teamName: string) => {
    const logoMap: { [key: string]: string } = {
      'AS Monaco Football Féminin': '/teams/AS MONACO FF.png',
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
      'EXEMPT': '/teams/EXEMPT.png'
    };
    return logoMap[teamName] || '/teams/EXEMPT.png';
  };

  const MatchCard = ({ match }: { match: any }) => (
    <div className="py-3 sm:py-4 md:py-6 last:border-b-0 border-b border-gray-100 lg:border-b-0">
      {/* Mobile Layout */}
      <div className="block sm:hidden">
        <div className="flex flex-col space-y-3 p-4 bg-gray-50 rounded-lg">
          {/* Date and Result */}
          <div className="flex justify-between items-center">
            <span className="font-bold text-sm text-gray-900">{match.date}</span>
            <span className={`text-sm font-medium ${
              match.result ? 'text-gray-900' : 'text-gray-500'
            }`}>
              {match.result || (match.status === 'exempt' ? 'EXEMPT' : 'TBD')}
            </span>
          </div>
          
          {/* Teams */}
          <div className="flex items-center justify-center space-x-3">
            <div className="text-center flex-1">
              <div className="text-sm font-semibold text-[#1A2A44] uppercase tracking-wide">
                {match.homeTeam}
              </div>
            </div>
            <div className="text-gray-900 font-bold text-sm px-2">VS</div>
            <div className="text-center flex-1">
              <div className="text-sm font-semibold text-[#1A2A44] uppercase tracking-wide">
                {match.awayTeam}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden sm:block md:hidden">
        <div className="grid grid-cols-12 items-center gap-2">
          {/* Date and Result */}
          <div className="col-span-3 text-center">
            <div className="font-bold text-sm text-gray-900">{match.date}</div>
            <div className={`text-sm font-medium mt-1 ${
              match.result ? 'text-gray-900' : 'text-gray-500'
            }`}>
              {match.result || (match.status === 'exempt' ? 'EXEMPT' : 'TBD')}
            </div>
          </div>

          {/* Teams with small logos */}
          <div className="col-span-9 flex items-center justify-center">
            <div className="flex items-center space-x-2 w-full">
              <div className="flex items-center space-x-2 flex-1 justify-end">
                <div className="text-sm font-semibold text-[#1A2A44] text-right uppercase tracking-wide">
                  {match.homeTeam}
                </div>
                <div className="w-8 h-8 bg-white flex items-center justify-center flex-shrink-0">
                  <img 
                    src={getTeamLogo(match.homeTeam)}
                    alt={match.homeTeam}
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
              
              <div className="text-gray-900 font-bold text-sm px-2">VS</div>
              
              <div className="flex items-center space-x-2 flex-1 justify-start">
                <div className="w-8 h-8 bg-white flex items-center justify-center flex-shrink-0">
                  <img 
                    src={getTeamLogo(match.awayTeam)}
                    alt={match.awayTeam}
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="text-sm font-semibold text-[#1A2A44] text-left uppercase tracking-wide">
                  {match.awayTeam}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Original */}
      <div className="hidden md:block">
        <div className="grid grid-cols-12 items-center gap-4">
          {/* Date and Result - Left Column */}
          <div className="col-span-2 text-center">
            <div className="font-bold text-sm text-gray-900">{match.date}</div>
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
              <div className="text-lg font-cinzel-decorative font-semibold text-[#1A2A44] text-right uppercase tracking-wide flex-1">
                {match.homeTeam}
              </div>
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white flex items-center justify-center flex-shrink-0">
                <img 
                  src={getTeamLogo(match.homeTeam)}
                  alt={match.homeTeam}
                  className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
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
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white flex items-center justify-center flex-shrink-0">
                <img 
                  src={getTeamLogo(match.awayTeam)}
                  alt={match.awayTeam}
                  className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <div className="text-lg font-cinzel-decorative font-semibold text-[#1A2A44] text-left uppercase tracking-wide flex-1">
                {match.awayTeam}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const MatchesList = ({ matches, title }: { matches: any[], title: string }) => (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container-mobile">
        <h2 className="text-2xl sm:text-3xl font-cinzel-decorative font-bold text-gray-900 mb-6 sm:mb-8 text-center">{title}</h2>
        <div className="bg-white rounded-lg overflow-hidden max-w-6xl mx-auto">
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
      {/* Header Section - Responsive */}
      <section className="relative h-48 sm:h-56 md:h-64 lg:h-[250px] bg-monaco-red flex items-center justify-center spacing-mobile">
        <div className="relative z-10 text-center text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 mobile-text-shadow">{content.title}</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl font-cinzel-decorative opacity-95 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0 whitespace-pre-line">{content.subtitle}</p>
        </div>
      </section>

      {/* Tabs - Responsive */}
      <section className="py-4 sm:py-6 md:py-8 bg-white">
        <div className="container-mobile">
          <div className="flex justify-center space-x-4 sm:space-x-8 bg-white py-3 sm:py-4 max-w-md mx-auto rounded-lg">
            <button
              onClick={() => setActiveTab('wpsl')}
              className={`font-semibold text-sm sm:text-base md:text-lg transition-all duration-200 border-b-2 pb-2 touch-friendly px-6 py-2 rounded-md min-w-[120px] text-center ${
                activeTab === 'wpsl'
                  ? 'text-red-600 border-red-600 bg-red-50'
                  : 'text-gray-600 border-transparent hover:text-red-600 hover:border-red-600 hover:bg-gray-50'
              }`}
            >
              Match
            </button>
            <button
              onClick={() => {
                window.open('https://epreuves.fff.fr/competition/engagement/436508-d3-feminine/phase/1/2/classement', '_blank');
              }}
              className="font-semibold text-sm sm:text-base md:text-lg transition-all duration-200 border-b-2 pb-2 touch-friendly px-6 py-2 rounded-md min-w-[120px] text-center text-gray-600 border-transparent hover:text-red-600 hover:border-red-600 hover:bg-gray-50"
            >
              Standings
            </button>
          </div>
          {/* Horizontal line under tabs */}
          <div className="w-full max-w-6xl mx-auto mt-4">
            <div className="h-px bg-gray-200"></div>
          </div>
        </div>
      </section>

      {/* WPSL Matches */}
      <MatchesList matches={wpslMatches} title="D3 FEMININE - French Football Federation" />

      {/* Season Stats - Responsive */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container-mobile text-center">
          <h2 className="text-2xl sm:text-3xl font-cinzel-decorative font-bold text-gray-900 mb-8 sm:mb-12 animate-fade-in">
            {language === 'fr' ? 'Statistiques de la saison' : 'Season Statistics'}
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">19</div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                {language === 'fr' ? 'Matchs programmés' : 'Scheduled Matches'}
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">1</div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                {language === 'fr' ? 'Victoires' : 'Wins'}
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">0</div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                {language === 'fr' ? 'Nuls' : 'Draws'}
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-2">0</div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
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