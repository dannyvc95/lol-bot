export interface EventsTimeLineDto {
  /**
   * Timestamp of the event in milliseconds.
   */
  timestamp: number;

  /**
   * Real-world timestamp of the event.
   */
  realTimestamp: number;

  /**
   * Type of event (e.g., "CHAMPION_KILL", "BUILDING_DESTROYED").
   */
  type: string;
}
