import {Level} from '../types';

export interface ChallengeInfo {
  /**
   * Challenge ID
   */
  challengeId: number;

  /**
   * Percentile
   */
  percentile: number;

  /**
   * Level
   */
  level: Level;

  /**
   * Value
   */
  value: number;

  /**
   * Time Achieved for the challenge
   */
  achievedTime: number;

  /**
   * Position
   */
  position?: number;

  /**
   * Number of Players in this level
   */
  playersInLevel?: number;
}
