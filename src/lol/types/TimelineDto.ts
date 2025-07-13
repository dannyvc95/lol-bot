import {InfoTimeLineDto} from './InfoTimeLineDto';
import {MetadataTimeLineDto} from './MetadataTimeLineDto';

export interface TimelineDto {
  /**
   * Match metadata including version and participant IDs.
   */
  metadata: MetadataTimeLineDto;

  /**
   * Match info including frames, participants and result.
   */
  info: InfoTimeLineDto;
}
