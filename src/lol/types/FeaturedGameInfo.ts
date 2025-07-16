import {BannedChampion} from './BannedChampion';
import {Observer} from './observer';
import {Participant} from './Participant';

export interface FeaturedGameInfo {
  /**
   * The game mode.
   * (Legal values: CLASSIC, ODIN, ARAM, TUTORIAL, ONEFORALL, ASCENSION, FIRSTBLOOD, KINGPORO)
   */
  gameMode: string;

  /**
   * The amount of time in seconds that has passed since the game started.
   */
  gameLength: number;

  /**
   * The ID of the map.
   */
  mapId: number;

  /**
   * The game type.
   * (Legal values: CUSTOM_GAME, MATCHED_GAME, TUTORIAL_GAME)
   */
  gameType: string;

  /**
   * Banned champion information.
   */
  bannedChampions: BannedChampion[];

  /**
   * The ID of the game.
   */
  gameId: number;

  /**
   * The observer information.
   */
  observers: Observer;

  /**
   * The queue type (queue types are documented on the Game Constants page).
   */
  gameQueueConfigId: number;

  /**
   * The participant information.
   */
  participants: Participant[];

  /**
   * The ID of the platform on which the game is being played.
   */
  platformId: string;
}
