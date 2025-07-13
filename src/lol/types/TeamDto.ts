import {PlayerDto} from './PlayerDto';

export interface TeamDto {
  /**
   * Unique identifier of the team.
   */
  id: string;

  /**
   * Identifier of the tournament the team belongs to.
   */
  tournamentId: number;

  /**
   * Full name of the team.
   */
  name: string;

  /**
   * Icon ID associated with the team.
   */
  iconId: number;

  /**
   * Tier level of the team.
   */
  tier: number;

  /**
   * Summoner ID of the team captain.
   */
  captain: string;

  /**
   * Short abbreviation of the team name.
   */
  abbreviation: string;

  /**
   * List of players who are members of the team.
   */
  players: PlayerDto[];
}
