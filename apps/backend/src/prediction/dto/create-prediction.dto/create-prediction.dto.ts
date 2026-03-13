import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class WinProbabilityRequestDto {
  @ApiProperty({ description: 'Runs still needed to win' })
  runs_required: number;

  @ApiProperty({ description: 'Balls remaining in the innings' })
  balls_remaining: number;

  @ApiProperty({ description: 'Wickets fallen so far (0-9)' })
  wickets: number;

  @ApiPropertyOptional({ description: 'Current run rate' })
  current_run_rate?: number;

  @ApiPropertyOptional({ description: 'Required run rate to win' })
  required_run_rate?: number;
}

export class WinProbabilityResponseDto {
  @ApiProperty({ description: 'Predicted win probability (0-1)' })
  win_probability: number;

  @ApiProperty({ description: 'Confidence level of prediction (0-1)' })
  confidence: number;
}
