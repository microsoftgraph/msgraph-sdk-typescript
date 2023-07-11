import {KeyValuePair} from './keyValuePair';
import {ManagedAppDataEncryptionType} from './managedAppDataEncryptionType';
import {ManagedAppPolicyDeploymentSummary} from './managedAppPolicyDeploymentSummary';
import {ManagedAppProtection} from './managedAppProtection';
import {ManagedMobileApp} from './managedMobileApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DefaultManagedAppProtection extends ManagedAppProtection, Parsable {
    /**
     * Represents the level to which app data is encrypted for managed apps
     */
    appDataEncryptionType?: ManagedAppDataEncryptionType | undefined;
    /**
     * List of apps to which the policy is deployed.
     */
    apps?: ManagedMobileApp[] | undefined;
    /**
     * A set of string key and string value pairs to be sent to the affected users, unalterned by this service
     */
    customSettings?: KeyValuePair[] | undefined;
    /**
     * Count of apps to which the current policy is deployed.
     */
    deployedAppCount?: number | undefined;
    /**
     * Navigation property to deployment summary of the configuration.
     */
    deploymentSummary?: ManagedAppPolicyDeploymentSummary | undefined;
    /**
     * When this setting is enabled, app level encryption is disabled if device level encryption is enabled. (Android only)
     */
    disableAppEncryptionIfDeviceEncryptionIsEnabled?: boolean | undefined;
    /**
     * Indicates whether managed-app data should be encrypted. (Android only)
     */
    encryptAppData?: boolean | undefined;
    /**
     * Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True. (iOS Only)
     */
    faceIdBlocked?: boolean | undefined;
    /**
     * Define the oldest required Android security patch level a user can have to gain secure access to the app. (Android only)
     */
    minimumRequiredPatchVersion?: string | undefined;
    /**
     * Versions less than the specified version will block the managed app from accessing company data. (iOS Only)
     */
    minimumRequiredSdkVersion?: string | undefined;
    /**
     * Define the oldest recommended Android security patch level a user can have for secure access to the app. (Android only)
     */
    minimumWarningPatchVersion?: string | undefined;
    /**
     * Indicates whether screen capture is blocked. (Android only)
     */
    screenCaptureBlocked?: boolean | undefined;
}
