import {MiniSeriesDto} from './MiniSeriesDto';

export interface LeagueItemDto {
  /**
   * Indicates if the player is fresh blood (new to the league).
   */
  freshBlood: boolean;

  /**
   * Number of wins on Summoner's Rift.
   */
  wins: number;

  /**
   * Information about the player's promotion series.
   */
  miniSeries: MiniSeriesDto;

  /**
   * Indicates if the player is currently inactive.
   */
  inactive: boolean;

  /**
   * Indicates if the player has been in the league for a long time.
   */
  veteran: boolean;

  /**
   * Indicates if the player is on a hot streak.
   */
  hotStreak: boolean;

  /**
   * Player's rank within the division (e.g., I, II, III).
   */
  rank: string;

  /**
   * League Points (LP) of the player.
   */
  leaguePoints: number;

  /**
   * Number of losses on Summoner's Rift.
   */
  losses: number;

  /**
   * Player's encrypted PUUID (platform unique identifier).
   */
  puuid: string;
}
