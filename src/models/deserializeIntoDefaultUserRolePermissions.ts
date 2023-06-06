import {DefaultUserRolePermissions} from './defaultUserRolePermissions';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDefaultUserRolePermissions(defaultUserRolePermissions: DefaultUserRolePermissions | undefined = {} as DefaultUserRolePermissions) : Record<string, (node: ParseNode) => void> {
    return {
        "allowedToCreateApps": n => { defaultUserRolePermissions.allowedToCreateApps = n.getBooleanValue(); },
        "allowedToCreateSecurityGroups": n => { defaultUserRolePermissions.allowedToCreateSecurityGroups = n.getBooleanValue(); },
        "allowedToCreateTenants": n => { defaultUserRolePermissions.allowedToCreateTenants = n.getBooleanValue(); },
        "allowedToReadBitlockerKeysForOwnedDevice": n => { defaultUserRolePermissions.allowedToReadBitlockerKeysForOwnedDevice = n.getBooleanValue(); },
        "allowedToReadOtherUsers": n => { defaultUserRolePermissions.allowedToReadOtherUsers = n.getBooleanValue(); },
        "@odata.type": n => { defaultUserRolePermissions.odataType = n.getStringValue(); },
        "permissionGrantPoliciesAssigned": n => { defaultUserRolePermissions.permissionGrantPoliciesAssigned = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
