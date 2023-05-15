import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UnifiedRoleAssignmentScheduleRequest} from './unifiedRoleAssignmentScheduleRequest';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleAssignmentScheduleRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: UnifiedRoleAssignmentScheduleRequest[] | undefined;
}
