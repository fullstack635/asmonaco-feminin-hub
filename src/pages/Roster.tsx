import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface Player {
  id: string;
  first_name: string;
  last_name: string;
  jersey_number?: number;
  position: string;
  instagram?: string;
  hometown?: string;
  height?: string;
  photo_url?: string;
  is_coach: boolean;
  specialty?: string;
}

const Roster = () => {
  const { language } = useLanguage();
  const [playersData, setPlayersData] = useState<Player[]>([]);
  const [coachingStaffData, setCoachingStaffData] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPlayers();
  }, []);

  const loadPlayers = async () => {
    try {
      const { data, error } = await supabase
        .from('players')
        .select('*')
        .order('jersey_number', { ascending: true, nullsFirst: false });

      if (error) throw error;

      if (data) {
        const playersList = data.filter(p => !p.is_coach);
        const coachesList = data.filter(p => p.is_coach);
        
        // Sort coaching staff by hierarchy
        const sortedCoaches = coachesList.sort((a, b) => {
          const getCoachPriority = (specialty: string | undefined) => {
            if (!specialty) return 999; // Unknown roles go last
            
            const priorities: { [key: string]: number } = {
              'Head coach': 1,
              'Head Coach': 1,
              'Assistant coach': 2,
              'Assistant Coach': 2,
              'GoalKeeper coach': 3,
              'Goalkeeper Coach': 3,
              'Fitness coach': 4,
              'Fitness Coach': 4,
              'Video Analyst': 5,
              'Team manager': 6,
              'Team Manager': 6
            };
            
            return priorities[specialty] || 999;
          };
          
          const priorityA = getCoachPriority(a.specialty);
          const priorityB = getCoachPriority(b.specialty);
          
          // If same priority, sort alphabetically by last name
          if (priorityA === priorityB) {
            return a.last_name.localeCompare(b.last_name);
          }
          
          return priorityA - priorityB;
        });
        
        setPlayersData(playersList);
        setCoachingStaffData(sortedCoaches);
      }
    } catch (error) {
      console.error('Error loading players:', error);
    } finally {
      setLoading(false);
    }
  };

  const rosterInfo = {
    fr: {
      title: "Notre Équipe",
      subtitle: "AS Monaco Football Féminin competes in FFF Division 3 —\nA national stage for rising talent and the next generation of women's football in France.",
      positions: {
        goalkeeper: "Gardienne",
        defender: "Défenseure",
        midfielder: "Milieu",
        forward: "Attaquante"
      }
    },
    en: {
      title: "Our Team",
      subtitle: "AS Monaco Football Féminin competes in FFF Division 3 —\nA national stage for rising talent and the next generation of women's football in France.",
      positions: {
        goalkeeper: "Goalkeeper",
        defender: "Defender", 
        midfielder: "Midfielder",
        forward: "Forward"
      }
    }
  };

  const content = rosterInfo[language];

  // Real player data from provided spreadsheet
  const players = [
    { id: 1, firstName: "Manelle", lastName: "Ben Mohammed", number: 1, position: "GK", instagram: "maanelle_bm", hometown: "Monaco, Monaco", height: "175", photo:"/photo/Manelle_Ben_Mohamed.jpg" },
    { id: 2, firstName: "Manon", lastName: "Frey", number: 2, position: "Defendeur", instagram: "manfoot_al1", hometown: "Nice, France", height: "165", photo: "/photo/Manon_Frey.jpg" },
    { id: 3, firstName: "Elise", lastName: "Gaucher", number: 3, position: "Defendeur", instagram: "elise.gaucher", hometown: "Cannes, France", height: "168", photo: "/photo/Elise_Gaucher.jpg" },
    { id: 4, firstName: "Julie", lastName: "Lievremont", number: 4, position: "Defendeur", instagram: "julie_lvmt", hometown: "Monaco, Monaco", height: "172", photo: "/photo/Julie_Lieveremont.jpg" },
    { id: 5, firstName: "Solène", lastName: "Noizat", number: 5, position: "Defendeur", instagram: "solene.noizat", hometown: "Menton, France", height: "169", photo: "/photo/Solene_Noizat.jpg" },
    { id: 6, firstName: "Lina", lastName: "Chabanne", number: 6, position: "Midfield", instagram: "linaachabane22", hometown: "Monaco, Monaco", height: "166", photo: "/photo/Lina_Chabane.jpg" },
    { id: 7, firstName: "Maureen", lastName: "Bigot", number: 7, position: "Midfield", instagram: "bigotmaureen", hometown: "Antibes, France", height: "164", photo: "/photo/Maureen_Bigot.jpg" },
    { id: 8, firstName: "Jade", lastName: "Gaiffe", number: 8, position: "Midfield", instagram: "jadegatffe_", hometown: "Monaco, Monaco", height: "167", photo: "/photo/Jade_Gaiffe.jpg" },
    { id: 9, firstName: "Marie", lastName: "Lextrayt", number: 9, position: "Strike", instagram: "marie_lextrayt", hometown: "Nice, France", height: "170", photo: "/photo/Marie_Lextrayt.jpg" },
    { id: 10, firstName: "Laure", lastName: "Robert", number: 10, position: "Defendeur", instagram: "laure_robert_4", hometown: "Monaco, Monaco", height: "171", photo: "/photo/Laure_Robert.jpg" },
    { id: 11, firstName: "Manon", lastName: "Issert", number: 14, position: "Midfield", instagram: "TBD", hometown: "Cannes, France", height: "165", photo: "/photo/Manon_Issert.jpg" },
    { id: 12, firstName: "Enola", lastName: "Dumontet", number: 18, position: "Midfield", instagram: "userrr.83", hometown: "Monaco, Monaco", height: "168", photo: "/photo/Enola_Dumontet.jpg" },
    { id: 13, firstName: "Ines", lastName: "Koré", number: 20, position: "Strike", instagram: "kore_ines", hometown: "Nice, France", height: "169", photo: "/photo/sample.png" },
    { id: 14, firstName: "Fatoumata", lastName: "Baldé", number: 21, position: "Strike", instagram: "fatoudinho_b", hometown: "Monaco, Monaco", height: "166", photo: "/photo/Fatoumata_Balde.jpg" },
    { id: 15, firstName: "Salma", lastName: "Zeitouni", number: 22, position: "Defendeur", instagram: "salma_zei", hometown: "Monaco, Monaco", height: "170", photo: "/photo/Salma_Zeitouni.jpg" },
    { id: 16, firstName: "Chelsea", lastName: "Abrin", number: 26, position: "Strike", instagram: "chelsea_abrin", hometown: "Nice, France", height: "167", photo: "/photo/Chelsea_Abrin.jpg" },
    { id: 17, firstName: "Melie", lastName: "Lacolla", number: 27, position: "Defendeur", instagram: "meelie.l08", hometown: "Monaco, Monaco", height: "165", photo: "/photo/Melie_Iacolla.jpg" },
    { id: 18, firstName: "Anais", lastName: "Leclerc", number: 28, position: "Defendeur", instagram: "anais_lb", hometown: "Cannes, France", height: "172", photo: "/photo/Anaia_Leclerc.jpg" },
    { id: 19, firstName: "Pauline", lastName: "Moitrel", number: 30, position: "GK", instagram: "pauline_moitrel", hometown: "Monaco, Monaco", height: "175", photo: "/photo/Pauline_Moitrel.jpg" },
    { id: 20, firstName: "Yrma", lastName: "Mze Issa", number: 19, position: "Strike", instagram: "yrmaajr", hometown: "Monaco, Monaco", height: "168", photo: "/photo/Yrma_Mze_Issa.jpg" },
    { id: 21, firstName: "Adama", lastName: "Tamba", number: null, position: "TBD", instagram: "TBD", hometown: "Monaco, Monaco", height: "N/A", photo: "/photo/sample.png" },
    { id: 22, firstName: "Ramsey", lastName: "Davis", number: 31, position: "Strike", instagram: "ramsdavis", hometown: "Monaco, Monaco", height: "170", photo: "/photo/Ramsey_David.jpg" },
  ].sort((a, b) => (a.number || 999) - (b.number || 999)); // Sort by jersey number

  // Coaching Staff data
  const coachingStaff = [
    { 
      id: 'coach1', 
      firstName: "Chloé", 
      lastName: "Rochetaing", 
      number: null, 
      position: "Coach", 
      instagram: null, 
      hometown: "Monaco", 
      height: "N/A", 
      photo: "/photo/Chloe_Rochetaing.jpg",
      isCoach: true,
      specialty: language === 'fr' ? "Coach Principal" : "Head Coach"
    },
    { 
      id: 'coach2', 
      firstName: "Soriana", 
      lastName: "Constant", 
      number: null, 
      position: "Coach", 
      instagram: null, 
      hometown: "Monaco", 
      height: "N/A", 
      photo: "/photo/sample.png",
      isCoach: true,
      specialty: language === 'fr' ? "Coach Adjoint" : "Assistant Coach"
    },
    { 
      id: 'coach3', 
      firstName: "Jean Christophe", 
      lastName: "Deleau", 
      number: null, 
      position: "Coach", 
      instagram: null, 
      hometown: "Monaco", 
      height: "N/A", 
      photo: "/photo/Jean_Christophe_Deleau.jpg",
      isCoach: true,
      specialty: language === 'fr' ? "Entraîneur des Gardiennes" : "Goalkeeper Coach"
    },
    { 
      id: 'coach4', 
      firstName: "Antoine", 
      lastName: "Briançon", 
      number: null, 
      position: "Coach", 
      instagram: null, 
      hometown: "Monaco", 
      height: "N/A", 
      photo: "/photo/Antoine_Briancon.jpg",
      isCoach: true,
      specialty: language === 'fr' ? "Préparateur Physique" : "Fitness Coach"
    },
    { 
      id: 'coach5', 
      firstName: "Julian", 
      lastName: "Garber", 
      number: null, 
      position: "Coach", 
      instagram: null, 
      hometown: "Monaco", 
      height: "N/A", 
      photo: "/photo/sample.png",
      isCoach: true,
      specialty: language === 'fr' ? "Analyste Vidéo" : "Video Analyst"
    },
    { 
      id: 'coach6', 
      firstName: "Maria", 
      lastName: "Rochetaing", 
      number: null, 
      position: "Coach", 
      instagram: null, 
      hometown: "Monaco", 
      height: "N/A", 
      photo: "/photo/sample.png",
      isCoach: true,
      specialty: language === 'fr' ? "Intendante" : "Team Manager (Logistics/Equipment Manager)"
    }
  ];

  // Combine players and coaching staff
  const allTeamMembers = [...playersData, ...coachingStaffData];

  const getPositionColor = (position: string) => {
    switch (position.toLowerCase()) {
      case 'gk': return 'bg-monaco-red text-white';
      case 'defendeur': return 'bg-monaco-red text-white';
      case 'midfield': return 'bg-monaco-red text-white';
      case 'strike': return 'bg-monaco-red text-white';
      default: return 'bg-monaco-red text-white';
    }
  };

  const getPositionDisplay = (position: string) => {
    const displays = {
      fr: {
        'GK': 'Gardienne',
        'Defendeur': 'Défenseure', 
        'Midfield': 'Milieu',
        'Strike': 'Attaquante',
        'TBD': 'À déterminer'
      },
      en: {
        'GK': 'Goalkeeper',
        'Defendeur': 'Defender',
        'Midfield': 'Midfielder', 
        'Strike': 'Forward',
        'TBD': 'To Be Determined'
      }
    };
    return displays[language][position as keyof typeof displays[typeof language]] || position;
  };

  const getPlayerHometown = (player: Player) => {
    return player.hometown || 'N/A';
  };

  const getPlayerHeight = (player: Player) => {
    if (player.height && player.height !== 'N/A') {
      return `${player.height} cm`;
    }
    return 'N/A';
  };

  const getSpecialty = (player: Player) => {
    if (!player.is_coach || !player.specialty) return '';
    
    const specialtyTranslations: { [key: string]: { fr: string; en: string } } = {
      'Head Coach': { fr: 'Coach Principal', en: 'Head Coach' },
      'Assistant Coach': { fr: 'Coach Adjoint', en: 'Assistant Coach' },
      'Goalkeeper Coach': { fr: 'Entraîneur des Gardiennes', en: 'Goalkeeper Coach' },
      'Fitness Coach': { fr: 'Préparateur Physique', en: 'Fitness Coach' },
      'Video Analyst': { fr: 'Analyste Vidéo', en: 'Video Analyst' },
      'Team Manager': { fr: 'Intendante', en: 'Team Manager (Logistics/Equipment Manager)' }
    };

    return specialtyTranslations[player.specialty]?.[language] || player.specialty;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-monaco-red"></div>
          <p className="mt-4 text-gray-600">Loading roster...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Brand Colors - Mobile responsive */}
      <section className="relative h-48 sm:h-56 md:h-64 lg:h-[250px] bg-monaco-red flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat-extrabold mb-3 sm:mb-4 md:mb-6 mobile-text-shadow">{content.title}</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl opacity-95 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0 font-cinzel-decorative whitespace-pre-line">{content.subtitle}</p>
        </div>
      </section>

      {/* Players Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-cinzel-decorative-bold text-center mb-8 sm:mb-12">
            {language === 'fr' ? 'Joueuses' : 'Players'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {playersData.map((player, index) => (
              <div 
                key={player.id}
                className="relative group animate-fade-in touch-friendly"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Player Card - Mobile optimized with doubled width */}
                <div className="relative overflow-hidden rounded-lg bg-background aspect-[3/4] shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 pr-4 sm:pr-6">
                  {/* Jersey Number - Responsive sizing */}
                  <div className="absolute top-1 sm:top-2 right-1 sm:right-2 z-10">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
                      {/* Main Number Container */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        <span 
                          className="number font-montserrat-extrabold"
                          style={{
                            fontSize: 'clamp(32px, 6vw, 120px)',
                            color: 'white',
                            textShadow: '3px 3px 0 red, -3px -3px 0 red, 3px -3px 0 red, -3px 3px 0 red, 0 3px 0 red, 0 -3px 0 red, 3px 0 0 red, -3px 0 0 red',
                            letterSpacing: '2px',
                            lineHeight: '1',
                            marginRight: (player.jersey_number && player.jersey_number > 9) ? '10px' : '0px'
                          }}
                        >
                          {player.jersey_number || '?'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Player Photo Placeholder - Red Background */}
                  <div className="absolute inset-0 bg-monaco-red">
                    <div className="flex items-center justify-center h-full">
                  {/* Player Photo */}
                      <img 
                        src={player.photo_url} 
                        alt={`${player.first_name} ${player.last_name}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const initialsDiv = target.nextElementSibling as HTMLElement;
                          if (initialsDiv) {
                            initialsDiv.style.display = 'flex';
                          }
                        }}
                      />
                      {/* Fallback Initials */}
                      <div className="text-white/30 text-6xl sm:text-8xl lg:text-9xl font-bold absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
                        {player.first_name.charAt(0)}{player.last_name.charAt(0)}
                      </div>
                    </div>
                  </div>
                  
                  {/* Player Info Overlay - Black Bottom Section - Mobile responsive */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black p-3 sm:p-4 md:p-6 rounded-b-lg">
                    <div className="text-white">
                      <h3 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-1 leading-tight">
                        {player.first_name}
                      </h3>
                      <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 leading-tight">
                        {player.last_name}
                      </h3>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                        <Badge 
                          className={`${getPositionColor(player.position)} text-white text-sm sm:text-base md:text-lg px-3 sm:px-4 py-1 sm:py-2 rounded-full`}
                        >
                          {getPositionDisplay(player.position)}
                        </Badge>
                        
                        {/* Instagram Link - Mobile responsive */}
                        {player.instagram && player.instagram !== 'TBD' && (
                          <a 
                            href={`https://instagram.com/${player.instagram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm sm:text-base md:text-lg text-white/80 hover:text-white transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="hidden sm:inline">@{player.instagram}</span>
                            <span className="sm:hidden">@{player.instagram.split('_')[0]}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Staff Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-cinzel-decorative-bold text-center mb-8 sm:mb-12">
            {language === 'fr' ? 'Équipe Technique' : 'Coaching Staff'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {coachingStaffData.map((coach, index) => (
              <div 
                key={coach.id}
                className="relative group animate-fade-in touch-friendly"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Coach Card - Mobile optimized with doubled width */}
                <div className="relative overflow-hidden rounded-lg bg-background aspect-[3/4] shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 pr-4 sm:pr-6">
                  {/* Coach Badge - Responsive sizing */}
                  <div className="absolute top-1 sm:top-2 right-1 sm:right-2 z-10">
                    <div className="bg-monaco-yellow text-black px-2 py-1 rounded-lg text-xs sm:text-sm font-bold">
                      {language === 'fr' ? 'STAFF' : 'COACH'}
                    </div>
                  </div>
                  
                  {/* Coach Photo Placeholder - Red Background */}
                  <div className="absolute inset-0 bg-monaco-red">
                    <div className="flex items-center justify-center h-full">
                      {/* Coach Photo */}
                      <img 
                        src={coach.photo_url} 
                        alt={`${coach.first_name} ${coach.last_name}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const initialsDiv = target.nextElementSibling as HTMLElement;
                          if (initialsDiv) {
                            initialsDiv.style.display = 'flex';
                          }
                        }}
                      />
                      {/* Fallback Initials */}
                      <div className="text-white/30 text-6xl sm:text-8xl lg:text-9xl font-bold absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
                        {coach.first_name.charAt(0)}{coach.last_name.charAt(0)}
                      </div>
                    </div>
                  </div>
                  
                  {/* Coach Info Overlay - Black Bottom Section - Mobile responsive */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black p-3 sm:p-4 md:p-6 rounded-b-lg">
                    <div className="text-white">
                      <h3 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-1 leading-tight">
                        {coach.first_name}
                      </h3>
                      <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 leading-tight">
                        {coach.last_name}
                      </h3>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                        <Badge 
                          className={`${getPositionColor(coach.position)} text-white text-sm sm:text-base md:text-lg px-3 sm:px-4 py-1 sm:py-2 rounded-full`}
                        >
                          {coach.specialty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roster;