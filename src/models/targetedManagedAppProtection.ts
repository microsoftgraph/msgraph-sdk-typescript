import {ManagedAppProtection} from './managedAppProtection';
import {TargetedManagedAppPolicyAssignment} from './targetedManagedAppPolicyAssignment';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TargetedManagedAppProtection extends Partial<AdditionalDataHolder>, ManagedAppProtection, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Navigation property to list of inclusion and exclusion groups to which the policy is deployed. */
    assignments?: TargetedManagedAppPolicyAssignment[] | undefined;
    /** Indicates if the policy is deployed to any inclusion groups or not. */
    isAssigned?: boolean | undefined;
}
