import {DeletedTeam} from './deletedTeam';
import {Entity} from './entity';
import {TeamsAppSettings} from './teamsAppSettings';
import {WorkforceIntegration} from './workforceIntegration';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Teamwork extends Entity, Parsable {
    /**
     * The deleted team.
     */
    deletedTeams?: DeletedTeam[] | undefined;
    /**
     * The teamsAppSettings property
     */
    teamsAppSettings?: TeamsAppSettings | undefined;
    /**
     * The workforceIntegrations property
     */
    workforceIntegrations?: WorkforceIntegration[] | undefined;
}
