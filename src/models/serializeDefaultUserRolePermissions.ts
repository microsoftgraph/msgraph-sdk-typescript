import {DefaultUserRolePermissions} from './defaultUserRolePermissions';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDefaultUserRolePermissions(defaultUserRolePermissions: DefaultUserRolePermissions | undefined = {} as DefaultUserRolePermissions, writer: SerializationWriter) : void {
        writer.writeBooleanValue("allowedToCreateApps", defaultUserRolePermissions.allowedToCreateApps);
        writer.writeBooleanValue("allowedToCreateSecurityGroups", defaultUserRolePermissions.allowedToCreateSecurityGroups);
        writer.writeBooleanValue("allowedToCreateTenants", defaultUserRolePermissions.allowedToCreateTenants);
        writer.writeBooleanValue("allowedToReadBitlockerKeysForOwnedDevice", defaultUserRolePermissions.allowedToReadBitlockerKeysForOwnedDevice);
        writer.writeBooleanValue("allowedToReadOtherUsers", defaultUserRolePermissions.allowedToReadOtherUsers);
        writer.writeStringValue("@odata.type", defaultUserRolePermissions.odataType);
        writer.writeCollectionOfPrimitiveValues<string>("permissionGrantPoliciesAssigned", defaultUserRolePermissions.permissionGrantPoliciesAssigned);
        writer.writeAdditionalData(defaultUserRolePermissions.additionalData);
}
