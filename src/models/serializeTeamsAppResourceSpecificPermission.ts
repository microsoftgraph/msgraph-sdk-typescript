import {TeamsAppResourceSpecificPermission} from './teamsAppResourceSpecificPermission';
import {TeamsAppResourceSpecificPermissionType} from './teamsAppResourceSpecificPermissionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAppResourceSpecificPermission(writer: SerializationWriter, teamsAppResourceSpecificPermission: TeamsAppResourceSpecificPermission | undefined = {} as TeamsAppResourceSpecificPermission) : void {
        writer.writeStringValue("@odata.type", teamsAppResourceSpecificPermission.odataType);
        writer.writeEnumValue<TeamsAppResourceSpecificPermissionType>("permissionType", teamsAppResourceSpecificPermission.permissionType);
        writer.writeStringValue("permissionValue", teamsAppResourceSpecificPermission.permissionValue);
        writer.writeAdditionalData(teamsAppResourceSpecificPermission.additionalData);
}
