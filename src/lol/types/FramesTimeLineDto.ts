import {EventsTimeLineDto} from './EventsTimeLineDto';
import {ParticipantFramesDto} from './ParticipantFramesDto';

export interface FramesTimeLineDto {
  /**
   * List of events that occurred during this frame.
   */
  events: EventsTimeLineDto[];

  /**
   * Snapshot of participant frames at this timestamp.
   */
  participantFrames: ParticipantFramesDto;

  /**
   * Timestamp of this frame in milliseconds.
   */
  timestamp: number;
}
