/** https://developer.riotgames.com/apis#spectator-v5 */
import {RiotGamesClient} from '../client';
import {CurrentGameInfo} from '../types/CurrentGameInfo';
import {FeaturedGames} from '../types/FeaturedGames';

export class Spectator {
    constructor(private client: RiotGamesClient) { }

    /** /lol/spectator/v5/active-games/by-summoner/{encryptedPUUID} */
    async getCurrentGameInfo(encryptedPUUID: string) : Promise<CurrentGameInfo | null> {
        try {
            return await this.client.get('la1',`/lol/spectator/v5/active-games/by-summoner/${encryptedPUUID}`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }

    /** /lol/spectator/v5/featured-games */
    async getListOfFeaturedGames() : Promise<FeaturedGames | null> {
        try {
            return await this.client.get('la1','/lol/spectator/v5/featured-games');
        } catch (error) {
            console.error(error);
        }
        return null;
    }
}
