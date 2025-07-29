import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const News = () => {
  const { language } = useLanguage();

  const newsContent = {
    fr: {
      title: "Actualités",
      subtitle: "Restez au courant avec ASMFF. Ne manquez jamais un moment ! Des résultats de matchs passionnants et des mises à jour exclusives sur les joueuses au contenu en coulisses et aux annonces du club — c'est votre foyer pour tout ce qui concerne AS Monaco Football Féminin. Revenez souvent et restez connectés au cœur de l'équipe. Parce que chaque histoire commence ici.",
      latest: "Dernières actualités",
      readMore: "Lire la suite"
    },
    en: {
      title: "News",
      subtitle: "Stay in the Know with ASMFF. Never miss a moment! From thrilling match results and exclusive player updates to behind-the-scenes content and club announcements — this is your home for all things AS Monaco Football Féminin. Check back often and stay connected to the heart of the team. Because every story starts here.",
      latest: "Latest News",
      readMore: "Read more"
    }
  };

  const content = newsContent[language];

  // Sample news articles
  const newsArticles = [
    {
      id: 1,
      title: language === 'fr' ? 'Promotion historique en Division 3' : 'Historic Promotion to Division 3',
      summary: language === 'fr' 
        ? 'AS Monaco Football Féminin réalise son rêve de promotion après une saison exceptionnelle...'
        : 'AS Monaco Football Féminin achieves their promotion dream after an exceptional season...',
      date: '2024-06-15',
      category: language === 'fr' ? 'Club' : 'Club',
      featured: true
    },
    {
      id: 2,
      title: language === 'fr' ? 'Nouveaux investisseurs internationaux' : 'New International Investors',
      summary: language === 'fr'
        ? 'Le club accueille de nouveaux partenaires financiers pour soutenir son développement...'
        : 'The club welcomes new financial partners to support its development...',
      date: '2024-05-20',
      category: language === 'fr' ? 'Business' : 'Business',
      featured: false
    },
    {
      id: 3,
      title: language === 'fr' ? 'Académie: Nouvelles installations' : 'Academy: New Facilities',
      summary: language === 'fr'
        ? 'Inauguration des nouveaux terrains d\'entraînement pour les jeunes joueuses...'
        : 'Inauguration of new training grounds for young players...',
      date: '2024-05-10',
      category: language === 'fr' ? 'Académie' : 'Academy',
      featured: false
    },
    {
      id: 4,
      title: language === 'fr' ? 'Parcours en Coupe de France' : 'French Cup Journey',
      summary: language === 'fr'
        ? 'Retour sur le parcours épique de 2022 qui a marqué l\'histoire du club...'
        : 'Looking back at the epic 2022 journey that marked the club\'s history...',
      date: '2024-04-25',
      category: language === 'fr' ? 'Match' : 'Match',
      featured: false
    },
    {
      id: 5,
      title: language === 'fr' ? 'Partenariat avec la communauté locale' : 'Partnership with Local Community',
      summary: language === 'fr'
        ? 'AS Monaco FF lance de nouveaux programmes de développement communautaire...'
        : 'AS Monaco FF launches new community development programs...',
      date: '2024-04-15',
      category: language === 'fr' ? 'Communauté' : 'Community',
      featured: false
    },
    {
      id: 6,
      title: language === 'fr' ? 'Recrutement saison 2024/25' : '2024/25 Season Recruitment',
      summary: language === 'fr'
        ? 'Le club renforce son effectif avec de nouveaux talents prometteurs...'
        : 'The club strengthens its squad with promising new talents...',
      date: '2024-04-01',
      category: language === 'fr' ? 'Transferts' : 'Transfers',
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'club': return 'bg-primary';
      case 'match': return 'bg-monaco-red';
      case 'academy':
      case 'académie': return 'bg-monaco-yellow text-black';
      case 'business': return 'bg-accent';
      case 'community':
      case 'communauté': return 'bg-secondary';
      case 'transfers':
      case 'transferts': return 'bg-muted';
      default: return 'bg-muted';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return language === 'fr' 
      ? date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-monaco">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            {content.title}
          </h1>
          <p className="text-lg text-white/90 max-w-4xl mx-auto animate-fade-in leading-relaxed">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center animate-fade-in">
              {language === 'fr' ? 'À la Une' : 'Featured Story'}
            </h2>
            
            <Card className="max-w-4xl mx-auto p-8 hover:shadow-monaco transition-all duration-300 animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <Badge className={`${getCategoryColor(featuredArticle.category)} text-white`}>
                  {featuredArticle.category}
                </Badge>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(featuredArticle.date)}</span>
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {featuredArticle.title}
              </h3>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {featuredArticle.summary}
              </p>
              
              <Button className="group shadow-monaco hover:shadow-xl transition-all duration-300 hover:scale-105">
                {content.readMore}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Card>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center animate-fade-in">
            {content.latest}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {regularArticles.map((article, index) => (
              <Card 
                key={article.id}
                className="p-6 hover:shadow-monaco transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Badge className={`${getCategoryColor(article.category)} text-white`}>
                    {article.category}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                  {article.summary}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="group text-primary hover:text-primary">
                    {content.readMore}
                    <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {language === 'fr' ? 'Restez Informés' : 'Stay Informed'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'fr' 
                ? 'Abonnez-vous à notre newsletter pour recevoir les dernières actualités directement dans votre boîte mail'
                : 'Subscribe to our newsletter to receive the latest news directly in your inbox'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder={language === 'fr' ? 'Votre email' : 'Your email'}
                className="flex-1 px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="shadow-monaco hover:shadow-xl transition-all duration-300 hover:scale-105">
                {language === 'fr' ? 'S\'abonner' : 'Subscribe'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;