import {RewardConfigDto} from './RewardConfigDto';

export interface NextSeasonMilestonesDto {
  /**
   * Require Grade Counts
   */
  requireGradeCounts: object;

  /**
   * Reward Marks
   */
  rewardMarks: number;

  /**
   * Bonus
   */
  bonus: boolean;

  /**
   * Reward Configuration
   */
  rewardConfig: RewardConfigDto;
}
