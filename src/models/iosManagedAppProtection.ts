import {ManagedAppDataEncryptionType} from './managedAppDataEncryptionType';
import {ManagedAppPolicyDeploymentSummary} from './managedAppPolicyDeploymentSummary';
import {ManagedMobileApp} from './managedMobileApp';
import {TargetedManagedAppProtection} from './targetedManagedAppProtection';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosManagedAppProtection extends Parsable, TargetedManagedAppProtection {
    /**
     * Represents the level to which app data is encrypted for managed apps
     */
    appDataEncryptionType?: ManagedAppDataEncryptionType | undefined;
    /**
     * List of apps to which the policy is deployed.
     */
    apps?: ManagedMobileApp[] | undefined;
    /**
     * A custom browser protocol to open weblink on iOS. When this property is configured, ManagedBrowserToOpenLinksRequired should be true.
     */
    customBrowserProtocol?: string | undefined;
    /**
     * Count of apps to which the current policy is deployed.
     */
    deployedAppCount?: number | undefined;
    /**
     * Navigation property to deployment summary of the configuration.
     */
    deploymentSummary?: ManagedAppPolicyDeploymentSummary | undefined;
    /**
     * Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True.
     */
    faceIdBlocked?: boolean | undefined;
    /**
     * Versions less than the specified version will block the managed app from accessing company data.
     */
    minimumRequiredSdkVersion?: string | undefined;
}
