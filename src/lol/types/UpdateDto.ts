import {ContentDto} from './ContentDto';

export interface UpdateDto {
  /**
   * ID
   */
  id: number;

  /**
   * Author
   */
  author: string;

  /**
   * Publish
   */
  publish: boolean;

  /**
   * Publish Location (Riot Client, Riot Status, Game)
   */
  publishLocations: string[];

  /**
   * Translations
   */
  translations: ContentDto[];

  /**
   * Created At
   */
  createdAt: string;

  /**
   * Updated At
   */
  updatedAt: string;
}
