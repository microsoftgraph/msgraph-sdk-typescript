import {AndroidManagedAppProtection} from './androidManagedAppProtection';
import {createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue} from './createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue';
import {createManagedMobileAppFromDiscriminatorValue} from './createManagedMobileAppFromDiscriminatorValue';
import {deserializeIntoTargetedManagedAppProtection} from './deserializeIntoTargetedManagedAppProtection';
import {ManagedAppPolicyDeploymentSummary} from './managedAppPolicyDeploymentSummary';
import {ManagedMobileApp} from './managedMobileApp';
import {serializeManagedAppPolicyDeploymentSummary} from './serializeManagedAppPolicyDeploymentSummary';
import {serializeManagedMobileApp} from './serializeManagedMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidManagedAppProtection(androidManagedAppProtection: AndroidManagedAppProtection | undefined = {} as AndroidManagedAppProtection) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTargetedManagedAppProtection(androidManagedAppProtection),
        "apps": n => { androidManagedAppProtection.apps = n.getCollectionOfObjectValues<ManagedMobileApp>(createManagedMobileAppFromDiscriminatorValue); },
        "customBrowserDisplayName": n => { androidManagedAppProtection.customBrowserDisplayName = n.getStringValue(); },
        "customBrowserPackageId": n => { androidManagedAppProtection.customBrowserPackageId = n.getStringValue(); },
        "deployedAppCount": n => { androidManagedAppProtection.deployedAppCount = n.getNumberValue(); },
        "deploymentSummary": n => { androidManagedAppProtection.deploymentSummary = n.getObjectValue<ManagedAppPolicyDeploymentSummary>(createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue); },
        "disableAppEncryptionIfDeviceEncryptionIsEnabled": n => { androidManagedAppProtection.disableAppEncryptionIfDeviceEncryptionIsEnabled = n.getBooleanValue(); },
        "encryptAppData": n => { androidManagedAppProtection.encryptAppData = n.getBooleanValue(); },
        "minimumRequiredPatchVersion": n => { androidManagedAppProtection.minimumRequiredPatchVersion = n.getStringValue(); },
        "minimumWarningPatchVersion": n => { androidManagedAppProtection.minimumWarningPatchVersion = n.getStringValue(); },
        "screenCaptureBlocked": n => { androidManagedAppProtection.screenCaptureBlocked = n.getBooleanValue(); },
    }
}
