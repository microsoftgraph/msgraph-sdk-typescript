import { type DefaultUserRolePermissions } from './defaultUserRolePermissions';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDefaultUserRolePermissions(writer: SerializationWriter, defaultUserRolePermissions: DefaultUserRolePermissions | undefined = {} as DefaultUserRolePermissions) : void {
        writer.writeBooleanValue("allowedToCreateApps", defaultUserRolePermissions.allowedToCreateApps);
        writer.writeBooleanValue("allowedToCreateSecurityGroups", defaultUserRolePermissions.allowedToCreateSecurityGroups);
        writer.writeBooleanValue("allowedToCreateTenants", defaultUserRolePermissions.allowedToCreateTenants);
        writer.writeBooleanValue("allowedToReadBitlockerKeysForOwnedDevice", defaultUserRolePermissions.allowedToReadBitlockerKeysForOwnedDevice);
        writer.writeBooleanValue("allowedToReadOtherUsers", defaultUserRolePermissions.allowedToReadOtherUsers);
        writer.writeStringValue("@odata.type", defaultUserRolePermissions.odataType);
        writer.writeCollectionOfPrimitiveValues<string>("permissionGrantPoliciesAssigned", defaultUserRolePermissions.permissionGrantPoliciesAssigned);
        writer.writeAdditionalData(defaultUserRolePermissions.additionalData);
}
