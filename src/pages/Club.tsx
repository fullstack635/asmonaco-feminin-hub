import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { History, Users, Heart, Ticket, Instagram, Mail } from 'lucide-react';

const Club = () => {
  const { language } = useLanguage();

  const clubContent = {
    fr: {
      title: "Notre Club",
      history: "Histoire du Club",
      leadership: "Direction du Club", 
      fans: "Supporters",
      tickets: "Informations Billetterie",
      historyText: `AS Monaco Football Féminin – Notre Voyage. Notre Ascension.

Bienvenue à AS Monaco Football Féminin — où l'héritage rencontre l'ambition sur les rives de la Méditerranée.

Fondé en 1976, notre club a commencé comme une initiative petite mais passionnée par les pionnières Bettina Gallo et Muriel Banaudo. Dès ces premiers jours, AS Monaco FF était destiné à la grandeur, se frayant un chemin dans la Division 1 française de haut niveau au milieu des années 1980 et obtenant plusieurs apparitions en demi-finale de Coupe de France. Nous étions une force alors — et nous nous reconstruisons pour en redevenir une.

Après une période difficile dans les ligues inférieures, notre club a commencé une reconstruction puissante. Alimentés par la détermination et la communauté, nous avons investi dans le développement des jeunes et élargi notre portée à travers la Riviera. En 2019, la section féminine avait grandi à plus de 150 joueuses licenciées, devenant un phare pour le football féminin dans la région.

En 2022, nous avons fait la une des journaux nationaux avec un parcours époustouflant jusqu'au 16e de finale de la Coupe de France, et en 2024, nous avons obtenu la promotion en Division 3 Féminine, rallumant notre parcours professionnel. Soutenus par un investissement international et l'esprit d'excellence de Monaco, nous construisons quelque chose d'audacieux — une équipe avec du cœur, du courage et la vision d'atteindre la Division 1 Féminine et au-delà.

AS Monaco FF est plus qu'un club.
Nous sommes une histoire de résurgence.
Nous sommes un foyer pour les talents émergents.
Nous sommes l'avenir du football féminin à Monaco.

Rejoignez-nous dans ce voyage. ⚽❤️🤍
#RiseWithUs #ASMonacoFF #UneÉquipeUneAmbition`,
      
      leadershipText: `Président: André‑Pierre Couffet
Directeur Sportif: Thomas Martini  
Trésorier: Julien Couffet
Co-Propriétaire Principal: Gary Ladrido
Co-Propriétaire Principal: Marcy O'Connor`,

      fansText: `❤️🤍 Restez Connectés au Cœur d'AS Monaco Football Féminin

Pour la saison 2025/26, nous voulons rapprocher encore plus nos supporters de l'équipe.

Que vous encouragiez depuis les tribunes du Sud de la France ou que vous nous suiviez de loin, c'est votre chance de faire partie du voyage. Soyez les premiers à connaître les mises à jour des matchs, le contenu exclusif et les moments en coulisses en vous inscrivant à notre newsletter officielle ou en nous suivant sur Instagram.

Nous n'avons peut-être pas encore d'adhésion officielle, mais nous construisons quelque chose de spécial — et vous en faites partie.

👉 Suivez-nous sur Instagram
📬 Inscrivez-vous à notre newsletter

Parce que cette saison, chaque supporter compte.
Ensemble, écrivons le prochain chapitre d'AS Monaco Football Féminin.
#UneÉquipeUneAmbition #ASMonacoFF`,

      ticketsText: `Informations Billetterie - Saison 2024/25

Venez vivre l'émotion du football féminin monégasque au Stade Louis II !

🎫 Tarifs:
• Adulte: 15€
• Étudiant/Senior: 10€  
• Enfant (-12 ans): 5€
• Famille (2 adultes + 2 enfants): 35€

🏟️ Accès au stade:
• Métro: Station Stade Louis II
• Bus: Lignes 5 et 6
• Parking: Disponible sur site

📞 Réservations:
• En ligne: billetterie.asm-ff.com
• Téléphone: +377 92 05 74 73
• Guichet: 2h avant le match

Les billets peuvent être retirés aux guichets du stade ou envoyés par email pour impression à domicile.`
    },
    en: {
      title: "Our Club",
      history: "Club History",
      leadership: "Club Leadership",
      fans: "Fans", 
      tickets: "Ticket Information",
      historyText: `AS Monaco Football Féminin – Our Journey. Our Rise.

Welcome to AS Monaco Football Féminin — where legacy meets ambition on the shores of the Mediterranean.

Founded in 1976, our club began as a small but passionate initiative by trailblazers Bettina Gallo and Muriel Banaudo. From those early days, AS Monaco FF was destined for greatness, making its way into France's top-tier Division 1 by the mid-1980s and earning multiple Coupe de France semi-final appearances. We were a force then — and we're building to become one again.

After a challenging period in the lower leagues, our club began a powerful rebuild. Fueled by determination and community, we invested in youth development and expanded our reach across the Riviera. By 2019, the women's section had grown to over 150 licensed players, becoming a leading light for women's football in the region.

In 2022, we made national headlines with a stunning run to the Coupe de France Round of 16, and in 2024, we earned promotion to Division 3 Féminine, reigniting our professional journey. Backed by international investment and Monaco's spirit of excellence, we are building something bold — a team with heart, grit, and the vision to reach Division 1 Féminine and beyond.

AS Monaco FF is more than a club.
We are a story of resurgence.
We are a home for rising talent.
We are the future of women's football in Monaco.

Join us on the journey. ⚽❤️🤍
#RiseWithUs #ASMonacoFF #UneÉquipeUneAmbition`,

      leadershipText: `President: André‑Pierre Couffet
Sporting Director: Thomas Martini
Treasurer: Julien Couffet
Co-Principal Owner: Gary Ladrido
Co-Principal Owner: Marcy O'Connor`,

      fansText: `❤️🤍 Stay Connected to the Heart of AS Monaco Football Féminin

For the 2025/26 season, we want to bring our supporters even closer to the team.

Whether you're cheering from the stands in the South of France or following us from afar, this is your chance to stay part of the journey. Be the first to know about match updates, exclusive content, and behind-the-scenes moments by signing up for our official newsletter or following us on Instagram.

We may not have an official membership yet, but we're building something special — and you're part of it.

👉 Follow us on Instagram
📬 Sign up for our newsletter

Because this season, every supporter counts.
Together, let's write the next chapter of AS Monaco Football Féminin.
#UneÉquipeUneAmbition #ASMonacoFF`,

      ticketsText: `Ticket Information - 2024/25 Season

Come experience the excitement of Monaco women's football at Stade Louis II!

🎫 Pricing:
• Adult: €15
• Student/Senior: €10
• Child (under 12): €5
• Family (2 adults + 2 children): €35

🏟️ Stadium Access:
• Metro: Stade Louis II Station
• Bus: Lines 5 and 6
• Parking: Available on-site

📞 Reservations:
• Online: billetterie.asm-ff.com
• Phone: +377 92 05 74 73
• Box Office: 2 hours before match

Tickets can be collected at stadium box office or sent by email for home printing.`
    }
  };

  const content = clubContent[language];

  const sections = [
    {
      id: 'history',
      title: content.history,
      icon: History,
      content: content.historyText
    },
    {
      id: 'leadership', 
      title: content.leadership,
      icon: Users,
      content: content.leadershipText
    },
    {
      id: 'fans',
      title: content.fans,
      icon: Heart,
      content: content.fansText
    },
    {
      id: 'tickets',
      title: content.tickets,
      icon: Ticket,
      content: content.ticketsText
    }
  ];

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
              ? 'Découvrez l\'histoire, la direction et la communauté qui font d\'AS Monaco FF un club unique'
              : 'Discover the history, leadership and community that make AS Monaco FF a unique club'
            }
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <Card 
                key={section.id}
                className="p-8 hover:shadow-monaco transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-monaco rounded-full flex items-center justify-center shadow-glow">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                </div>
                
                <div className="prose prose-gray max-w-none">
                  {section.content.split('\n').map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.id === 'fans' && (
                  <div className="flex gap-4 mt-6">
                    <Button className="group">
                      <Instagram className="w-4 h-4 mr-2" />
                      Instagram
                    </Button>
                    <Button variant="outline" className="group">
                      <Mail className="w-4 h-4 mr-2" />
                      Newsletter
                    </Button>
                  </div>
                )}

                {section.id === 'tickets' && (
                  <div className="flex gap-4 mt-6">
                    <Button className="group">
                      <Ticket className="w-4 h-4 mr-2" />
                      {language === 'fr' ? 'Acheter des billets' : 'Buy Tickets'}
                    </Button>
                    <Button variant="outline" className="group">
                      {language === 'fr' ? 'Plan du stade' : 'Stadium Map'}
                    </Button>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {language === 'fr' ? 'Rejoignez Notre Communauté' : 'Join Our Community'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'fr' 
                ? 'Devenez partie intégrante de l\'histoire d\'AS Monaco Football Féminin'
                : 'Become an integral part of AS Monaco Football Féminin\'s story'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group shadow-monaco hover:shadow-xl transition-all duration-300 hover:scale-105">
                {language === 'fr' ? 'Devenir Supporter' : 'Become a Supporter'}
              </Button>
              <Button variant="outline" size="lg" className="group hover:scale-105 transition-all duration-300">
                {language === 'fr' ? 'Nous Contacter' : 'Contact Us'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Club;