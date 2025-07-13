import {FramesTimeLineDto} from './FramesTimeLineDto';
import {ParticipantTimeLineDto} from './ParticipantTimeLineDto';

export interface InfoTimeLineDto {
  /**
   * Result of the game ending (e.g., "terminated").
   */
  endOfGameResult: string;

  /**
   * Interval in milliseconds between frames.
   */
  frameInterval: number;

  /**
   * Unique game ID.
   */
  gameId: number;

  /**
   * List of participants in the timeline.
   */
  participants: ParticipantTimeLineDto[];

  /**
   * List of timeline frames.
   */
  frames: FramesTimeLineDto[];
}
