import {PermissionScope} from './permissionScope';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePermissionScope(writer: SerializationWriter, permissionScope: PermissionScope | undefined = {} as PermissionScope) : void {
        writer.writeStringValue("adminConsentDescription", permissionScope.adminConsentDescription);
        writer.writeStringValue("adminConsentDisplayName", permissionScope.adminConsentDisplayName);
        writer.writeStringValue("id", permissionScope.id);
        writer.writeBooleanValue("isEnabled", permissionScope.isEnabled);
        writer.writeStringValue("@odata.type", permissionScope.odataType);
        writer.writeStringValue("origin", permissionScope.origin);
        writer.writeStringValue("type", permissionScope.type);
        writer.writeStringValue("userConsentDescription", permissionScope.userConsentDescription);
        writer.writeStringValue("userConsentDisplayName", permissionScope.userConsentDisplayName);
        writer.writeStringValue("value", permissionScope.value);
        writer.writeAdditionalData(permissionScope.additionalData);
}
