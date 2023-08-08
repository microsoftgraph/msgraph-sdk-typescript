import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {UnifiedRoleAssignmentScheduleRequest} from './unifiedRoleAssignmentScheduleRequest';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleAssignmentScheduleRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UnifiedRoleAssignmentScheduleRequest[] | undefined;
}
