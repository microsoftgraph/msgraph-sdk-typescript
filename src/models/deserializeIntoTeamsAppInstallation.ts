import { createTeamsAppDefinitionFromDiscriminatorValue } from './createTeamsAppDefinitionFromDiscriminatorValue';
import { createTeamsAppFromDiscriminatorValue } from './createTeamsAppFromDiscriminatorValue';
import { createTeamsAppPermissionSetFromDiscriminatorValue } from './createTeamsAppPermissionSetFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeTeamsApp } from './serializeTeamsApp';
import { serializeTeamsAppDefinition } from './serializeTeamsAppDefinition';
import { serializeTeamsAppPermissionSet } from './serializeTeamsAppPermissionSet';
import { type TeamsApp } from './teamsApp';
import { type TeamsAppDefinition } from './teamsAppDefinition';
import { type TeamsAppInstallation } from './teamsAppInstallation';
import { type TeamsAppPermissionSet } from './teamsAppPermissionSet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppInstallation(teamsAppInstallation: TeamsAppInstallation | undefined = {} as TeamsAppInstallation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamsAppInstallation),
        "consentedPermissionSet": n => { teamsAppInstallation.consentedPermissionSet = n.getObjectValue<TeamsAppPermissionSet>(createTeamsAppPermissionSetFromDiscriminatorValue); },
        "teamsApp": n => { teamsAppInstallation.teamsApp = n.getObjectValue<TeamsApp>(createTeamsAppFromDiscriminatorValue); },
        "teamsAppDefinition": n => { teamsAppInstallation.teamsAppDefinition = n.getObjectValue<TeamsAppDefinition>(createTeamsAppDefinitionFromDiscriminatorValue); },
    }
}
