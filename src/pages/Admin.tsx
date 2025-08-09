import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Users, Calendar, FileText, Upload, Trash2, Edit, Plus, LogOut } from 'lucide-react';

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

interface Match {
  id: string;
  match_date: string;
  home_team: string;
  away_team: string;
  result?: string;
  status: string;
  has_tickets: boolean;
  has_youtube: boolean;
}

interface News {
  id: string;
  title_fr: string;
  title_en: string;
  content_fr: string;
  content_en: string;
  excerpt_fr?: string;
  excerpt_en?: string;
  featured_image_url?: string;
  published: boolean;
}

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [players, setPlayers] = useState<Player[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('players');

  // Form states
  const [playerForm, setPlayerForm] = useState<Partial<Player>>({});
  const [matchForm, setMatchForm] = useState<Partial<Match>>({});
  const [newsForm, setNewsForm] = useState<Partial<News>>({});
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    // Check if admin is logged in
    const isLoggedIn = localStorage.getItem('admin_logged_in');
    if (!isLoggedIn) {
      navigate('/admin/login');
      return;
    }

    loadData();
  }, [navigate]);

  const loadData = async () => {
    try {
      const [playersRes, matchesRes, newsRes] = await Promise.all([
        supabase.from('players').select('*').order('jersey_number', { ascending: true, nullsFirst: false }),
        supabase.from('matches').select('*').order('created_at', { ascending: false }),
        supabase.from('news').select('*').order('created_at', { ascending: false })
      ]);

      if (playersRes.data) setPlayers(playersRes.data);
      if (matchesRes.data) setMatches(matchesRes.data);
      if (newsRes.data) setNews(newsRes.data);
    } catch (error) {
      toast({
        title: "Error loading data",
        description: "Failed to load data from database",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_logged_in');
    navigate('/admin/login');
  };

  const handleFileUpload = async (file: File, bucket: string = 'media') => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${bucket}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "Failed to upload file",
        variant: "destructive",
      });
      return null;
    }
  };

  // Player CRUD operations
  const handlePlayerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        const { error } = await supabase
          .from('players')
          .update(playerForm)
          .eq('id', editingId);
        if (error) throw error;
        toast({ title: "Player updated successfully" });
      } else {
        const { error } = await supabase
          .from('players')
          .insert([playerForm as any]);
        if (error) throw error;
        toast({ title: "Player added successfully" });
      }
      setPlayerForm({});
      setEditingId(null);
      loadData();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save player",
        variant: "destructive",
      });
    }
  };

  const deletePlayer = async (id: string) => {
    try {
      const { error } = await supabase
        .from('players')
        .delete()
        .eq('id', id);
      if (error) throw error;
      toast({ title: "Player deleted successfully" });
      loadData();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete player",
        variant: "destructive",
      });
    }
  };

  // Match CRUD operations
  const handleMatchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        const { error } = await supabase
          .from('matches')
          .update(matchForm)
          .eq('id', editingId);
        if (error) throw error;
        toast({ title: "Match updated successfully" });
      } else {
        const { error } = await supabase
          .from('matches')
          .insert([matchForm as any]);
        if (error) throw error;
        toast({ title: "Match added successfully" });
      }
      setMatchForm({});
      setEditingId(null);
      loadData();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save match",
        variant: "destructive",
      });
    }
  };

  const deleteMatch = async (id: string) => {
    try {
      const { error } = await supabase
        .from('matches')
        .delete()
        .eq('id', id);
      if (error) throw error;
      toast({ title: "Match deleted successfully" });
      loadData();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete match",
        variant: "destructive",
      });
    }
  };

  // News CRUD operations
  const handleNewsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        const { error } = await supabase
          .from('news')
          .update(newsForm)
          .eq('id', editingId);
        if (error) throw error;
        toast({ title: "News updated successfully" });
      } else {
        const { error } = await supabase
          .from('news')
          .insert([newsForm as any]);
        if (error) throw error;
        toast({ title: "News added successfully" });
      }
      setNewsForm({});
      setEditingId(null);
      loadData();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save news",
        variant: "destructive",
      });
    }
  };

  const deleteNews = async (id: string) => {
    try {
      const { error } = await supabase
        .from('news')
        .delete()
        .eq('id', id);
      if (error) throw error;
      toast({ title: "News deleted successfully" });
      loadData();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete news",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-monaco-red"></div>
          <p className="mt-4 text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-monaco-red">AS Monaco Admin Dashboard</h1>
            <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="players" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Roster Management
            </TabsTrigger>
            <TabsTrigger value="matches" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Match Management
            </TabsTrigger>
            <TabsTrigger value="news" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              News Management
            </TabsTrigger>
          </TabsList>

          {/* Players Management */}
          <TabsContent value="players" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Add/Edit Player</CardTitle>
                <CardDescription>Manage team roster and coaching staff</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePlayerSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    value={playerForm.first_name || ''}
                    onChange={(e) => setPlayerForm({...playerForm, first_name: e.target.value})}
                    required
                  />
                  <Input
                    placeholder="Last Name"
                    value={playerForm.last_name || ''}
                    onChange={(e) => setPlayerForm({...playerForm, last_name: e.target.value})}
                    required
                  />
                  <Input
                    type="number"
                    placeholder="Jersey Number"
                    value={playerForm.jersey_number || ''}
                    onChange={(e) => setPlayerForm({...playerForm, jersey_number: parseInt(e.target.value)})}
                  />
                  <Input
                    placeholder="Position"
                    value={playerForm.position || ''}
                    onChange={(e) => setPlayerForm({...playerForm, position: e.target.value})}
                    required
                  />
                  <Input
                    placeholder="Instagram Handle"
                    value={playerForm.instagram || ''}
                    onChange={(e) => setPlayerForm({...playerForm, instagram: e.target.value})}
                  />
                  <Input
                    placeholder="Hometown"
                    value={playerForm.hometown || ''}
                    onChange={(e) => setPlayerForm({...playerForm, hometown: e.target.value})}
                  />
                  <Input
                    placeholder="Height (cm)"
                    value={playerForm.height || ''}
                    onChange={(e) => setPlayerForm({...playerForm, height: e.target.value})}
                  />
                  <Input
                    placeholder="Photo URL"
                    value={playerForm.photo_url || ''}
                    onChange={(e) => setPlayerForm({...playerForm, photo_url: e.target.value})}
                  />
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="is_coach"
                      checked={playerForm.is_coach || false}
                      onChange={(e) => setPlayerForm({...playerForm, is_coach: e.target.checked})}
                    />
                    <label htmlFor="is_coach">Is Coach/Staff</label>
                  </div>
                  <Input
                    placeholder="Specialty (for coaches)"
                    value={playerForm.specialty || ''}
                    onChange={(e) => setPlayerForm({...playerForm, specialty: e.target.value})}
                  />
                  <div className="md:col-span-2">
                    <Button type="submit" className="bg-monaco-red hover:bg-monaco-red/90">
                      {editingId ? 'Update Player' : 'Add Player'}
                    </Button>
                    {editingId && (
                      <Button
                        type="button"
                        variant="outline"
                        className="ml-2"
                        onClick={() => {
                          setEditingId(null);
                          setPlayerForm({});
                        }}
                      >
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Players List */}
            <Card>
              <CardHeader>
                <CardTitle>Current Roster ({players.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {players.map((player) => (
                    <div key={player.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">
                            {player.first_name} {player.last_name}
                          </h3>
                          {player.jersey_number && (
                            <Badge variant="outline">#{player.jersey_number}</Badge>
                          )}
                        </div>
                        <div className="flex gap-1">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              setPlayerForm(player);
                              setEditingId(player.id);
                            }}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => deletePlayer(player.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{player.position}</p>
                      {player.is_coach && player.specialty && (
                        <p className="text-sm text-blue-600">{player.specialty}</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Matches Management */}
          <TabsContent value="matches" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Add/Edit Match</CardTitle>
                <CardDescription>Manage match schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleMatchSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Match Date (e.g. SEPT. 7, 2025)"
                    value={matchForm.match_date || ''}
                    onChange={(e) => setMatchForm({...matchForm, match_date: e.target.value})}
                    required
                  />
                  <Input
                    placeholder="Home Team"
                    value={matchForm.home_team || ''}
                    onChange={(e) => setMatchForm({...matchForm, home_team: e.target.value})}
                    required
                  />
                  <Input
                    placeholder="Away Team"
                    value={matchForm.away_team || ''}
                    onChange={(e) => setMatchForm({...matchForm, away_team: e.target.value})}
                    required
                  />
                  <Input
                    placeholder="Result (optional)"
                    value={matchForm.result || ''}
                    onChange={(e) => setMatchForm({...matchForm, result: e.target.value})}
                  />
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={matchForm.status || 'upcoming'}
                    onChange={(e) => setMatchForm({...matchForm, status: e.target.value})}
                  >
                    <option value="upcoming">Upcoming</option>
                    <option value="completed">Completed</option>
                    <option value="exempt">Exempt</option>
                  </select>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={matchForm.has_tickets || false}
                        onChange={(e) => setMatchForm({...matchForm, has_tickets: e.target.checked})}
                      />
                      Has Tickets
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={matchForm.has_youtube || false}
                        onChange={(e) => setMatchForm({...matchForm, has_youtube: e.target.checked})}
                      />
                      Has YouTube
                    </label>
                  </div>
                  <div className="md:col-span-2">
                    <Button type="submit" className="bg-monaco-red hover:bg-monaco-red/90">
                      {editingId ? 'Update Match' : 'Add Match'}
                    </Button>
                    {editingId && (
                      <Button
                        type="button"
                        variant="outline"
                        className="ml-2"
                        onClick={() => {
                          setEditingId(null);
                          setMatchForm({});
                        }}
                      >
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Matches List */}
            <Card>
              <CardHeader>
                <CardTitle>Match Schedule ({matches.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {matches.map((match) => (
                    <div key={match.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{match.home_team} vs {match.away_team}</h3>
                          <p className="text-sm text-gray-600">{match.match_date}</p>
                          <div className="flex gap-2 mt-2">
                            <Badge variant={match.status === 'completed' ? 'default' : 'secondary'}>
                              {match.status}
                            </Badge>
                            {match.result && <Badge variant="outline">{match.result}</Badge>}
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              setMatchForm(match);
                              setEditingId(match.id);
                            }}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => deleteMatch(match.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* News Management */}
          <TabsContent value="news" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Add/Edit News</CardTitle>
                <CardDescription>Manage news articles</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleNewsSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Title (French)"
                      value={newsForm.title_fr || ''}
                      onChange={(e) => setNewsForm({...newsForm, title_fr: e.target.value})}
                      required
                    />
                    <Input
                      placeholder="Title (English)"
                      value={newsForm.title_en || ''}
                      onChange={(e) => setNewsForm({...newsForm, title_en: e.target.value})}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Textarea
                      placeholder="Excerpt (French)"
                      value={newsForm.excerpt_fr || ''}
                      onChange={(e) => setNewsForm({...newsForm, excerpt_fr: e.target.value})}
                      rows={3}
                    />
                    <Textarea
                      placeholder="Excerpt (English)"
                      value={newsForm.excerpt_en || ''}
                      onChange={(e) => setNewsForm({...newsForm, excerpt_en: e.target.value})}
                      rows={3}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Textarea
                      placeholder="Content (French)"
                      value={newsForm.content_fr || ''}
                      onChange={(e) => setNewsForm({...newsForm, content_fr: e.target.value})}
                      required
                      rows={6}
                    />
                    <Textarea
                      placeholder="Content (English)"
                      value={newsForm.content_en || ''}
                      onChange={(e) => setNewsForm({...newsForm, content_en: e.target.value})}
                      required
                      rows={6}
                    />
                  </div>
                  <Input
                    placeholder="Featured Image URL"
                    value={newsForm.featured_image_url || ''}
                    onChange={(e) => setNewsForm({...newsForm, featured_image_url: e.target.value})}
                  />
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="published"
                      checked={newsForm.published || false}
                      onChange={(e) => setNewsForm({...newsForm, published: e.target.checked})}
                    />
                    <label htmlFor="published">Published</label>
                  </div>
                  <Button type="submit" className="bg-monaco-red hover:bg-monaco-red/90">
                    {editingId ? 'Update News' : 'Add News'}
                  </Button>
                  {editingId && (
                    <Button
                      type="button"
                      variant="outline"
                      className="ml-2"
                      onClick={() => {
                        setEditingId(null);
                        setNewsForm({});
                      }}
                    >
                      Cancel
                    </Button>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* News List */}
            <Card>
              <CardHeader>
                <CardTitle>News Articles ({news.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {news.map((article) => (
                    <div key={article.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{article.title_en}</h3>
                          <p className="text-sm text-gray-600">{article.title_fr}</p>
                          <div className="flex gap-2 mt-2">
                            <Badge variant={article.published ? 'default' : 'secondary'}>
                              {article.published ? 'Published' : 'Draft'}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              setNewsForm(article);
                              setEditingId(article.id);
                            }}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => deleteNews(article.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;