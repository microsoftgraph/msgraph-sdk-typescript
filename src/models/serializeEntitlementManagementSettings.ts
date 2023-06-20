import {AccessPackageExternalUserLifecycleAction} from './accessPackageExternalUserLifecycleAction';
import {EntitlementManagementSettings} from './entitlementManagementSettings';
import {serializeEntity} from './serializeEntity';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEntitlementManagementSettings(entitlementManagementSettings: EntitlementManagementSettings | undefined = {} as EntitlementManagementSettings, writer: SerializationWriter) : void {
        serializeEntity(writer, entitlementManagementSettings)
        writer.writeDurationValue("durationUntilExternalUserDeletedAfterBlocked", entitlementManagementSettings.durationUntilExternalUserDeletedAfterBlocked);
        writer.writeEnumValue<AccessPackageExternalUserLifecycleAction>("externalUserLifecycleAction", entitlementManagementSettings.externalUserLifecycleAction);
}
