import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class MatchDto {
  @ApiProperty({ description: 'Match UUID' })
  id: string;

  @ApiProperty({ description: 'Team A UUID' })
  team_a_id: string;

  @ApiProperty({ description: 'Team B UUID' })
  team_b_id: string;

  @ApiPropertyOptional({ description: 'Venue UUID' })
  venue_id?: string;

  @ApiPropertyOptional({ description: 'Match date (YYYY-MM-DD)' })
  match_date?: string;

  @ApiPropertyOptional({ description: 'Match format: T20, ODI, Test' })
  format?: string;

  @ApiPropertyOptional({ description: 'Tournament name' })
  tournament?: string;

  @ApiPropertyOptional({ description: 'Winner team UUID' })
  winner_team_id?: string;

  // Joined relations (populated by Supabase select)
  @ApiPropertyOptional({ description: 'Team A details' })
  team_a?: Record<string, any>;

  @ApiPropertyOptional({ description: 'Team B details' })
  team_b?: Record<string, any>;

  @ApiPropertyOptional({ description: 'Venue details' })
  venue?: Record<string, any>;
}

export class CreateMatchDto {
  @ApiProperty({ description: 'Team A UUID' })
  team_a_id: string;

  @ApiProperty({ description: 'Team B UUID' })
  team_b_id: string;

  @ApiPropertyOptional({ description: 'Venue UUID' })
  venue_id?: string;

  @ApiPropertyOptional({ description: 'Match date (YYYY-MM-DD)' })
  match_date?: string;

  @ApiPropertyOptional({ description: 'Match format: T20, ODI, Test' })
  format?: string;

  @ApiPropertyOptional({ description: 'Tournament name' })
  tournament?: string;
}
