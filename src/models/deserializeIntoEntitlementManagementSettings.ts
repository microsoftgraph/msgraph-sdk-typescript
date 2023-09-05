import { AccessPackageExternalUserLifecycleAction } from './accessPackageExternalUserLifecycleAction';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type EntitlementManagementSettings } from './entitlementManagementSettings';
import { Duration, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEntitlementManagementSettings(entitlementManagementSettings: EntitlementManagementSettings | undefined = {} as EntitlementManagementSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(entitlementManagementSettings),
        "durationUntilExternalUserDeletedAfterBlocked": n => { entitlementManagementSettings.durationUntilExternalUserDeletedAfterBlocked = n.getDurationValue(); },
        "externalUserLifecycleAction": n => { entitlementManagementSettings.externalUserLifecycleAction = n.getEnumValue<AccessPackageExternalUserLifecycleAction>(AccessPackageExternalUserLifecycleAction); },
    }
}
