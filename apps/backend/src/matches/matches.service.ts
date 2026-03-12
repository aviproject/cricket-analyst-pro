import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class MatchesService {
  constructor(private readonly supabaseService: SupabaseService) {}

  findAll() {
    return this.supabaseService.getMatches();
  }

  findOne(id: string) {
    // Supabase will handle parsing the filter value; keep it as string here.
    return this.supabaseService.getMatches().then((matches) =>
      matches?.find((match: any) => String(match.id) === String(id)),
    );
  }
}

