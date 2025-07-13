import {ChallengeInfo} from './ChallengeInfo';
import {ChallengePoints} from './ChallengePoints';
import {PlayerClientPreferences} from './PlayerClientPreferences';

export interface PlayerInfoDto {
  /**
   * Total points achieved
   */
  totalPoints: ChallengePoints;

  /**
   * Relation of Points by Category
   */
  categoryPoints: Record<string, ChallengePoints>;

  /**
   * List of Info per Challenge
   */
  challenges: ChallengeInfo[];

  /**
   * Player Preferences
   */
  preferences: PlayerClientPreferences;
}
