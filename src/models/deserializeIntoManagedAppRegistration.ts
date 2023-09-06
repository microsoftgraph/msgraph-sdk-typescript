import { createManagedAppOperationFromDiscriminatorValue } from './createManagedAppOperationFromDiscriminatorValue';
import { createManagedAppPolicyFromDiscriminatorValue } from './createManagedAppPolicyFromDiscriminatorValue';
import { createMobileAppIdentifierFromDiscriminatorValue } from './createMobileAppIdentifierFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { ManagedAppFlaggedReason } from './managedAppFlaggedReason';
import { type ManagedAppOperation } from './managedAppOperation';
import { type ManagedAppPolicy } from './managedAppPolicy';
import { type ManagedAppRegistration } from './managedAppRegistration';
import { type MobileAppIdentifier } from './mobileAppIdentifier';
import { serializeManagedAppOperation } from './serializeManagedAppOperation';
import { serializeManagedAppPolicy } from './serializeManagedAppPolicy';
import { serializeMobileAppIdentifier } from './serializeMobileAppIdentifier';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppRegistration(managedAppRegistration: ManagedAppRegistration | undefined = {} as ManagedAppRegistration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedAppRegistration),
        "appIdentifier": n => { managedAppRegistration.appIdentifier = n.getObjectValue<MobileAppIdentifier>(createMobileAppIdentifierFromDiscriminatorValue); },
        "applicationVersion": n => { managedAppRegistration.applicationVersion = n.getStringValue(); },
        "appliedPolicies": n => { managedAppRegistration.appliedPolicies = n.getCollectionOfObjectValues<ManagedAppPolicy>(createManagedAppPolicyFromDiscriminatorValue); },
        "createdDateTime": n => { managedAppRegistration.createdDateTime = n.getDateValue(); },
        "deviceName": n => { managedAppRegistration.deviceName = n.getStringValue(); },
        "deviceTag": n => { managedAppRegistration.deviceTag = n.getStringValue(); },
        "deviceType": n => { managedAppRegistration.deviceType = n.getStringValue(); },
        "flaggedReasons": n => { managedAppRegistration.flaggedReasons = n.getCollectionOfEnumValues<ManagedAppFlaggedReason>(ManagedAppFlaggedReason); },
        "intendedPolicies": n => { managedAppRegistration.intendedPolicies = n.getCollectionOfObjectValues<ManagedAppPolicy>(createManagedAppPolicyFromDiscriminatorValue); },
        "lastSyncDateTime": n => { managedAppRegistration.lastSyncDateTime = n.getDateValue(); },
        "managementSdkVersion": n => { managedAppRegistration.managementSdkVersion = n.getStringValue(); },
        "operations": n => { managedAppRegistration.operations = n.getCollectionOfObjectValues<ManagedAppOperation>(createManagedAppOperationFromDiscriminatorValue); },
        "platformVersion": n => { managedAppRegistration.platformVersion = n.getStringValue(); },
        "userId": n => { managedAppRegistration.userId = n.getStringValue(); },
        "version": n => { managedAppRegistration.version = n.getStringValue(); },
    }
}
