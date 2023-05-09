import {createKeyValuePairFromDiscriminatorValue} from './createKeyValuePairFromDiscriminatorValue';
import {createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue} from './createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue';
import {createManagedMobileAppFromDiscriminatorValue} from './createManagedMobileAppFromDiscriminatorValue';
import {DefaultManagedAppProtection} from './defaultManagedAppProtection';
import {deserializeIntoManagedAppProtection} from './deserializeIntoManagedAppProtection';
import {KeyValuePair} from './keyValuePair';
import {ManagedAppDataEncryptionType} from './managedAppDataEncryptionType';
import {ManagedAppPolicyDeploymentSummary} from './managedAppPolicyDeploymentSummary';
import {ManagedMobileApp} from './managedMobileApp';
import {serializeKeyValuePair} from './serializeKeyValuePair';
import {serializeManagedAppPolicyDeploymentSummary} from './serializeManagedAppPolicyDeploymentSummary';
import {serializeManagedMobileApp} from './serializeManagedMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDefaultManagedAppProtection(defaultManagedAppProtection: DefaultManagedAppProtection | undefined = {} as DefaultManagedAppProtection) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedAppProtection(defaultManagedAppProtection),
        "appDataEncryptionType": n => { defaultManagedAppProtection.appDataEncryptionType = n.getEnumValue<ManagedAppDataEncryptionType>(ManagedAppDataEncryptionType); },
        "apps": n => { defaultManagedAppProtection.apps = n.getCollectionOfObjectValues<ManagedMobileApp>(createManagedMobileAppFromDiscriminatorValue); },
        "customSettings": n => { defaultManagedAppProtection.customSettings = n.getCollectionOfObjectValues<KeyValuePair>(createKeyValuePairFromDiscriminatorValue); },
        "deployedAppCount": n => { defaultManagedAppProtection.deployedAppCount = n.getNumberValue(); },
        "deploymentSummary": n => { defaultManagedAppProtection.deploymentSummary = n.getObjectValue<ManagedAppPolicyDeploymentSummary>(createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue); },
        "disableAppEncryptionIfDeviceEncryptionIsEnabled": n => { defaultManagedAppProtection.disableAppEncryptionIfDeviceEncryptionIsEnabled = n.getBooleanValue(); },
        "encryptAppData": n => { defaultManagedAppProtection.encryptAppData = n.getBooleanValue(); },
        "faceIdBlocked": n => { defaultManagedAppProtection.faceIdBlocked = n.getBooleanValue(); },
        "minimumRequiredPatchVersion": n => { defaultManagedAppProtection.minimumRequiredPatchVersion = n.getStringValue(); },
        "minimumRequiredSdkVersion": n => { defaultManagedAppProtection.minimumRequiredSdkVersion = n.getStringValue(); },
        "minimumWarningPatchVersion": n => { defaultManagedAppProtection.minimumWarningPatchVersion = n.getStringValue(); },
        "screenCaptureBlocked": n => { defaultManagedAppProtection.screenCaptureBlocked = n.getBooleanValue(); },
    }
}
