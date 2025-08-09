-- Create tables for managing website content

-- Players table
CREATE TABLE public.players (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name text NOT NULL,
  last_name text NOT NULL,
  jersey_number integer,
  position text NOT NULL,
  instagram text,
  hometown text,
  height text,
  photo_url text,
  is_coach boolean DEFAULT false,
  specialty text, -- for coaches
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Matches table  
CREATE TABLE public.matches (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  match_date text NOT NULL,
  home_team text NOT NULL,
  away_team text NOT NULL,
  result text,
  status text DEFAULT 'upcoming', -- upcoming, completed, exempt
  has_tickets boolean DEFAULT false,
  has_youtube boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- News table
CREATE TABLE public.news (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title_fr text NOT NULL,
  title_en text NOT NULL,
  content_fr text NOT NULL,
  content_en text NOT NULL,
  excerpt_fr text,
  excerpt_en text,
  featured_image_url text,
  published boolean DEFAULT false,
  published_at timestamp with time zone,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Admin users table
CREATE TABLE public.admin_users (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  name text NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.players ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Players are viewable by everyone" ON public.players
  FOR SELECT USING (true);

CREATE POLICY "Matches are viewable by everyone" ON public.matches
  FOR SELECT USING (true);

CREATE POLICY "Published news are viewable by everyone" ON public.news
  FOR SELECT USING (published = true);

-- Create policies for admin management (we'll implement admin auth separately)
CREATE POLICY "Admins can manage players" ON public.players
  FOR ALL USING (true);

CREATE POLICY "Admins can manage matches" ON public.matches
  FOR ALL USING (true);

CREATE POLICY "Admins can manage news" ON public.news
  FOR ALL USING (true);

CREATE POLICY "Admins can manage admin users" ON public.admin_users
  FOR ALL USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_players_updated_at BEFORE UPDATE ON public.players
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_matches_updated_at BEFORE UPDATE ON public.matches
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_news_updated_at BEFORE UPDATE ON public.news
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_admin_users_updated_at BEFORE UPDATE ON public.admin_users
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample players data from the existing static data
INSERT INTO public.players (first_name, last_name, jersey_number, position, instagram, hometown, height, photo_url) VALUES
('Manelle', 'Ben Mohammed', 1, 'GK', 'maanelle_bm', 'Monaco, Monaco', '175', '/photo/Manelle_Ben_Mohamed.jpg'),
('Manon', 'Frey', 2, 'Defendeur', 'manfoot_al1', 'Nice, France', '165', '/photo/Manon_Frey.jpg'),
('Elise', 'Gaucher', 3, 'Defendeur', 'elise.gaucher', 'Cannes, France', '168', '/photo/Elise_Gaucher.jpg'),
('Julie', 'Lievremont', 4, 'Defendeur', 'julie_lvmt', 'Monaco, Monaco', '172', '/photo/Julie_Lieveremont.jpg'),
('Solène', 'Noizat', 5, 'Defendeur', 'solene.noizat', 'Menton, France', '169', '/photo/Solene_Noizat.jpg'),
('Lina', 'Chabanne', 6, 'Midfield', 'linaachabane22', 'Monaco, Monaco', '166', '/photo/Lina_Chabane.jpg'),
('Maureen', 'Bigot', 7, 'Midfield', 'bigotmaureen', 'Antibes, France', '164', '/photo/Maureen_Bigot.jpg'),
('Jade', 'Gaiffe', 8, 'Midfield', 'jadegatffe_', 'Monaco, Monaco', '167', '/photo/Jade_Gaiffe.jpg'),
('Marie', 'Lextrayt', 9, 'Strike', 'marie_lextrayt', 'Nice, France', '170', '/photo/Marie_Lextrayt.jpg'),
('Laure', 'Robert', 10, 'Defendeur', 'laure_robert_4', 'Monaco, Monaco', '171', '/photo/Laure_Robert.jpg'),
('Manon', 'Issert', 14, 'Midfield', 'TBD', 'Cannes, France', '165', '/photo/Manon_Issert.jpg'),
('Enola', 'Dumontet', 18, 'Midfield', 'userrr.83', 'Monaco, Monaco', '168', '/photo/Enola_Dumontet.jpg'),
('Ines', 'Koré', 20, 'Strike', 'kore_ines', 'Nice, France', '169', '/photo/sample.png'),
('Fatoumata', 'Baldé', 21, 'Strike', 'fatoudinho_b', 'Monaco, Monaco', '166', '/photo/Fatoumata_Balde.jpg'),
('Salma', 'Zeitouni', 22, 'Defendeur', 'salma_zei', 'Monaco, Monaco', '170', '/photo/Salma_Zeitouni.jpg'),
('Chelsea', 'Abrin', 26, 'Strike', 'chelsea_abrin', 'Nice, France', '167', '/photo/Chelsea_Abrin.jpg'),
('Melie', 'Lacolla', 27, 'Defendeur', 'meelie.l08', 'Monaco, Monaco', '165', '/photo/Melie_Iacolla.jpg'),
('Anais', 'Leclerc', 28, 'Defendeur', 'anais_lb', 'Cannes, France', '172', '/photo/Anaia_Leclerc.jpg'),
('Pauline', 'Moitrel', 30, 'GK', 'pauline_moitrel', 'Monaco, Monaco', '175', '/photo/Pauline_Moitrel.jpg'),
('Yrma', 'Mze Issa', 19, 'Strike', 'yrmaajr', 'Monaco, Monaco', '168', '/photo/Yrma_Mze_Issa.jpg'),
('Adama', 'Tamba', NULL, 'TBD', 'TBD', 'Monaco, Monaco', 'N/A', '/photo/sample.png'),
('Ramsey', 'Davis', 31, 'Strike', 'ramsdavis', 'Monaco, Monaco', '170', '/photo/Ramsey_David.jpg');

-- Insert coaching staff
INSERT INTO public.players (first_name, last_name, position, hometown, photo_url, is_coach, specialty) VALUES
('Chloé', 'Rochetaing', 'Coach', 'Monaco', '/photo/Chloe_Rochetaing.jpg', true, 'Head Coach'),
('Soriana', 'Constant', 'Coach', 'Monaco', '/photo/sample.png', true, 'Assistant Coach'),
('Jean Christophe', 'Deleau', 'Coach', 'Monaco', '/photo/Jean_Christophe_Deleau.jpg', true, 'Goalkeeper Coach'),
('Antoine', 'Briançon', 'Coach', 'Monaco', '/photo/Antoine_Briancon.jpg', true, 'Fitness Coach'),
('Julian', 'Garber', 'Coach', 'Monaco', '/photo/sample.png', true, 'Video Analyst'),
('Maria', 'Rochetaing', 'Coach', 'Monaco', '/photo/sample.png', true, 'Team Manager');

-- Insert sample matches from the existing static data  
INSERT INTO public.matches (match_date, home_team, away_team, status, has_tickets, has_youtube) VALUES
('SEPT. 7, 2025', 'AS Monaco Football Féminin', 'GIRONDINS BORDEAUX', 'completed', false, true),
('SEPT. 14, 2025', 'ALC LONGVIC', 'AS Monaco Football Féminin', 'upcoming', true, false),
('SEPT. 21, 2025', 'AS Monaco Football Féminin', 'AS CANNES', 'upcoming', true, false),
('SEPT. 28, 2025', 'AS CHATENOY LE ROYAL', 'AS Monaco Football Féminin', 'upcoming', true, false),
('OCT. 5, 2025', 'AS Monaco Football Féminin', 'CLERMONT FOOT 63', 'upcoming', true, false);

-- Insert sample news
INSERT INTO public.news (title_fr, title_en, content_fr, content_en, excerpt_fr, excerpt_en, published) VALUES
('Bienvenue à la nouvelle saison', 'Welcome to the new season', 'Nous sommes ravis de commencer une nouvelle saison avec AS Monaco Football Féminin...', 'We are excited to start a new season with AS Monaco Football Féminin...', 'Une nouvelle saison commence', 'A new season begins', true),
('Nouveau partenaire rejoint le club', 'New partner joins the club', 'Nous sommes fiers d''annoncer un nouveau partenaire...', 'We are proud to announce a new partner...', 'Nouveau partenariat annoncé', 'New partnership announced', true);

-- Create storage bucket for media uploads
INSERT INTO storage.buckets (id, name, public) VALUES ('media', 'media', true);

-- Create storage policies for media uploads
CREATE POLICY "Media files are publicly accessible" ON storage.objects
  FOR SELECT USING (bucket_id = 'media');

CREATE POLICY "Admins can upload media files" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'media');

CREATE POLICY "Admins can update media files" ON storage.objects
  FOR UPDATE USING (bucket_id = 'media');

CREATE POLICY "Admins can delete media files" ON storage.objects
  FOR DELETE USING (bucket_id = 'media');