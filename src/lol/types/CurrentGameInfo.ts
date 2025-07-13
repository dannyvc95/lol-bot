import {BannedChampion} from './BannedChampion';
import {CurrentGameParticipant} from './CurrentGameParticipant';
import {Observer} from './observer';

export interface CurrentGameInfo {
  /**
   * The ID of the game.
   */
  gameId: number;

  /**
   * The game type.
   */
  gameType: string;

  /**
   * The game start time represented in epoch milliseconds.
   */
  gameStartTime: number;

  /**
   * The ID of the map.
   */
  mapId: number;

  /**
   * The amount of time in seconds that has passed since the game started.
   */
  gameLength: number;

  /**
   * The ID of the platform on which the game is being played.
   */
  platformId: string;

  /**
   * The game mode.
   */
  gameMode: string;

  /**
   * Banned champion information.
   */
  bannedChampions: BannedChampion[];

  /**
   * The queue type (queue types are documented on the Game Constants page).
   */
  gameQueueConfigId: number;

  /**
   * The observer information.
   */
  observers: Observer;

  /**
   * The participant information.
   */
  participants: CurrentGameParticipant[];
}
