import {serializeEntity} from './serializeEntity';
import {serializeTeamsApp} from './serializeTeamsApp';
import {serializeTeamsAppDefinition} from './serializeTeamsAppDefinition';
import {serializeTeamsAppPermissionSet} from './serializeTeamsAppPermissionSet';
import {TeamsApp} from './teamsApp';
import {TeamsAppDefinition} from './teamsAppDefinition';
import {TeamsAppInstallation} from './teamsAppInstallation';
import {TeamsAppPermissionSet} from './teamsAppPermissionSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAppInstallation(writer: SerializationWriter, teamsAppInstallation: TeamsAppInstallation | undefined = {} as TeamsAppInstallation) : void {
        serializeEntity(writer, teamsAppInstallation)
        writer.writeObjectValue<TeamsAppPermissionSet>("consentedPermissionSet", teamsAppInstallation.consentedPermissionSet, serializeTeamsAppPermissionSet);
        writer.writeObjectValue<TeamsApp>("teamsApp", teamsAppInstallation.teamsApp, serializeTeamsApp);
        writer.writeObjectValue<TeamsAppDefinition>("teamsAppDefinition", teamsAppInstallation.teamsAppDefinition, serializeTeamsAppDefinition);
}
