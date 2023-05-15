import {AccessPackageExternalUserLifecycleAction} from './accessPackageExternalUserLifecycleAction';
import {EntitlementManagementSettings} from './entitlementManagementSettings';
import {serializeEntity} from './serializeEntity';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEntitlementManagementSettings(writer: SerializationWriter, entitlementManagementSettings: EntitlementManagementSettings | undefined = {} as EntitlementManagementSettings) : void {
        serializeEntity(writer, entitlementManagementSettings)
        writer.writeDurationValue("durationUntilExternalUserDeletedAfterBlocked", entitlementManagementSettings.durationUntilExternalUserDeletedAfterBlocked);
        writer.writeEnumValue<AccessPackageExternalUserLifecycleAction>("externalUserLifecycleAction", entitlementManagementSettings.externalUserLifecycleAction);
}
