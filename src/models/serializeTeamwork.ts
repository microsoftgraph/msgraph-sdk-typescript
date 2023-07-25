import {DeletedTeam} from './deletedTeam';
import {serializeDeletedTeam} from './serializeDeletedTeam';
import {serializeEntity} from './serializeEntity';
import {serializeTeamsAppSettings} from './serializeTeamsAppSettings';
import {serializeWorkforceIntegration} from './serializeWorkforceIntegration';
import {TeamsAppSettings} from './teamsAppSettings';
import {Teamwork} from './teamwork';
import {WorkforceIntegration} from './workforceIntegration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamwork(writer: SerializationWriter, teamwork: Teamwork | undefined = {} as Teamwork) : void {
        serializeEntity(writer, teamwork)
        writer.writeCollectionOfObjectValues<DeletedTeam>("deletedTeams", teamwork.deletedTeams, serializeDeletedTeam);
        writer.writeObjectValue<TeamsAppSettings>("teamsAppSettings", teamwork.teamsAppSettings, serializeTeamsAppSettings);
        writer.writeCollectionOfObjectValues<WorkforceIntegration>("workforceIntegrations", teamwork.workforceIntegrations, serializeWorkforceIntegration);
}
