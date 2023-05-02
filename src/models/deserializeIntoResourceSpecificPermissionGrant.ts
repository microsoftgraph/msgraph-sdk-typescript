import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {ResourceSpecificPermissionGrant} from './resourceSpecificPermissionGrant';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResourceSpecificPermissionGrant(resourceSpecificPermissionGrant: ResourceSpecificPermissionGrant | undefined = {} as ResourceSpecificPermissionGrant) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(resourceSpecificPermissionGrant),
        "clientAppId": n => { resourceSpecificPermissionGrant.clientAppId = n.getStringValue(); },
        "clientId": n => { resourceSpecificPermissionGrant.clientId = n.getStringValue(); },
        "permission": n => { resourceSpecificPermissionGrant.permission = n.getStringValue(); },
        "permissionType": n => { resourceSpecificPermissionGrant.permissionType = n.getStringValue(); },
        "resourceAppId": n => { resourceSpecificPermissionGrant.resourceAppId = n.getStringValue(); },
    }
}
