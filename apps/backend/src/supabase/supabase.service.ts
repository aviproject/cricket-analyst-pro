import { Injectable, Logger } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private readonly logger = new Logger(SupabaseService.name);
  private readonly client: SupabaseClient;

  constructor() {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY;

    if (!url || !key) {
      this.logger.error('Supabase environment variables are not set (SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY / SUPABASE_ANON_KEY).');
      throw new Error('Supabase configuration missing');
    }

    this.client = createClient(url, key, {
      auth: {
        persistSession: false,
      },
    });
  }

  /**
   * Query all matches or provide a simple filter.
   */
  async getMatches() {
    const { data, error } = await this.client.from('matches').select('*');

    if (error) {
      this.logger.error('Failed to fetch matches from Supabase', error);
      throw error;
    }

    return data;
  }

  /**
   * Query all players.
   */
  async getPlayers() {
    const { data, error } = await this.client.from('players').select('*');

    if (error) {
      this.logger.error('Failed to fetch players from Supabase', error);
      throw error;
    }

    return data;
  }

  /**
   * Query ball events, optionally filtered by match_id.
   */
  async getBallEvents(matchId?: string | number) {
    let query = this.client.from('ball_events').select('*');

    if (matchId !== undefined) {
      query = query.eq('match_id', matchId);
    }

    const { data, error } = await query;

    if (error) {
      this.logger.error('Failed to fetch ball_events from Supabase', error);
      throw error;
    }

    return data;
  }
}

