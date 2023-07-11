import {serializeTeamsAppResourceSpecificPermission} from './serializeTeamsAppResourceSpecificPermission';
import {TeamsAppPermissionSet} from './teamsAppPermissionSet';
import {TeamsAppResourceSpecificPermission} from './teamsAppResourceSpecificPermission';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAppPermissionSet(writer: SerializationWriter, teamsAppPermissionSet: TeamsAppPermissionSet | undefined = {} as TeamsAppPermissionSet) : void {
        writer.writeStringValue("@odata.type", teamsAppPermissionSet.odataType);
        writer.writeCollectionOfObjectValues<TeamsAppResourceSpecificPermission>("resourceSpecificPermissions", teamsAppPermissionSet.resourceSpecificPermissions, serializeTeamsAppResourceSpecificPermission);
        writer.writeAdditionalData(teamsAppPermissionSet.additionalData);
}
