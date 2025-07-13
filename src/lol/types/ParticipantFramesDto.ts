import {ParticipantFrameDto} from './ParticipantFrameDto';

export interface ParticipantFramesDto {
  /**
   * Mapping of participant IDs to their frame data.
   * Keys are participant IDs as strings from "1" to "9".
   */
  [participantId: string]: ParticipantFrameDto;
}
