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
      subtitle: "AS Monaco Football Féminin évolue en Division 3 FFF, le troisième niveau du football féminin en France. La ligue met en valeur les talents émergents et sert d'étape clé dans le développement du jeu féminin à travers le pays.",
      positions: {
        goalkeeper: "Gardienne",
        defender: "Défenseure",
        midfielder: "Milieu",
        forward: "Attaquante"
      }
    },
    en: {
      title: "Our Team",
      subtitle: "AS Monaco Football Féminin competes in FFF Division 3, the third tier of women's football in France. The league showcases rising talent and serves as a key stepping stone in the development of the women's game across the country.",
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
      case 'gk': return 'bg-monaco-yellow text-black';
      case 'defendeur': return 'bg-monaco-red text-white';
      case 'midfield': return 'bg-monaco-yellow text-black';
      case 'strike': return 'bg-monaco-red text-white';
      default: return 'bg-muted text-foreground';
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
      {/* Header Section with Brand Colors */}
      <section className="relative h-[250px] bg-monaco-red flex items-center justify-center">
        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.title}</h1>
          <p className="text-lg md:text-xl opacity-95 max-w-4xl mx-auto px-2 leading-relaxed">{content.subtitle}</p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="px-2">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {players.map((player, index) => (
              <div 
                key={player.id}
                className="relative group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => navigate(`/roster/${player.id}`)}
              >
                {/* Player Card */}
                <div className="relative overflow-hidden rounded-lg bg-background aspect-[3/4] shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 pr-6">
                  {/* Jersey Number - Professional Sports Design */}
                  <div className="absolute top-2 right-2 z-10">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
                      {/* Main Number Container */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        <span 
                          className="number"
                          style={{
                            fontFamily: 'Arial Black, Impact, sans-serif',
                            fontSize: '100px',
                            color: 'white',
                            textShadow: '2px 2px 0 red, -2px -2px 0 red, 2px -2px 0 red, -2px 2px 0 red, 0 2px 0 red, 0 -2px 0 red, 2px 0 0 red, -2px 0 0 red',
                            fontWeight: '900',
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
                      <div className="text-white/30 text-8xl font-bold absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
                        {player.firstName.charAt(0)}{player.lastName.charAt(0)}
                      </div>
                    </div>
                  </div>
                  
                  {/* Player Info Overlay - Black Bottom Section */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black p-4 rounded-b-lg">
                    <div className="text-white">
                      <h3 className="font-bold text-lg md:text-xl mb-1 leading-tight">
                        {player.firstName}
                      </h3>
                      <h3 className="font-bold text-base md:text-lg mb-3 leading-tight">
                        {player.lastName}
                      </h3>
                      
                      <div className="flex items-center justify-between gap-2">
                        <Badge 
                          className={`${getPositionColor(player.position)} text-white text-sm md:text-base px-3 py-1 rounded-full`}
                        >
                          {getPositionDisplay(player.position)}
                        </Badge>
                        
                        {/* Instagram Link */}
                        {player.instagram && player.instagram !== 'TBD' && (
                          <a 
                            href={`https://instagram.com/${player.instagram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm md:text-base text-white/80 hover:text-white transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Instagram className="w-4 h-4" />
                            @{player.instagram}
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

      {/* Personal List Table */}
      <section className="py-16 bg-muted">
        <div className="px-64">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 animate-fade-in">
            {language === 'fr' ? 'Liste Personnelle' : 'Personal List'}
          </h2>
          
          <div className="w-full">
            <Card className="overflow-hidden animate-fade-in">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="px-6 py-4 text-left font-bold uppercase text-sm">
                        {language === 'fr' ? 'Joueuse' : 'Player'}
                      </th>
                      <th className="px-6 py-4 text-left font-bold uppercase text-sm">
                        {language === 'fr' ? 'Numéro' : 'Jersey #'}
                      </th>
                      <th className="px-6 py-4 text-left font-bold uppercase text-sm">
                        {language === 'fr' ? 'Position' : 'Position'}
                      </th>
                      <th className="px-6 py-4 text-left font-bold uppercase text-sm">
                        {language === 'fr' ? 'Origine' : 'Hometown'}
                      </th>
                      <th className="px-6 py-4 text-left font-bold uppercase text-sm">
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
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-monaco-red rounded-full flex items-center justify-center overflow-hidden">
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
                              <span className="text-white font-bold text-sm" style={{ display: 'none' }}>
                                {player.firstName.charAt(0)}{player.lastName.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <div className="font-semibold text-foreground">
                                {player.firstName} {player.lastName}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-mono text-lg font-bold text-primary">
                            {player.number || '-'}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <Badge className={`${getPositionColor(player.position)} text-white`}>
                            {getPositionDisplay(player.position)}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">
                          {getPlayerHometown(player)}
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">
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

      {/* Competition Info */}
      <section className="py-16 bg-background">
        <div className="px-2 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {language === 'fr' ? 'Division 3 FFF' : 'FFF Division 3'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'fr' 
                ? 'Notre équipe représente fièrement Monaco dans la Division 3 du championnat féminin français, un niveau compétitif qui nous permet de développer nos talents et de viser une promotion vers les divisions supérieures.'
                : 'Our team proudly represents Monaco in the French women\'s Division 3 championship, a competitive level that allows us to develop our talents and aim for promotion to higher divisions.'
              }
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <p className="text-muted-foreground">
                  {language === 'fr' ? 'Joueuses licenciées' : 'Licensed Players'}
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2024</div>
                <p className="text-muted-foreground">
                  {language === 'fr' ? 'Promotion en D3' : 'Promoted to D3'}
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2022</div>
                <p className="text-muted-foreground">
                  {language === 'fr' ? '16e de finale Coupe' : 'Cup Round of 16'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roster;