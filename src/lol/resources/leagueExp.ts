/** https://developer.riotgames.com/apis#league-exp-v4 */
import {RiotGamesClient} from '../client';
import {Division, QueueType, Tier} from '../types';
import {LeagueEntryDto} from '../types/LeagueEntryDto';

export class LeagueExp {
    constructor(private client: RiotGamesClient) { }

    /** /lol/league-exp/v4/entries/{queue}/{tier}/{division} */
    async getAllLeagueEntries(queue: QueueType, tier: Tier, division: Division, page?: number) :
    Promise<Set<LeagueEntryDto> | null> {
        try {
            return await this.client.get('la1',
                `/lol/league-exp/v4/entries/${queue}/${tier}/${division}${page ? `?page=${page}` : ''}`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }
}
