import {Level} from '../types';

export interface ChallengePoints {
  /**
   * Level
   */
  level: Level;

  /**
   * Current Challenge points
   */
  current: number;

  /**
   * Maximun Points for the Challenge
   */
  max: number;

  /**
   * Percentile
   */
  percentile: number;
}
