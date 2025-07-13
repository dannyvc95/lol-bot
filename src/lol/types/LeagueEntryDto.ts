import {Division, QueueType, Tier} from '../types';
import {MiniSeriesDto} from './MiniSeriesDto';

export interface LeagueEntryDto {
  /**
   * ID of the league the player belongs to.
   */
  leagueId: string;

  /**
   * Encrypted summoner ID of the player.
   */
  summonerId: string;

  /**
   * Encrypted PUUID of the player.
   */
  puuid: string;

  /**
   * Type of ranked queue.
   */
  queueType: QueueType;

  /**
   * Tier of the player (e.g., IRON, BRONZE, SILVER, etc.).
   */
  tier: Tier;

  /**
   * Division within the tier (e.g., I, II, III, IV).
   */
  rank: Division;

  /**
   * League Points (LP) the player has in this rank.
   */
  leaguePoints: number;

  /**
   * Number of wins.
   */
  wins: number;

  /**
   * Number of losses.
   */
  losses: number;

  /**
   * Whether the player is on a hot streak.
   */
  hotStreak: boolean;

  /**
   * Whether the player is a veteran in this league.
   */
  veteran: boolean;

  /**
   * Whether the player is considered fresh blood (new to the league).
   */
  freshBlood: boolean;

  /**
   * Whether the player is currently inactive.
   */
  inactive: boolean;

  /**
   * Mini series data if the player is in promotion series.
   */
  miniSeries?: MiniSeriesDto;
}
