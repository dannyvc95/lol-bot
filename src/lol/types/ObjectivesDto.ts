import {ObjectiveDto} from './ObjectiveDto';

export interface ObjectivesDto {
  /**
   * Baron Nashor objective stats.
   */
  baron: ObjectiveDto;

  /**
   * Champion objective stats.
   */
  champion: ObjectiveDto;

  /**
   * Dragon objective stats.
   */
  dragon: ObjectiveDto;

  /**
   * Horde objective stats (used in certain game modes).
   */
  horde: ObjectiveDto;

  /**
   * Inhibitor objective stats.
   */
  inhibitor: ObjectiveDto;

  /**
   * Rift Herald objective stats.
   */
  riftHerald: ObjectiveDto;

  /**
   * Tower objective stats.
   */
  tower: ObjectiveDto;
}
