import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PlayerDto {
  @ApiProperty({ description: 'Player UUID' })
  id: string;

  @ApiProperty({ description: 'Player full name' })
  name: string;

  @ApiPropertyOptional({ description: 'Player role: Batsman, Bowler, All Rounder, Wicketkeeper' })
  role?: string;

  @ApiPropertyOptional({ description: 'Batting style: Right Hand Bat, Left Hand Bat' })
  batting_style?: string;

  @ApiPropertyOptional({ description: 'Bowling style' })
  bowling_style?: string;

  @ApiPropertyOptional({ description: 'Country' })
  country?: string;

  @ApiPropertyOptional({ description: 'Team UUID' })
  team_id?: string;

  @ApiPropertyOptional({ description: 'Team details (joined)' })
  team?: Record<string, any>;
}

export class CreatePlayerDto {
  @ApiProperty({ description: 'Player full name' })
  name: string;

  @ApiPropertyOptional({ description: 'Player role' })
  role?: string;

  @ApiPropertyOptional({ description: 'Batting style' })
  batting_style?: string;

  @ApiPropertyOptional({ description: 'Bowling style' })
  bowling_style?: string;

  @ApiPropertyOptional({ description: 'Country' })
  country?: string;

  @ApiPropertyOptional({ description: 'Team UUID' })
  team_id?: string;
}
