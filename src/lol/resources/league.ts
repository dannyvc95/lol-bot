/** https://developer.riotgames.com/apis#league-v4 */
import {RiotGamesClient} from '../client';
import {Division, QueueType, Tier} from '../types';
import {LeagueEntryDto} from '../types/LeagueEntryDto';
import {LeagueListDto} from '../types/LeagueListDto';

export class League {
    constructor(private client: RiotGamesClient) { }

    /* /lol/league/v4/challengerleagues/by-queue/{queue} */
    async getChallengerLeagueByQueue(queue: QueueType): Promise<LeagueListDto | null> {
        try {
            return await this.client.get('la1', `/lol/league/v4/challengerleagues/by-queue/${queue}`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }

    /* /lol/league/v4/entries/by-puuid/{encryptedPUUID} */
    async getLeagueEntryByPuuid(puuid: string): Promise<LeagueEntryDto | null> {
        try {
            return await this.client.get('la1', `/lol/league/v4/entries/by-puuid/${puuid}`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }

    /* /lol/league/v4/entries/{queue}/{tier}/{division} */
    async getLeagueEntriesByQueueTierDivision(
        queue: QueueType,
        tier: Tier,
        division: Division
    ): Promise<LeagueEntryDto[] | null> {
        try {
            return await this.client.get('la1', `/lol/league/v4/entries/${queue}/${tier}/${division}`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }

    /* /lol/league/v4/grandmasterleagues/by-queue/{queue} */
    async getGrandmasterLeaguesByQueue(queue: QueueType): Promise<LeagueListDto | null> {
        try {
            return await this.client.get('la1', `/lol/league/v4/grandmasterleagues/by-queue/${queue}`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }

    /* /lol/league/v4/leagues/{leagueId} */
    async getLeagueByLeagueId(leagueId: string): Promise<LeagueListDto | null> {
        try {
            return await this.client.get('la1', `/lol/league/v4/leagues/${leagueId}`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }

    /* /lol/league/v4/masterleagues/by-queue/{queue} */
    async getMasterLeagueByQueue(queue: QueueType): Promise<LeagueListDto | null> {
        try {
            return await this.client.get('la1', `/lol/league/v4/masterleagues/by-queue/${queue}`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }
}
