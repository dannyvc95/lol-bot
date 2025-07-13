import {InfoDto} from './InfoDto';
import {MetadataDto} from './MetadataDto';

export interface MatchDto {
  /**
   * Match metadata.
   */
  metadata: MetadataDto;

  /**
   * Match info.
   */
  info: InfoDto;
}
