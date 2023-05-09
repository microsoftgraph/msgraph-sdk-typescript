import {AccessPackageExternalUserLifecycleAction} from './accessPackageExternalUserLifecycleAction';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EntitlementManagementSettings} from './entitlementManagementSettings';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEntitlementManagementSettings(entitlementManagementSettings: EntitlementManagementSettings | undefined = {} as EntitlementManagementSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(entitlementManagementSettings),
        "durationUntilExternalUserDeletedAfterBlocked": n => { entitlementManagementSettings.durationUntilExternalUserDeletedAfterBlocked = n.getDurationValue(); },
        "externalUserLifecycleAction": n => { entitlementManagementSettings.externalUserLifecycleAction = n.getEnumValue<AccessPackageExternalUserLifecycleAction>(AccessPackageExternalUserLifecycleAction); },
    }
}
