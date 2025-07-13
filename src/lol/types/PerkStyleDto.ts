import {PerkStyleSelectionDto} from './PerkStyleSelectionDto';

export interface PerkStyleDto {
  /**
   * Description of the perk style (e.g., primary, secondary).
   */
  description: string;

  /**
   * List of selected perks within this style.
   */
  selections: PerkStyleSelectionDto[];

  /**
   * Style ID.
   */
  style: number;
}
