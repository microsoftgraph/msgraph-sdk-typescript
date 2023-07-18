import {PermissionScope} from './permissionScope';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function deserializeIntoPermissionScope(permissionScope: PermissionScope | undefined = {} as PermissionScope) : Record<string, (node: ParseNode) => void> {
    return {
        "adminConsentDescription": n => { permissionScope.adminConsentDescription = n.getStringValue(); },
        "adminConsentDisplayName": n => { permissionScope.adminConsentDisplayName = n.getStringValue(); },
        "id": n => { permissionScope.id = n.getGuidValue(); },
        "isEnabled": n => { permissionScope.isEnabled = n.getBooleanValue(); },
        "@odata.type": n => { permissionScope.odataType = n.getStringValue(); },
        "origin": n => { permissionScope.origin = n.getStringValue(); },
        "type": n => { permissionScope.type = n.getStringValue(); },
        "userConsentDescription": n => { permissionScope.userConsentDescription = n.getStringValue(); },
        "userConsentDisplayName": n => { permissionScope.userConsentDisplayName = n.getStringValue(); },
        "value": n => { permissionScope.value = n.getStringValue(); },
    }
}
