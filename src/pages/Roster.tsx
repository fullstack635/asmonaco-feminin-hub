import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Roster = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const rosterInfo = {
    fr: {
      title: "Notre Équipe",
      subtitle: "AS Monaco Football Féminin competes in FFF Division 3 — A national stage for rising talent and the next generation of women's football in France.",
      positions: {
        goalkeeper: "Gardienne",
        defender: "Défenseure",
        midfielder: "Milieu",
        forward: "Attaquante"
      }
    },
    en: {
      title: "Our Team",
      subtitle: "AS Monaco Football Féminin competes in FFF Division 3 — A national stage for rising talent and the next generation of women's football in France.",
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
    { id: 1, firstName: "Manelle", lastName: "Ben Mohammed", number: 1, position: "GK", instagram: "maanelle_bm", hometown: "Monaco, Monaco", height: "170", photo: "/players/sample.png" },
    { id: 2, firstName: "Manon", lastName: "Frey", number: 2, position: "Defendeur", instagram: "manfoot_al1", hometown: "Nice, France", height: "165", photo: "/players/sample.png" },
    { id: 3, firstName: "Elise", lastName: "Gaucher", number: 3, position: "Defendeur", instagram: "elise.gaucher", hometown: "Cannes, France", height: "168", photo: "/players/sample.png" },
    { id: 4, firstName: "Julie", lastName: "Lievremont", number: 4, position: "Defendeur", instagram: "julie_lvmt", hometown: "Monaco, Monaco", height: "172", photo: "/players/sample.png" },
    { id: 5, firstName: "Solène", lastName: "Noizat", number: 5, position: "Defendeur", instagram: "solene.noizat", hometown: "Menton, France", height: "169", photo: "/players/sample.png" },
    { id: 6, firstName: "Lina", lastName: "Chabanne", number: 6, position: "Midfield", instagram: "linaachabane22", hometown: "Monaco, Monaco", height: "166", photo: "/players/sample.png" },
    { id: 7, firstName: "Maureen", lastName: "Bigot", number: 7, position: "Midfield", instagram: "bigotmaureen", hometown: "Antibes, France", height: "164", photo: "/players/sample.png" },
    { id: 8, firstName: "Jade", lastName: "Gaiffe", number: 8, position: "Midfield", instagram: "jadegatffe_", hometown: "Monaco, Monaco", height: "167", photo: "/players/sample.png" },
    { id: 9, firstName: "Marie", lastName: "Lextrayt", number: 9, position: "Strike", instagram: "marie_lextrayt", hometown: "Nice, France", height: "170", photo: "/players/sample.png" },
    { id: 10, firstName: "Laure", lastName: "Robert", number: 10, position: "Defendeur", instagram: "laure_robert_4", hometown: "Monaco, Monaco", height: "171", photo: "/players/sample.png" },
    { id: 11, firstName: "Manon", lastName: "Issert", number: 14, position: "Midfield", instagram: "TBD", hometown: "Cannes, France", height: "165", photo: "/players/sample.png" },
    { id: 12, firstName: "Enola", lastName: "Dumontet", number: 18, position: "Midfield", instagram: "userrr.83", hometown: "Monaco, Monaco", height: "168", photo: "/players/sample.png" },
    { id: 13, firstName: "Ines", lastName: "Koré", number: 20, position: "Strike", instagram: "kore_ines", hometown: "Nice, France", height: "169", photo: "/players/sample.png" },
    { id: 14, firstName: "Fatoumata", lastName: "Baldé", number: 21, position: "Strike", instagram: "fatoudinho_b", hometown: "Monaco, Monaco", height: "166", photo: "/players/sample.png" },
    { id: 15, firstName: "Salma", lastName: "Zeitouni", number: 22, position: "Defendeur", instagram: "salma_zei", hometown: "Monaco, Monaco", height: "170", photo: "/players/sample.png" },
    { id: 16, firstName: "Chelsea", lastName: "Abrin", number: 23, position: "Strike", instagram: "chelsea_abrin", hometown: "Nice, France", height: "167", photo: "/players/sample.png" },
    { id: 17, firstName: "Melie", lastName: "Lacolla", number: 27, position: "Defendeur", instagram: "meelie.l08", hometown: "Monaco, Monaco", height: "165", photo: "/players/sample.png" },
    { id: 18, firstName: "Anais", lastName: "Leclerc", number: 28, position: "Defendeur", instagram: "anais_lb", hometown: "Cannes, France", height: "172", photo: "/players/sample.png" },
    { id: 19, firstName: "Pauline", lastName: "Moitrel", number: 30, position: "GK", instagram: "pauline_moitrel", hometown: "Monaco, Monaco", height: "175", photo: "/players/sample.png" },
    { id: 20, firstName: "Yrma", lastName: "Mze Issa", number: null, position: "Strike", instagram: "yrmaajr", hometown: "Monaco, Monaco", height: "168", photo: "/players/sample.png" },
    { id: 21, firstName: "Adama", lastName: "Tamba", number: null, position: "TBD", instagram: "TBD", hometown: "Monaco, Monaco", height: "N/A", photo: "/players/sample.png" },
    { id: 22, firstName: "Ramsey", lastName: "Davis", number: null, position: "Strike", instagram: "ramsdavis", hometown: "Monaco, Monaco", height: "170", photo: "/players/sample.png" },
  ].sort((a, b) => (a.number || 999) - (b.number || 999)); // Sort by jersey number

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

  const getPlayerHometown = (player: any) => {
    return player.hometown || 'N/A';
  };

  const getPlayerHeight = (player: any) => {
    if (player.height && player.height !== 'N/A') {
      return `${player.height} cm`;
    }
    return 'N/A';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Brand Colors - Mobile responsive */}
      <section className="relative h-48 sm:h-56 md:h-64 lg:h-[250px] bg-monaco-red flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat-extrabold mb-3 sm:mb-4 md:mb-6 mobile-text-shadow">{content.title}</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-95 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0 font-cinzel-decorative">{content.subtitle}</p>
        </div>
      </section>

      {/* Team Grid - Mobile responsive */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {players.map((player, index) => (
              <div 
                key={player.id}
                className="relative group cursor-pointer animate-fade-in touch-friendly"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => navigate(`/roster/${player.id}`)}
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
                            marginRight: (player.number && player.number > 9) ? '10px' : '0px'
                          }}
                        >
                          {player.number || '?'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Player Photo Placeholder - Red Background */}
                  <div className="absolute inset-0 bg-monaco-red">
                    <div className="flex items-center justify-center h-full">
                      {/* Player Photo */}
                      <img 
                        src={player.photo} 
                        alt={`${player.firstName} ${player.lastName}`}
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
                        {player.firstName.charAt(0)}{player.lastName.charAt(0)}
                      </div>
                    </div>
                  </div>
                  
                  {/* Player Info Overlay - Black Bottom Section - Mobile responsive */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black p-3 sm:p-4 md:p-6 rounded-b-lg">
                    <div className="text-white">
                      <h3 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-1 leading-tight">
                        {player.firstName}
                      </h3>
                      <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 leading-tight">
                        {player.lastName}
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

      {/* Personal List Table - Mobile responsive */}
      <section className="py-8 sm:py-12 md:py-16 bg-muted">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-cinzel-decorative-bold text-foreground text-center mb-6 sm:mb-8 md:mb-12 animate-fade-in">
            {language === 'fr' ? 'Liste Personnelle' : 'Personal List'}
          </h2>
          
          <div className="w-full">
            <Card className="overflow-hidden animate-fade-in">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold uppercase text-xs sm:text-sm">
                        {language === 'fr' ? 'Joueuse' : 'Player'}
                      </th>
                      <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold uppercase text-xs sm:text-sm">
                        {language === 'fr' ? 'Numéro' : 'Jersey #'}
                      </th>
                      <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold uppercase text-xs sm:text-sm">
                        {language === 'fr' ? 'Position' : 'Position'}
                      </th>
                      <th className="hidden sm:table-cell px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold uppercase text-xs sm:text-sm">
                        {language === 'fr' ? 'Origine' : 'Hometown'}
                      </th>
                      <th className="hidden md:table-cell px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold uppercase text-xs sm:text-sm">
                        {language === 'fr' ? 'Taille' : 'Height'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {players.map((player, index) => (
                      <tr 
                        key={player.id}
                        className={`border-b border-border hover:bg-accent/50 transition-colors duration-200 ${
                          index % 2 === 0 ? 'bg-background' : 'bg-muted/30'
                        }`}
                      >
                        <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-monaco-red rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                              <img 
                                src={player.photo} 
                                alt={`${player.firstName} ${player.lastName}`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  // Fallback to initials if image fails to load
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  const initialsSpan = target.nextElementSibling as HTMLElement;
                                  if (initialsSpan) {
                                    initialsSpan.style.display = 'block';
                                  }
                                }}
                              />
                              <span className="text-white font-bold text-xs sm:text-sm" style={{ display: 'none' }}>
                                {player.firstName.charAt(0)}{player.lastName.charAt(0)}
                              </span>
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="font-semibold text-foreground text-xs sm:text-sm md:text-base truncate">
                                {player.firstName} {player.lastName}
                              </div>
                              {/* Show hometown on mobile */}
                              <div className="text-muted-foreground text-xs sm:hidden">
                                {getPlayerHometown(player)}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
                          <span className="font-mono text-sm sm:text-base md:text-lg font-bold text-primary">
                            {player.number || '-'}
                          </span>
                        </td>
                        <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
                          <Badge className={`${getPositionColor(player.position)} text-white text-xs sm:text-sm`}>
                            {getPositionDisplay(player.position)}
                          </Badge>
                        </td>
                        <td className="hidden sm:table-cell px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-muted-foreground text-xs sm:text-sm">
                          {getPlayerHometown(player)}
                        </td>
                        <td className="hidden md:table-cell px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-muted-foreground text-xs sm:text-sm">
                          {getPlayerHeight(player)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roster;