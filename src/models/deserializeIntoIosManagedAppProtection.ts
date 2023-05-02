import {createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue} from './createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue';
import {createManagedMobileAppFromDiscriminatorValue} from './createManagedMobileAppFromDiscriminatorValue';
import {deserializeIntoTargetedManagedAppProtection} from './deserializeIntoTargetedManagedAppProtection';
import {IosManagedAppProtection} from './iosManagedAppProtection';
import {ManagedAppDataEncryptionType} from './managedAppDataEncryptionType';
import {ManagedAppPolicyDeploymentSummary} from './managedAppPolicyDeploymentSummary';
import {ManagedMobileApp} from './managedMobileApp';
import {serializeManagedAppPolicyDeploymentSummary} from './serializeManagedAppPolicyDeploymentSummary';
import {serializeManagedMobileApp} from './serializeManagedMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosManagedAppProtection(iosManagedAppProtection: IosManagedAppProtection | undefined = {} as IosManagedAppProtection) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTargetedManagedAppProtection(iosManagedAppProtection),
        "appDataEncryptionType": n => { iosManagedAppProtection.appDataEncryptionType = n.getEnumValue<ManagedAppDataEncryptionType>(ManagedAppDataEncryptionType); },
        "apps": n => { iosManagedAppProtection.apps = n.getCollectionOfObjectValues<ManagedMobileApp>(createManagedMobileAppFromDiscriminatorValue); },
        "customBrowserProtocol": n => { iosManagedAppProtection.customBrowserProtocol = n.getStringValue(); },
        "deployedAppCount": n => { iosManagedAppProtection.deployedAppCount = n.getNumberValue(); },
        "deploymentSummary": n => { iosManagedAppProtection.deploymentSummary = n.getObjectValue<ManagedAppPolicyDeploymentSummary>(createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue); },
        "faceIdBlocked": n => { iosManagedAppProtection.faceIdBlocked = n.getBooleanValue(); },
        "minimumRequiredSdkVersion": n => { iosManagedAppProtection.minimumRequiredSdkVersion = n.getStringValue(); },
    }
}
