import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class SimulationRequestDto {
  @ApiProperty({ description: 'Runs required to win' })
  runs_required: number;

  @ApiProperty({ description: 'Balls remaining' })
  balls_remaining: number;

  @ApiProperty({ description: 'Wickets already fallen (0-9)' })
  wickets: number;

  @ApiPropertyOptional({
    description: 'Batting order player UUIDs for remaining batsmen',
    type: [String],
  })
  batting_order?: string[];
}

export class SimulationResponseDto {
  @ApiProperty({ description: 'Overall win probability (0-1)' })
  win_probability: number;

  @ApiProperty({ description: 'Number of Monte-Carlo simulations executed' })
  simulations_run: number;

  @ApiProperty({
    description: 'Result distribution breakdown',
    example: { win: 620, loss: 340, tie: 40 },
  })
  result_distribution: Record<string, number>;
}
