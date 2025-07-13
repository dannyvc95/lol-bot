import {PerkStatsDto} from './PerkStatsDto';
import {PerkStyleDto} from './PerkStyleDto';

export interface PerksDto {
  /**
   * Perk stats such as offense, defense, flex.
   */
  statPerks: PerkStatsDto;

  /**
   * List of perk styles chosen by the player.
   */
  styles: PerkStyleDto[];
}
