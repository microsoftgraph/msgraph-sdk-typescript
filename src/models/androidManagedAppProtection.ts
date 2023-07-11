import {ManagedAppPolicyDeploymentSummary} from './managedAppPolicyDeploymentSummary';
import {ManagedMobileApp} from './managedMobileApp';
import {TargetedManagedAppProtection} from './targetedManagedAppProtection';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidManagedAppProtection extends Parsable, TargetedManagedAppProtection {
    /**
     * List of apps to which the policy is deployed.
     */
    apps?: ManagedMobileApp[] | undefined;
    /**
     * Friendly name of the preferred custom browser to open weblink on Android. When this property is configured, ManagedBrowserToOpenLinksRequired should be true.
     */
    customBrowserDisplayName?: string | undefined;
    /**
     * Unique identifier of the preferred custom browser to open weblink on Android. When this property is configured, ManagedBrowserToOpenLinksRequired should be true.
     */
    customBrowserPackageId?: string | undefined;
    /**
     * Count of apps to which the current policy is deployed.
     */
    deployedAppCount?: number | undefined;
    /**
     * Navigation property to deployment summary of the configuration.
     */
    deploymentSummary?: ManagedAppPolicyDeploymentSummary | undefined;
    /**
     * When this setting is enabled, app level encryption is disabled if device level encryption is enabled
     */
    disableAppEncryptionIfDeviceEncryptionIsEnabled?: boolean | undefined;
    /**
     * Indicates whether application data for managed apps should be encrypted
     */
    encryptAppData?: boolean | undefined;
    /**
     * Define the oldest required Android security patch level a user can have to gain secure access to the app.
     */
    minimumRequiredPatchVersion?: string | undefined;
    /**
     * Define the oldest recommended Android security patch level a user can have for secure access to the app.
     */
    minimumWarningPatchVersion?: string | undefined;
    /**
     * Indicates whether a managed user can take screen captures of managed apps
     */
    screenCaptureBlocked?: boolean | undefined;
}
