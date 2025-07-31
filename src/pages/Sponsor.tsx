import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building, TrendingUp, Users, Trophy, ArrowRight, Phone, Mail, Globe } from 'lucide-react';

const Sponsor = () => {
  const { language } = useLanguage();

  // Form state management
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    website: '',
    interests: [] as string[],
    newsletter: '',
    hearAbout: [] as string[],
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle checkbox changes for interests and hearAbout
  const handleCheckboxChange = (field: 'interests' | 'hearAbout', value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }));
  };

  // Handle newsletter radio button change
  const handleNewsletterChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      newsletter: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create email content
      const emailSubject = encodeURIComponent('Sponsor Interest Form - AS Monaco Football Féminin');
      const emailBody = encodeURIComponent(`
Sponsor Interest Form Submission

Personal Information:
- First Name: ${formData.firstName}
- Last Name: ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}

Organization Information:
- Organization Name: ${formData.organization}
- Website: ${formData.website}

Areas of Interest:
${formData.interests.length > 0 ? formData.interests.map(interest => `- ${interest}`).join('\n') : '- None selected'}

Newsletter Subscription: ${formData.newsletter}

How did you hear about us:
${formData.hearAbout.length > 0 ? formData.hearAbout.map(source => `- ${source}`).join('\n') : '- None selected'}

Additional Information:
${formData.additionalInfo || 'None provided'}

---
This form was submitted through the AS Monaco Football Féminin website.
      `);

      // Create mailto link
      const mailtoLink = `mailto:stevenlai.contact@gmail.com?subject=${emailSubject}&body=${emailBody}`;
      
      // Open email client
      window.location.href = mailtoLink;

      // Show success message (you can replace this with a toast notification)
      alert(language === 'fr' 
        ? 'Merci ! Votre client de messagerie va s\'ouvrir avec le formulaire pré-rempli. Veuillez envoyer l\'e-mail pour finaliser votre soumission.'
        : 'Thank you! Your email client will open with the pre-filled form. Please send the email to complete your submission.'
      );

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        organization: '',
        website: '',
        interests: [],
        newsletter: '',
        hearAbout: [],
        additionalInfo: ''
      });

    } catch (error) {
      console.error('Form submission error:', error);
      alert(language === 'fr' 
        ? 'Une erreur s\'est produite. Veuillez réessayer.'
        : 'An error occurred. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const sponsorContent = {
    fr: {
      title: "Devenir Sponsor",
      subtitle: "Rejoignez-nous dans notre mission de développer le football féminin à Monaco",
      description: "Bonjour Robert ! Veuillez partager les identifiants de votre compte de domaine avec mon adresse e-mail afin que je puisse configurer correctement le formulaire « Devenir sponsor ». Comme vous le savez, Workana n'autorise pas l'échange direct d'informations de contact par messages publics. Cette méthode garantit donc la sécurité et le respect de leurs règles. Si possible, veuillez inclure vos coordonnées (adresse e-mail, numéro de téléphone ou nom d'utilisateur sur les réseaux sociaux (Telegram, par exemple)) dans mes e-mails ou mes télégrammes. Pour information, mes coordonnées sont : e-mail : stevenlai19950530@gmail.com Telegram : @Stevenlai01530",
      whySponsor: "Pourquoi Sponsoriser ASMFF?",
      packages: "Packages de Sponsoring",
      contactForm: "Formulaire d'Intérêt Sponsor",
      formDescription: "Merci de votre intérêt pour soutenir AS Monaco Football Féminin. Veuillez remplir le formulaire ci-dessous et un membre du club vous contactera.",
      firstName: "Prénom",
      lastName: "Nom",
      email: "Adresse Email",
      phone: "Numéro de Téléphone",
      organization: "Nom de l'Organisation",
      website: "Site Web de l'Organisation",
      interests: "Sélectionnez les options ci-dessous pour indiquer quels domaines d'AS Monaco Football Féminin vous intéressent pour soutenir ou en apprendre davantage.",
      newsletter: "Souhaiteriez-vous recevoir des informations sur les prochaines opportunités de sponsoring et de partenariat?",
      howHeard: "Comment avez-vous entendu parler de nous?",
      additionalInfo: "Y a-t-il des informations supplémentaires que vous aimeriez que nous sachions?",
      submit: "Soumettre",
      yes: "Oui",
      no: "Non"
    },
    en: {
      title: "Become A Sponsor",
      subtitle: "Join us in our mission to grow women's football in Monaco",
      description: "Hello, Robert! Please share the login credentials for your domain account to my email address, so I can properly set up the `Become a Sponsor` form. As you're aware, Workana does not allow direct exchange of contact information through public messages, so this method helps ensure everything remains secure and in compliance with their guidelines. If possible, kindly include your contact details—such as your email address, phone number, or social media username (e.g., Telegram)—within my email or telegram. For reference, my contact details are: Email: stevenlai19950530@gmail.com Telegram: @Stevenlai01530",
      whySponsor: "Why Sponsor ASMFF?",
      packages: "Sponsorship Packages",
      contactForm: "Sponsor Interest Form",
      formDescription: "Thank you for your interest in supporting AS Monaco Football Féminin. Please fill out the form below and a member of the club will be in touch.",
      firstName: "First Name",
      lastName: "Last Name", 
      email: "Email Address",
      phone: "Phone Number",
      organization: "Organization's Name",
      website: "Organization's Website",
      interests: "Select the options below to indicate which areas of AS Monaco Football Féminin you are interested in supporting or learning more about.",
      newsletter: "Would you like to receive information about upcoming sponsorship and partnership opportunities?",
      howHeard: "How did you hear about us?",
      additionalInfo: "Is there any additional info you would like us to know?",
      submit: "Submit",
      yes: "Yes",
      no: "No"
    }
  };

  const content = sponsorContent[language];

  const benefits = [
    {
      icon: TrendingUp,
      title: language === 'fr' ? 'Croissance du Marché' : 'Market Growth',
      description: language === 'fr' 
        ? 'Le football féminin connaît une croissance explosive. Positionnez votre marque dans ce secteur en expansion.'
        : 'Women\'s football is experiencing explosive growth. Position your brand in this expanding sector.'
    },
    {
      icon: Users,
      title: language === 'fr' ? 'Engagement Communautaire' : 'Community Engagement',
      description: language === 'fr'
        ? 'Connectez-vous avec une communauté passionnée et diversifiée de supporters et de familles.'
        : 'Connect with a passionate and diverse community of supporters and families.'
    },
    {
      icon: Trophy,
      title: language === 'fr' ? 'Excellence Sportive' : 'Sporting Excellence',
      description: language === 'fr'
        ? 'Associez votre marque à l\'excellence, à l\'ambition et aux valeurs positives du sport.'
        : 'Associate your brand with excellence, ambition and positive sporting values.'
    },
    {
      icon: Building,
      title: language === 'fr' ? 'Prestige Monaco' : 'Monaco Prestige',
      description: language === 'fr'
        ? 'Bénéficiez du prestige et de la réputation internationale de la Principauté de Monaco.'
        : 'Benefit from the prestige and international reputation of the Principality of Monaco.'
    }
  ];

  const packages = [
    {
      name: language === 'fr' ? 'Partenaire Titre' : 'Title Partner',
      price: language === 'fr' ? 'Sur demande' : 'On request',
      features: [
        language === 'fr' ? 'Logo sur tous les maillots' : 'Logo on all jerseys',
        language === 'fr' ? 'Naming rights du stade' : 'Stadium naming rights',
        language === 'fr' ? 'Présence médiatique premium' : 'Premium media presence',
        language === 'fr' ? 'Événements VIP exclusifs' : 'Exclusive VIP events'
      ],
      color: 'border-monaco-red bg-monaco-red/5'
    },
    {
      name: language === 'fr' ? 'Sponsor Principal' : 'Main Sponsor',
      price: '€25,000 - €50,000',
      features: [
        language === 'fr' ? 'Logo sur maillot d\'entraînement' : 'Logo on training kit',
        language === 'fr' ? 'Panneaux publicitaires stade' : 'Stadium advertising boards',
        language === 'fr' ? 'Mentions réseaux sociaux' : 'Social media mentions',
        language === 'fr' ? 'Billets saison inclus' : 'Season tickets included'
      ],
      color: 'border-monaco-yellow bg-monaco-yellow/5'
    },
    {
      name: language === 'fr' ? 'Sponsor Soutien' : 'Supporting Sponsor',
      price: '€5,000 - €15,000',
      features: [
        language === 'fr' ? 'Logo sur site web' : 'Logo on website',
        language === 'fr' ? 'Newsletter mentions' : 'Newsletter mentions',
        language === 'fr' ? 'Accès événements club' : 'Club events access',
        language === 'fr' ? 'Certificat de partenariat' : 'Partnership certificate'
      ],
      color: 'border-primary bg-primary/5'
    }
  ];

  const interestOptions = [
    language === 'fr' ? 'Développement du Club' : 'Club Development',
    language === 'fr' ? 'Équipements & Maillots' : 'Equipment & Teamwear',
    language === 'fr' ? 'Installations d\'Entraînement' : 'Training & Game Day Facilities',
    language === 'fr' ? 'Joueuses/Équipe' : 'Players/Team',
    language === 'fr' ? 'Marketing/Médias' : 'Marketing/Media',
    language === 'fr' ? 'Événements & Programmes Communautaires' : 'Events & Community Programs',
    language === 'fr' ? 'Autre' : 'Other'
  ];

  const hearAboutOptions = [
    language === 'fr' ? 'Actualités/Médias' : 'News/Media',
    language === 'fr' ? 'Recherche Google' : 'Google Search',
    language === 'fr' ? 'Réseaux Sociaux' : 'Social Media',
    language === 'fr' ? 'Bouche-à-oreille' : 'Word of mouth',
    language === 'fr' ? 'Autre' : 'Other'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-monaco-red">
        <div className="container mx-auto px-2 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat-extrabold text-white mb-6 animate-fade-in">
            {content.title}
          </h1>
          <p className="text-lg text-white/90 max-w-4xl mx-auto animate-fade-in leading-relaxed">
            {content.description}
          </p>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-16">
        <div className="container mx-auto px-2">
          <h2 className="text-3xl font-cinzel-decorative-bold text-foreground text-center mb-12 animate-fade-in">
            {content.whySponsor}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-monaco transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-monaco-red rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-2">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-cinzel-decorative-bold text-foreground mb-6">
                {content.contactForm}
              </h2>
              <p className="text-lg text-muted-foreground">
                {content.formDescription}
              </p>
            </div>

            <Card className="p-8 animate-fade-in">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {content.firstName} *
                    </label>
                    <Input required value={formData.firstName} onChange={(e) => handleInputChange('firstName', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {content.lastName} *
                    </label>
                    <Input required value={formData.lastName} onChange={(e) => handleInputChange('lastName', e.target.value)} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {content.email} *
                    </label>
                    <Input type="email" required value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {content.phone} *
                    </label>
                    <Input type="tel" required value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {content.organization}
                    </label>
                    <Input value={formData.organization} onChange={(e) => handleInputChange('organization', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {content.website}
                    </label>
                    <Input type="url" value={formData.website} onChange={(e) => handleInputChange('website', e.target.value)} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-4">
                    {content.interests} *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {interestOptions.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`interest-${index}`} 
                          checked={formData.interests.includes(option)} 
                          onCheckedChange={(checked) => handleCheckboxChange('interests', option, !!checked)}
                        />
                        <label htmlFor={`interest-${index}`} className="text-sm text-muted-foreground">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-4">
                    {content.newsletter} *
                  </label>
                  <div className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="newsletter-yes" 
                        checked={formData.newsletter === content.yes} 
                        onCheckedChange={() => handleNewsletterChange(content.yes)}
                      />
                      <label htmlFor="newsletter-yes" className="text-sm text-muted-foreground">
                        {content.yes}
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="newsletter-no" 
                        checked={formData.newsletter === content.no} 
                        onCheckedChange={() => handleNewsletterChange(content.no)}
                      />
                      <label htmlFor="newsletter-no" className="text-sm text-muted-foreground">
                        {content.no}
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-4">
                    {content.howHeard} *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {hearAboutOptions.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`heard-${index}`} 
                          checked={formData.hearAbout.includes(option)} 
                          onCheckedChange={(checked) => handleCheckboxChange('hearAbout', option, !!checked)}
                        />
                        <label htmlFor={`heard-${index}`} className="text-sm text-muted-foreground">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {content.additionalInfo}
                  </label>
                  <Textarea rows={4} value={formData.additionalInfo} onChange={(e) => handleInputChange('additionalInfo', e.target.value)} />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full group shadow-monaco hover:shadow-xl transition-all duration-300 hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (language === 'fr' ? 'Soumission...' : 'Submitting...') : content.submit}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsor;