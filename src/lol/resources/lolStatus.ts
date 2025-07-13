/** https://developer.riotgames.com/apis#lol-status-v4 */
import {RiotGamesClient} from '../client';
import {PlatformDataDto} from '../types/PlatformDataDto';

export class LolStatus {
    constructor(private client: RiotGamesClient) {}

    /** /lol/status/v4/platform-data */
    async getLolStatus(): Promise<PlatformDataDto | null> {
        try {
            return await this.client.get('la1','/lol/status/v4/platform-data');
        } catch (error) {
            console.error(error);
        }
        return null;
    }
}
