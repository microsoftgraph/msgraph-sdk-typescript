import {serializeEntity} from './serializeEntity';
import {serializeTeamsApp} from './serializeTeamsApp';
import {serializeTeamsAppDefinition} from './serializeTeamsAppDefinition';
import {serializeTeamsAppPermissionSet} from './serializeTeamsAppPermissionSet';
import type {TeamsApp} from './teamsApp';
import type {TeamsAppDefinition} from './teamsAppDefinition';
import type {TeamsAppInstallation} from './teamsAppInstallation';
import type {TeamsAppPermissionSet} from './teamsAppPermissionSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAppInstallation(writer: SerializationWriter, teamsAppInstallation: TeamsAppInstallation | undefined = {} as TeamsAppInstallation) : void {
        serializeEntity(writer, teamsAppInstallation)
        writer.writeObjectValue<TeamsAppPermissionSet>("consentedPermissionSet", teamsAppInstallation.consentedPermissionSet, serializeTeamsAppPermissionSet);
        writer.writeObjectValue<TeamsApp>("teamsApp", teamsAppInstallation.teamsApp, serializeTeamsApp);
        writer.writeObjectValue<TeamsAppDefinition>("teamsAppDefinition", teamsAppInstallation.teamsAppDefinition, serializeTeamsAppDefinition);
}
