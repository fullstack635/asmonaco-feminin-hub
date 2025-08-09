import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Ticket, Calendar, MapPin, Clock, Users, ArrowRight, Phone, Globe, CreditCard } from 'lucide-react';

const Tickets = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <p className="text-lg text-muted-foreground">Coming Soon!</p>
    </div>
  );
};

export default Tickets;