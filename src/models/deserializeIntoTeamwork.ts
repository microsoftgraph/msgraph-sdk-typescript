import {createDeletedTeamFromDiscriminatorValue} from './createDeletedTeamFromDiscriminatorValue';
import {createTeamsAppSettingsFromDiscriminatorValue} from './createTeamsAppSettingsFromDiscriminatorValue';
import {createWorkforceIntegrationFromDiscriminatorValue} from './createWorkforceIntegrationFromDiscriminatorValue';
import {DeletedTeam} from './deletedTeam';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeDeletedTeam} from './serializeDeletedTeam';
import {serializeTeamsAppSettings} from './serializeTeamsAppSettings';
import {serializeWorkforceIntegration} from './serializeWorkforceIntegration';
import {TeamsAppSettings} from './teamsAppSettings';
import {Teamwork} from './teamwork';
import {WorkforceIntegration} from './workforceIntegration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamwork(teamwork: Teamwork | undefined = {} as Teamwork) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamwork),
        "deletedTeams": n => { teamwork.deletedTeams = n.getCollectionOfObjectValues<DeletedTeam>(createDeletedTeamFromDiscriminatorValue); },
        "teamsAppSettings": n => { teamwork.teamsAppSettings = n.getObjectValue<TeamsAppSettings>(createTeamsAppSettingsFromDiscriminatorValue); },
        "workforceIntegrations": n => { teamwork.workforceIntegrations = n.getCollectionOfObjectValues<WorkforceIntegration>(createWorkforceIntegrationFromDiscriminatorValue); },
    }
}
