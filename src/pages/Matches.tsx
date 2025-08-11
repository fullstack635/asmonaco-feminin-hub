import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, MapPin, Clock, ExternalLink, ArrowRight, Play } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface Match {
  id: string;
  match_date: string;
  home_team: string;
  away_team: string;
  result?: string;
  status?: string;

  has_tickets: boolean;
  has_youtube: boolean;
}

const Matches = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'wpsl' | 'tst'>('wpsl');
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMatches();
  }, []);

  const loadMatches = async () => {
    try {
      const { data, error } = await supabase
        .from('matches')
        .select('*');

      if (error) throw error;
      
      if (data) {
        // Sort matches by date - convert match_date strings to Date objects for proper sorting
        const sortedMatches = data.sort((a, b) => {
          // Try to parse the dates - handle different date formats
          const dateA = new Date(a.match_date);
          const dateB = new Date(b.match_date);
          
          // If dates are invalid, fall back to string comparison
          if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
            return a.match_date.localeCompare(b.match_date);
          }
          
          // Sort chronologically (earliest dates first)
          return dateA.getTime() - dateB.getTime();
        });
        
        setMatches(sortedMatches as Match[]);
      }
    } catch (error) {
      console.error('Error loading matches:', error);
    } finally {
      setLoading(false);
    }
  };

  // Compute season stats for AS Monaco Football Féminin
  const TEAM_NAME = 'AS Monaco Football Féminin';

  const parseScore = (score?: string): { home: number; away: number } | null => {
    if (!score) return null;
    // Accept formats like "3:1", "3 : 1", "3-1", "3 - 1"
    const match = score.match(/(\d+)\s*[:\-]\s*(\d+)/);
    if (!match) return null;
    const home = parseInt(match[1], 10);
    const away = parseInt(match[2], 10);
    if (Number.isNaN(home) || Number.isNaN(away)) return null;
    return { home, away };
  };

  const stats = matches.reduce(
    (acc, m) => {
      const parsed = parseScore(m.result);
      if (!parsed) return acc;

      // Only consider matches where our team is involved
      const isHome = m.home_team === TEAM_NAME;
      const isAway = m.away_team === TEAM_NAME;
      if (!isHome && !isAway) return acc;

      const ourGoals = isHome ? parsed.home : parsed.away;
      const oppGoals = isHome ? parsed.away : parsed.home;

      if (ourGoals > oppGoals) acc.wins += 1;
      else if (ourGoals === oppGoals) acc.draws += 1;
      else acc.losses += 1;

      acc.played += 1;
      return acc;
    },
    { played: 0, wins: 0, draws: 0, losses: 0 }
  );

  const scheduledCount = matches.length;

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
      'EXEMPT': '/teams/EXEMPT.png',
      'FC ROUSSET': '/teams/FC ROUSSET.png'
    };
    return logoMap[teamName];
  };

  const MatchCard = ({ match }: { match: Match }) => (
    <div className="py-3 sm:py-4 md:py-6 last:border-b-0 border-b border-gray-100 lg:border-b-0">
      {/* Mobile Layout */}
      <div className="block sm:hidden">
        <div className="flex flex-col space-y-3 p-4 bg-gray-50 rounded-lg">
          {/* Date and Result */}
          <div className="flex justify-between items-center">
            <span className="font-bold text-sm text-gray-900">{match.match_date}</span>
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
                {match.home_team}
              </div>
            </div>
            <div className="text-gray-900 font-bold text-sm px-2">VS</div>
            <div className="text-center flex-1">
              <div className="text-sm font-semibold text-[#1A2A44] uppercase tracking-wide">
                {match.away_team}
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
            <div className="font-bold text-sm text-gray-900">{match.match_date}</div>
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
                  {match.home_team}
                </div>
                <div className="w-8 h-8 bg-white flex items-center justify-center flex-shrink-0">
                  <img 
                    src={getTeamLogo(match.home_team)}
                    alt={match.home_team}
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
                    src={getTeamLogo(match.away_team)}
                    alt={match.away_team}
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="text-sm font-semibold text-[#1A2A44] text-left uppercase tracking-wide">
                  {match.away_team}
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
            <div className="font-bold text-sm text-gray-900">{match.match_date}</div>
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
                {match.home_team}
              </div>
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white flex items-center justify-center flex-shrink-0">
                <img 
                  src={getTeamLogo(match.home_team)}
                  alt={match.home_team}
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
                  src={getTeamLogo(match.away_team)}
                  alt={match.away_team}
                  className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <div className="text-lg font-cinzel-decorative font-semibold text-[#1A2A44] text-left uppercase tracking-wide flex-1">
                {match.away_team}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const MatchesList = ({ matches, title }: { matches: Match[], title: string }) => (
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

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-monaco-red"></div>
          <p className="mt-4 text-gray-600">Loading matches...</p>
        </div>
      </div>
    );
  }

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
      <MatchesList matches={matches} title="D3 FEMININE - French Football Federation" />

      {/* Season Stats - Responsive */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container-mobile text-center">
          <h2 className="text-2xl sm:text-3xl font-cinzel-decorative font-bold text-gray-900 mb-8 sm:mb-12 animate-fade-in">
            {language === 'fr' ? 'Statistiques de la saison' : 'Season Statistics'}
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="text-2xl sm:text-3xl font-bold text-black-900 mb-2">{scheduledCount}</div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                {language === 'fr' ? 'Matchs programmés' : 'Scheduled Matches'}
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-2xl sm:text-3xl font-bold text-black-600 mb-2">{stats.wins}</div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                {language === 'fr' ? 'Victoires' : 'Wins'}
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl sm:text-3xl font-bold text-black-600 mb-2">{stats.draws}</div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                {language === 'fr' ? 'Nuls' : 'Draws'}
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-2xl sm:text-3xl font-bold text-black-600 mb-2">{stats.losses}</div>
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