import {BanDto} from './BanDto';
import {ObjectivesDto} from './ObjectivesDto';

export interface TeamDto {
  /**
   * List of banned champions.
   */
  bans: BanDto[];

  /**
   * Team objectives stats.
   */
  objectives: ObjectivesDto;

  /**
   * Team ID (usually 100 or 200).
   */
  teamId: number;

  /**
   * Whether this team won the match.
   */
  win: boolean;
}
