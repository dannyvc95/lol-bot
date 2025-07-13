import {GameCustomizationObject} from './GameCustomizationObject';
import {Perks} from './Peks';

export interface CurrentGameParticipant {
  /**
   * The ID of the champion played by this participant.
   */
  championId: number;

  /**
   * Perks/Runes Reforged Information.
   */
  perks: Perks;

  /**
   * The ID of the profile icon used by this participant.
   */
  profileIconId: number;

  /**
   * Flag indicating whether or not this participant is a bot.
   */
  bot: boolean;

  /**
   * The team ID of this participant.
   */
  teamId: number;

  /**
   * The encrypted PUUID of this participant.
   */
  puuid: string;

  /**
   * The ID of the first summoner spell used by this participant.
   */
  spell1Id: number;

  /**
   * The ID of the second summoner spell used by this participant.
   */
  spell2Id: number;

  /**
   * List of Game Customizations.
   */
  gameCustomizationObjects: GameCustomizationObject[];
}
