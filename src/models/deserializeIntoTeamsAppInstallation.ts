import {createTeamsAppDefinitionFromDiscriminatorValue} from './createTeamsAppDefinitionFromDiscriminatorValue';
import {createTeamsAppFromDiscriminatorValue} from './createTeamsAppFromDiscriminatorValue';
import {createTeamsAppPermissionSetFromDiscriminatorValue} from './createTeamsAppPermissionSetFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeTeamsApp} from './serializeTeamsApp';
import {serializeTeamsAppDefinition} from './serializeTeamsAppDefinition';
import {serializeTeamsAppPermissionSet} from './serializeTeamsAppPermissionSet';
import {TeamsApp} from './teamsApp';
import {TeamsAppDefinition} from './teamsAppDefinition';
import {TeamsAppInstallation} from './teamsAppInstallation';
import {TeamsAppPermissionSet} from './teamsAppPermissionSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppInstallation(teamsAppInstallation: TeamsAppInstallation | undefined = {} as TeamsAppInstallation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamsAppInstallation),
        "consentedPermissionSet": n => { teamsAppInstallation.consentedPermissionSet = n.getObjectValue<TeamsAppPermissionSet>(createTeamsAppPermissionSetFromDiscriminatorValue); },
        "teamsApp": n => { teamsAppInstallation.teamsApp = n.getObjectValue<TeamsApp>(createTeamsAppFromDiscriminatorValue); },
        "teamsAppDefinition": n => { teamsAppInstallation.teamsAppDefinition = n.getObjectValue<TeamsAppDefinition>(createTeamsAppDefinitionFromDiscriminatorValue); },
    }
}
