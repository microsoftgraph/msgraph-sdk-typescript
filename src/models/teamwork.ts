import type {DeletedTeam} from './deletedTeam';
import type {Entity} from './entity';
import type {TeamsAppSettings} from './teamsAppSettings';
import type {WorkforceIntegration} from './workforceIntegration';
import type {Parsable} from '@microsoft/kiota-abstractions';

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
