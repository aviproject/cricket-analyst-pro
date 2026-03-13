import { Injectable, Logger } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private readonly logger = new Logger(SupabaseService.name);
  private readonly client: SupabaseClient;

  constructor() {
    const url = process.env.SUPABASE_URL;
    const key =
      process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY;

    if (!url || !key) {
      this.logger.error(
        'Supabase environment variables are not set (SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY / SUPABASE_ANON_KEY).',
      );
      throw new Error('Supabase configuration missing');
    }

    this.client = createClient(url, key, {
      auth: { persistSession: false },
    });
  }

  /** Expose raw client for advanced queries in repositories. */
  getClient(): SupabaseClient {
    return this.client;
  }

  // ─── Matches ───────────────────────────────────────────

  async getMatches() {
    const { data, error } = await this.client
      .from('matches')
      .select(
        '*, team_a:teams!team_a_id(*), team_b:teams!team_b_id(*), venue:venues!venue_id(*)',
      )
      .order('match_date', { ascending: false });

    if (error) {
      this.logger.error('Failed to fetch matches', error);
      throw error;
    }
    return data;
  }

  async getMatchById(id: string) {
    const { data, error } = await this.client
      .from('matches')
      .select(
        '*, team_a:teams!team_a_id(*), team_b:teams!team_b_id(*), venue:venues!venue_id(*)',
      )
      .eq('id', id)
      .single();

    if (error) {
      this.logger.error(`Failed to fetch match ${id}`, error);
      throw error;
    }
    return data;
  }

  // ─── Players ───────────────────────────────────────────

  async getPlayers() {
    const { data, error } = await this.client
      .from('players')
      .select('*, team:teams!team_id(*)')
      .order('name');

    if (error) {
      this.logger.error('Failed to fetch players', error);
      throw error;
    }
    return data;
  }

  async getPlayerById(id: string) {
    const { data, error } = await this.client
      .from('players')
      .select('*, team:teams!team_id(*)')
      .eq('id', id)
      .single();

    if (error) {
      this.logger.error(`Failed to fetch player ${id}`, error);
      throw error;
    }
    return data;
  }

  async getPlayerMatchStats(playerId: string) {
    const { data, error } = await this.client
      .from('player_match_stats')
      .select('*, match:matches!match_id(match_date, tournament, format)')
      .eq('player_id', playerId);

    if (error) {
      this.logger.error(`Failed to fetch stats for player ${playerId}`, error);
      throw error;
    }
    return data;
  }

  // ─── Ball Events ───────────────────────────────────────

  async getBallEvents(matchId?: string) {
    let query = this.client.from('ball_events').select('*');

    if (matchId) {
      query = query.eq('match_id', matchId);
    }

    query = query.order('over_number').order('ball_number');

    const { data, error } = await query;

    if (error) {
      this.logger.error('Failed to fetch ball_events', error);
      throw error;
    }
    return data;
  }

  // ─── Innings ───────────────────────────────────────────

  async getInningsByMatch(matchId: string) {
    const { data, error } = await this.client
      .from('innings')
      .select('*')
      .eq('match_id', matchId)
      .order('innings_number');

    if (error) {
      this.logger.error(`Failed to fetch innings for match ${matchId}`, error);
      throw error;
    }
    return data;
  }

  // ─── Venue Stats ───────────────────────────────────────

  async getVenueStats(venueId: string) {
    const { data, error } = await this.client
      .from('venue_stats')
      .select('*')
      .eq('venue_id', venueId)
      .single();

    if (error && error.code !== 'PGRST116') {
      this.logger.error(`Failed to fetch venue stats ${venueId}`, error);
      throw error;
    }
    return data;
  }

  // ─── Phase Stats ───────────────────────────────────────

  async getPlayerPhaseStats(playerId: string) {
    const { data, error } = await this.client
      .from('player_phase_stats')
      .select('*')
      .eq('player_id', playerId);

    if (error) {
      this.logger.error(`Failed to fetch phase stats for ${playerId}`, error);
      throw error;
    }
    return data;
  }

  async getBowlerPhaseStats(bowlerId: string) {
    const { data, error } = await this.client
      .from('bowler_phase_stats')
      .select('*')
      .eq('bowler_id', bowlerId);

    if (error) {
      this.logger.error(`Failed to fetch bowler stats for ${bowlerId}`, error);
      throw error;
    }
    return data;
  }
}
