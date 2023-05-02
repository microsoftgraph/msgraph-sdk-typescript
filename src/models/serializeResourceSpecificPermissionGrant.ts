import {ResourceSpecificPermissionGrant} from './resourceSpecificPermissionGrant';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResourceSpecificPermissionGrant(writer: SerializationWriter, resourceSpecificPermissionGrant: ResourceSpecificPermissionGrant | undefined = {} as ResourceSpecificPermissionGrant) : void {
        serializeDirectoryObject(writer, resourceSpecificPermissionGrant)
        writer.writeStringValue("clientAppId", resourceSpecificPermissionGrant.clientAppId);
        writer.writeStringValue("clientId", resourceSpecificPermissionGrant.clientId);
        writer.writeStringValue("permission", resourceSpecificPermissionGrant.permission);
        writer.writeStringValue("permissionType", resourceSpecificPermissionGrant.permissionType);
        writer.writeStringValue("resourceAppId", resourceSpecificPermissionGrant.resourceAppId);
}
