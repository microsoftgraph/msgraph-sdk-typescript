import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UnifiedRoleAssignment} from './unifiedRoleAssignment';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UnifiedRoleAssignment[] | undefined;
}
