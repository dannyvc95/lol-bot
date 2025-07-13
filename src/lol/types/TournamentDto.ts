import {TournamentPhaseDto} from './TournamentPhaseDto';

export interface TournamentDto {
  /**
   * Unique identifier of the tournament.
   */
  id: number;

  /**
   * Theme identifier associated with the tournament.
   */
  themeId: number;

  /**
   * Key used for the tournament's primary name (used for localization or display).
   */
  nameKey: string;

  /**
   * Key used for the tournament's secondary name (used for localization or display).
   */
  nameKeySecondary: string;

  /**
   * List of tournament phases associated with this tournament.
   */
  schedule: TournamentPhaseDto[];
}
