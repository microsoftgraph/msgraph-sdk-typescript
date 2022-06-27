import {ManagedAppConfiguration} from './managedAppConfiguration';
import {ManagedAppPolicyDeploymentSummary} from './managedAppPolicyDeploymentSummary';
import {ManagedMobileApp} from './managedMobileApp';
import {TargetedManagedAppPolicyAssignment} from './targetedManagedAppPolicyAssignment';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TargetedManagedAppConfiguration extends Partial<AdditionalDataHolder>, ManagedAppConfiguration, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** List of apps to which the policy is deployed. */
    apps?: ManagedMobileApp[] | undefined;
    /** Navigation property to list of inclusion and exclusion groups to which the policy is deployed. */
    assignments?: TargetedManagedAppPolicyAssignment[] | undefined;
    /** Count of apps to which the current policy is deployed. */
    deployedAppCount?: number | undefined;
    /** Navigation property to deployment summary of the configuration. */
    deploymentSummary?: ManagedAppPolicyDeploymentSummary | undefined;
    /** Indicates if the policy is deployed to any inclusion groups or not. */
    isAssigned?: boolean | undefined;
}
