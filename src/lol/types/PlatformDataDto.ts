import {StatusDto} from './StatusDto';

export interface PlatformDataDto {
  /**
   * ID
   */
  id: string;
  /**
   * Name
   */
  name: string;
  /**
   * List of locales
   */
  locales: string[];
  /**
   * List of maintenance statuses
   */
  maintenances: StatusDto[];
  /**
   * List of incident statuses
   */
  incidents: StatusDto[];
}
