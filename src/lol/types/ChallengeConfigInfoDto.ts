import {State, Tracking} from '../types';

export interface ChallengeConfigInfoDto {
  /**
   * ID
   */
  id: number;

  /**
   * Localized names
   */
  localizedNames: Record<string, Record<string, string>>;

  /**
   * State of the challenge.
   */
  state: State;

  /**
   * Tracking type of the challenge.
   */
  tracking: Tracking;

  /**
   * Start time of the challenge.
   */
  startTimestamp: number;

  /**
   * End time of the challenge.
   */
  endTimestamp: number;

  /**
   * Whether the challenge is eligible for leaderboard.
   */
  leaderboard: boolean;

  /**
   * Threshold values.
   */
  thresholds: Record<string, number>;
}
