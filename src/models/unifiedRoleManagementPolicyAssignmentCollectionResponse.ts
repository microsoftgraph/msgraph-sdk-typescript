import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type UnifiedRoleManagementPolicyAssignment } from './unifiedRoleManagementPolicyAssignment';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UnifiedRoleManagementPolicyAssignment[] | undefined;
}
