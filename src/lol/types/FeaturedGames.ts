import {FeaturedGameInfo} from './FeaturedGameInfo';

export interface FeaturedGames {
  /**
   * The list of featured games.
   */
  gameList: FeaturedGameInfo[];

  /**
   * The suggested interval to wait before requesting FeaturedGames again (in milliseconds).
   */
  clientRefreshInterval: number;
}
