import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type UnifiedRoleAssignment } from './unifiedRoleAssignment';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UnifiedRoleAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UnifiedRoleAssignment[] | undefined;
}
