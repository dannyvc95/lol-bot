export type QueueType =
  | 'RANKED_SOLO_5x5'
  | 'RANKED_TFT'
  | 'RANKED_FLEX_SR'
  | 'RANKED_FLEX_TT';

export type Tier =
  | 'IRON'
  | 'BRONZE'
  | 'SILVER'
  | 'GOLD'
  | 'PLATINUM'
  | 'EMERALD'
  | 'DIAMOND'
  | 'MASTER'
  | 'GRANDMASTER'
  | 'CHALLENGER';

export type Division = 'I' | 'II' | 'III' | 'IV';

export type MatchType = 'ranked' | 'normal' | 'tourney' | 'tutorial';

export type Platforms = 'WINDOWS' | 'MACOS' | 'ANDROID' | 'IOS' | 'PS4' | 'XBONE' | 'SWITCH';

export type PublishLocations = 'RIOTCLIENT' | 'RIOTSTATUS' | 'GAME';

export type IncidentSeverity = 'INFO' | 'WARNING' | 'CRITICAL';

export type MaintenanceStatus = 'SCHEDULED' | 'INPROGRESS' | 'COMPLETE';

export type State =
  | 'DISABLED'  /** Not visible and not calculated */
  | 'HIDDEN'    /** Not visible, but calculated */
  | 'ENABLED'   /** Visible and calculated */
  | 'ARCHIVED'; /** Visible, but not calculated */

export type Tracking =
  | 'LIFETIME' /** Stats are incremented without reset */
  | 'SEASON';  /** Stats are accumulated by season and reset at the beginning of new season */

export type Level =
  | 'NONE'
  | 'IRON'
  | 'BRONZE'
  | 'SILVER'
  | 'GOLD'
  | 'PLATINUM'
  | 'DIAMOND'
  | 'MASTER'
  | 'GRANDMASTER'
  | 'CHALLENGER';
