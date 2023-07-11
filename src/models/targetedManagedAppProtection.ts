import {ManagedAppProtection} from './managedAppProtection';
import {TargetedManagedAppPolicyAssignment} from './targetedManagedAppPolicyAssignment';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TargetedManagedAppProtection extends ManagedAppProtection, Parsable {
    /**
     * Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
     */
    assignments?: TargetedManagedAppPolicyAssignment[] | undefined;
    /**
     * Indicates if the policy is deployed to any inclusion groups or not.
     */
    isAssigned?: boolean | undefined;
}
