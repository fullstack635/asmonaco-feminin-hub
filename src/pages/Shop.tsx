import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { ShoppingCart, Star, Truck, Shield, ArrowRight } from 'lucide-react';

const Shop = () => {
  const { language } = useLanguage();

  const shopContent = {
    fr: {
      title: "Boutique Officielle",
      subtitle: "Soutenez AS Monaco Football Féminin avec notre collection officielle",
      description: "Découvrez notre gamme de produits officiels et montrez votre soutien pour l'équipe. Chaque achat contribue directement au développement du club et du football féminin à Monaco.",
      featured: "Produits Vedettes",
      jerseys: "Maillots",
      accessories: "Accessoires",
      lifestyle: "Style de Vie",
      comingSoon: "Bientôt Disponible",
      addToCart: "Ajouter au Panier",
      viewAll: "Voir Tout",
      freeShipping: "Livraison Gratuite",
      freeShippingDesc: "Pour toute commande supérieure à 50€",
      authenticity: "Authenticité Garantie",
      authenticityDesc: "Produits officiels AS Monaco FF",
      fastDelivery: "Livraison Rapide",
      fastDeliveryDesc: "2-3 jours ouvrables en Europe"
    },
    en: {
      title: "Official Shop",
      subtitle: "Support AS Monaco Football Féminin with our official collection",
      description: "Discover our range of official products and show your support for the team. Every purchase directly contributes to the club's development and women's football in Monaco.",
      featured: "Featured Products",
      jerseys: "Jerseys",
      accessories: "Accessories", 
      lifestyle: "Lifestyle",
      comingSoon: "Coming Soon",
      addToCart: "Add to Cart",
      viewAll: "View All",
      freeShipping: "Free Shipping",
      freeShippingDesc: "On orders over €50",
      authenticity: "Authenticity Guaranteed",
      authenticityDesc: "Official AS Monaco FF products",
      fastDelivery: "Fast Delivery",
      fastDeliveryDesc: "2-3 business days in Europe"
    }
  };

  const content = shopContent[language];

  // Sample product data
  const featuredProducts = [
    {
      id: 1,
      name: language === 'fr' ? 'Maillot Domicile 2024/25' : 'Home Jersey 2024/25',
      price: '89.99€',
      originalPrice: '99.99€',
      image: '🏠',
      category: content.jerseys,
      rating: 4.8,
      discount: 10,
      bestseller: true
    },
    {
      id: 2,
      name: language === 'fr' ? 'Maillot Extérieur 2024/25' : 'Away Jersey 2024/25',
      price: '89.99€',
      image: '✈️',
      category: content.jerseys,
      rating: 4.9,
      bestseller: false
    },
    {
      id: 3,
      name: language === 'fr' ? 'Écharpe Officielle' : 'Official Scarf',
      price: '24.99€',
      image: '🧣',
      category: content.accessories,
      rating: 4.7,
      bestseller: false
    },
    {
      id: 4,
      name: language === 'fr' ? 'Casquette AS Monaco FF' : 'AS Monaco FF Cap',
      price: '29.99€',
      image: '🧢',
      category: content.accessories,
      rating: 4.6,
      bestseller: false
    }
  ];

  const categories = [
    {
      name: content.jerseys,
      icon: '👕',
      count: 8,
      description: language === 'fr' ? 'Maillots officiels de l\'équipe' : 'Official team jerseys'
    },
    {
      name: content.accessories,
      icon: '🎒',
      count: 15,
      description: language === 'fr' ? 'Accessoires et équipements' : 'Accessories and equipment'
    },
    {
      name: content.lifestyle,
      icon: '👔',
      count: 12,
      description: language === 'fr' ? 'Mode et style de vie' : 'Fashion and lifestyle'
    }
  ];

  const benefits = [
    {
      icon: Truck,
      title: content.freeShipping,
      description: content.freeShippingDesc
    },
    {
      icon: Shield,
      title: content.authenticity,
      description: content.authenticityDesc
    },
    {
      icon: Star,
      title: content.fastDelivery,
      description: content.fastDeliveryDesc
    }
  ];

  const ProductCard = ({ product }: { product: any }) => (
    <Card className="group overflow-hidden hover:shadow-monaco transition-all duration-300 hover:scale-105">
      <div className="relative p-6 bg-gradient-to-br from-background to-muted">
        {product.bestseller && (
          <Badge className="absolute top-2 left-2 bg-monaco-red text-white">
            {language === 'fr' ? 'Bestseller' : 'Bestseller'}
          </Badge>
        )}
        {product.discount && (
          <Badge className="absolute top-2 right-2 bg-monaco-yellow text-black">
            -{product.discount}%
          </Badge>
        )}
        
        <div className="text-6xl text-center mb-4 group-hover:scale-110 transition-transform duration-300">
          {product.image}
        </div>
        
        <div className="text-center">
          <Badge variant="secondary" className="mb-2">
            {product.category}
          </Badge>
          
          <h3 className="font-semibold text-foreground mb-2">
            {product.name}
          </h3>
          
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-monaco-yellow text-monaco-yellow' : 'text-muted-foreground'}`} 
              />
            ))}
            <span className="text-sm text-muted-foreground ml-1">
              ({product.rating})
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-lg font-bold text-primary">{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {product.originalPrice}
              </span>
            )}
          </div>
          
          <Button 
            size="sm" 
            className="w-full group shadow-sm hover:shadow-monaco transition-all duration-300"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {content.addToCart}
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-monaco">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            {content.title}
          </h1>
          <h2 className="text-2xl text-white/90 mb-6 animate-fade-in">
            {content.subtitle}
          </h2>
          <p className="text-lg text-white/90 max-w-4xl mx-auto animate-fade-in leading-relaxed">
            {content.description}
          </p>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 text-center md:text-left animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-foreground animate-fade-in">
              {content.featured}
            </h2>
            <Button variant="outline" className="group hover:scale-105 transition-all duration-300">
              {content.viewAll}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 animate-fade-in">
            {language === 'fr' ? 'Catégories' : 'Categories'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-monaco transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {category.description}
                </p>
                <Badge variant="secondary">
                  {category.count} {language === 'fr' ? 'produits' : 'products'}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {content.comingSoon}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'fr' 
                ? 'Notre boutique en ligne complète sera bientôt disponible. En attendant, vous pouvez nous contacter pour toute demande spéciale.'
                : 'Our complete online store will be available soon. In the meantime, you can contact us for any special requests.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="group shadow-monaco hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {language === 'fr' ? 'Nous Contacter' : 'Contact Us'}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="group hover:scale-105 transition-all duration-300"
              >
                {language === 'fr' ? 'S\'abonner aux Notifications' : 'Subscribe for Updates'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;