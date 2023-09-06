import { createDeletedTeamFromDiscriminatorValue } from './createDeletedTeamFromDiscriminatorValue';
import { createTeamsAppSettingsFromDiscriminatorValue } from './createTeamsAppSettingsFromDiscriminatorValue';
import { createWorkforceIntegrationFromDiscriminatorValue } from './createWorkforceIntegrationFromDiscriminatorValue';
import { type DeletedTeam } from './deletedTeam';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeDeletedTeam } from './serializeDeletedTeam';
import { serializeTeamsAppSettings } from './serializeTeamsAppSettings';
import { serializeWorkforceIntegration } from './serializeWorkforceIntegration';
import { type TeamsAppSettings } from './teamsAppSettings';
import { type Teamwork } from './teamwork';
import { type WorkforceIntegration } from './workforceIntegration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamwork(teamwork: Teamwork | undefined = {} as Teamwork) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamwork),
        "deletedTeams": n => { teamwork.deletedTeams = n.getCollectionOfObjectValues<DeletedTeam>(createDeletedTeamFromDiscriminatorValue); },
        "teamsAppSettings": n => { teamwork.teamsAppSettings = n.getObjectValue<TeamsAppSettings>(createTeamsAppSettingsFromDiscriminatorValue); },
        "workforceIntegrations": n => { teamwork.workforceIntegrations = n.getCollectionOfObjectValues<WorkforceIntegration>(createWorkforceIntegrationFromDiscriminatorValue); },
    }
}
