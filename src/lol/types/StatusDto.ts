import {ContentDto} from './ContentDto';
import {UpdateDto} from './UpdateDto';

export interface StatusDto {
  /**
   * Unique ID of the status entry.
   */
  id: number;

  /**
   * Maintenance status (scheduled, in_progress, complete).
   */
  maintenance_status: string;

  /**
   * Incident severity (info, warning, critical).
   */
  incident_severity: string;

  /**
   * Localized titles.
   */
  titles: ContentDto[];

  /**
   * Updates related to the status.
   */
  updates: UpdateDto[];

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Archive timestamp.
   */
  archive_at: string;

  /**
   * Last update timestamp.
   */
  updated_at: string;

  /**
   * Platforms affected (windows, macos, android, ios, ps4, xbone, switch).
   */
  platforms: string[];
}
