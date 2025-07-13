
import {ParticipantDto} from './ParticipantDto';
import {TeamDto} from './TeamDto';

export interface InfoDto {
  /**
   * Indicates if the game ended in termination.
   */
  endOfGameResult: string;

  /**
   * Unix timestamp for when the game is created on the game server (loading screen).
   */
  gameCreation: number;

  /**
   * Duration of the game.
   * If gameEndTimestamp is missing, value is in milliseconds (pre-11.20 patch).
   * If present, value is in seconds (post-11.20 patch).
   */
  gameDuration: number;

  /**
   * Unix timestamp when the match ends on the game server.
   */
  gameEndTimestamp: number;

  /**
   * Match ID.
   */
  gameId: number;

  /**
   * Game mode (see Riot Game Constants).
   */
  gameMode: string;

  /**
   * Name of the game.
   */
  gameName: string;

  /**
   * Unix timestamp when the match starts on the game server.
   */
  gameStartTimestamp: number;

  /**
   * Type of game.
   */
  gameType: string;

  /**
   * Game version string. First two parts indicate the patch version.
   */
  gameVersion: string;

  /**
   * Map ID (refer to Game Constants).
   */
  mapId: number;

  /**
   * List of participants in the match.
   */
  participants: ParticipantDto[];

  /**
   * Platform where the match was played.
   */
  platformId: string;

  /**
   * Queue ID (refer to Game Constants).
   */
  queueId: number;

  /**
   * List of teams.
   */
  teams: TeamDto[];

  /**
   * Tournament code used to generate the match.
   */
  tournamentCode: string;
}

