/** https://developer.riotgames.com/apis#clash-v1 */
import {RiotGamesClient} from '../client';
import {PlayerDto} from '../types/PlayerDto';
import {TeamDto} from '../types/TeamDto';
import {TournamentDto} from '../types/TournamentDto';

export class Clash {
    constructor(private client: RiotGamesClient) { }

    /** /lol/clash/v1/players/by-puuid/{puuid} */
    async getPlayersByPuuid(puuid: string): Promise<PlayerDto[] | null> {
        try {
            return await this.client.get('la1',`/lol/clash/v1/players/by-puuid/${puuid}`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }

    /** /lol/clash/v1/teams/{teamId} */
    async getTeamByID(teamId: string): Promise<TeamDto | null> {
        try {
            return await this.client.get('la1',`/lol/clash/v1/teams/${teamId}`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }

    /** /lol/clash/v1/tournaments */
    async getAllActiveOrUpcomingTournaments(): Promise<TournamentDto[] | null> {
        try {
            return await this.client.get('la1','/lol/clash/v1/tournaments');
        } catch (error) {
            console.error(error);
        }
        return null;
    }


    /** /lol/clash/v1/tournaments/by-team/{teamId} */
    async getTournamentByTeamID(teamId: string): Promise<TournamentDto | null> {
        try {
            return await this.client.get('la1',`/lol/clash/v1/tournaments/by-team/${teamId}`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }

    /** /lol/clash/v1/tournaments/{tournamentId} */
    async getTournamentByID(tournamentId: string): Promise<TournamentDto | null> {
        try {
            return await this.client.get('la1',`/lol/clash/v1/tournaments/${tournamentId}`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }
}
