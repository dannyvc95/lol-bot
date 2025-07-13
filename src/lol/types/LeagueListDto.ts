import {QueueType, Tier} from '../types';
import {LeagueItemDto} from './LeagueItemDto';

export interface LeagueListDto {
  /**
   * Identifier for the league.
   */
  leagueId: string;

  /**
   * List of entries in the league.
   */
  entries: LeagueItemDto[];

  /**
   * Tier of the league (e.g., GOLD, PLATINUM).
   */
  tier: Tier;

  /**
   * Name of the league.
   */
  name: string;

  /**
   * Queue type (e.g., RANKED_SOLO_5x5).
   */
  queue: QueueType;
}
