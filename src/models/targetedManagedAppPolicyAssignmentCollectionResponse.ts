import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type TargetedManagedAppPolicyAssignment } from './targetedManagedAppPolicyAssignment';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface TargetedManagedAppPolicyAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TargetedManagedAppPolicyAssignment[] | undefined;
}
