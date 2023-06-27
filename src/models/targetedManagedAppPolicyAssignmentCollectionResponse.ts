import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {TargetedManagedAppPolicyAssignment} from './targetedManagedAppPolicyAssignment';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TargetedManagedAppPolicyAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TargetedManagedAppPolicyAssignment[] | undefined;
}
