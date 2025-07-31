import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, ArrowLeft, Trophy } from 'lucide-react';

const PlayerDetail = () => {
  const { playerId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();

  // Sample player data
  const player = {
    id: playerId,
    firstName: "Manelle",
    lastName: "Ben Mohammed",
    number: 1,
    position: "GK",
    instagram: "maanelle_bm",
    hometown: "Monaco, Monaco",
    height: "170",
    photo: "/players/sample.png",
    age: "22",
    nationality: "Monaco",
    joinedDate: "2020",
    bio: language === 'fr' 
      ? "Manelle Ben Mohammed est une gardienne de but talentueuse qui a rejoint AS Monaco Football Féminin en 2020. Née et élevée à Monaco, elle représente parfaitement l'esprit local du club."
      : "Manelle Ben Mohammed is a talented goalkeeper who joined AS Monaco Football Féminin in 2020. Born and raised in Monaco, she perfectly represents the local spirit of the club.",
    achievements: language === 'fr' 
      ? ["Meilleure gardienne de la saison 2022-2023", "Capitaine de l'équipe U19 en 2021"]
      : ["Best Goalkeeper of the 2022-2023 Season", "Captain of the U19 team in 2021"],
    stats: { matches: "45", cleanSheets: "18", saves: "127", goalsConceded: "32" }
  };

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
      fr: { 'GK': 'Gardienne', 'Defendeur': 'Défenseure', 'Midfield': 'Milieu', 'Strike': 'Attaquante' },
      en: { 'GK': 'Goalkeeper', 'Defendeur': 'Defender', 'Midfield': 'Midfielder', 'Strike': 'Forward' }
    };
    return displays[language][position as keyof typeof displays[typeof language]] || position;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative h-[300px] bg-monaco-red flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white">
          <Button 
            variant="ghost" 
            className="absolute top-4 left-4 text-white hover:bg-white/10"
            onClick={() => navigate('/roster')}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {language === 'fr' ? 'Retour' : 'Back'}
          </Button>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{player.firstName}</h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 opacity-90">{player.lastName}</h2>
          
          <div className="flex items-center justify-center gap-4">
            <Badge className={`${getPositionColor(player.position)} text-lg md:text-xl px-4 py-2`}>
              {getPositionDisplay(player.position)}
            </Badge>
            <div className="text-2xl md:text-3xl font-bold">#{player.number}</div>
          </div>
        </div>
      </section>

      {/* Player Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column - Player Photo and Basic Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Player Photo */}
                <div className="relative mb-8">
                  <div className="aspect-[3/4] bg-monaco-red rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src={player.photo} 
                      alt={`${player.firstName} ${player.lastName}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Jersey Number Overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
                      {/* Main Number Container */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        <span 
                          className="number font-montserrat-extrabold"
                          style={{
                            fontSize: '100px',
                            color: 'white',
                            textShadow: '2px 2px 0 red, -2px -2px 0 red, 2px -2px 0 red, -2px 2px 0 red, 0 2px 0 red, 0 -2px 0 red, 2px 0 0 red, -2px 0 0 red',
                            letterSpacing: '2px',
                            lineHeight: '1',
                            marginRight: (player.number && player.number > 9) ? '10px' : '0px'
                          }}
                        >
                          {player.number}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="bg-muted rounded-lg p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {language === 'fr' ? 'Informations' : 'Information'}
                  </h3>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-muted-foreground">{language === 'fr' ? 'Âge' : 'Age'}</span>
                      <p className="text-lg font-semibold">{player.age} {language === 'fr' ? 'ans' : 'years'}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">{language === 'fr' ? 'Nationalité' : 'Nationality'}</span>
                      <p className="text-lg font-semibold">{player.nationality}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">{language === 'fr' ? 'Taille' : 'Height'}</span>
                      <p className="text-lg font-semibold">{player.height} cm</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">{language === 'fr' ? 'Ville natale' : 'Hometown'}</span>
                      <p className="text-lg font-semibold">{player.hometown}</p>
                    </div>
                  </div>

                  {/* Instagram Link */}
                  {player.instagram && player.instagram !== 'TBD' && (
                    <div className="pt-4 border-t">
                      <a 
                        href={`https://instagram.com/${player.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-lg font-semibold text-monaco-red hover:text-monaco-red/80 transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                        @{player.instagram}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Bio and Stats */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Bio Section */}
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  {language === 'fr' ? 'Biographie' : 'Biography'}
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground">{player.bio}</p>
              </div>

              {/* Stats Section */}
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  {language === 'fr' ? 'Statistiques' : 'Statistics'}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-muted rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-monaco-red mb-2">{player.stats.matches}</div>
                    <div className="text-sm text-muted-foreground">{language === 'fr' ? 'Matchs' : 'Matches'}</div>
                  </div>
                  <div className="bg-muted rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-monaco-red mb-2">{player.stats.cleanSheets}</div>
                    <div className="text-sm text-muted-foreground">{language === 'fr' ? 'Clean Sheets' : 'Clean Sheets'}</div>
                  </div>
                  <div className="bg-muted rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-monaco-red mb-2">{player.stats.saves}</div>
                    <div className="text-sm text-muted-foreground">{language === 'fr' ? 'Arrêts' : 'Saves'}</div>
                  </div>
                  <div className="bg-muted rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-monaco-red mb-2">{player.stats.goalsConceded}</div>
                    <div className="text-sm text-muted-foreground">{language === 'fr' ? 'Buts encaissés' : 'Goals Conceded'}</div>
                  </div>
                </div>
              </div>

              {/* Achievements Section */}
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  {language === 'fr' ? 'Réalisations' : 'Achievements'}
                </h3>
                <div className="space-y-4">
                  {player.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Trophy className="w-6 h-6 text-monaco-yellow flex-shrink-0" />
                      <span className="text-lg text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayerDetail; 