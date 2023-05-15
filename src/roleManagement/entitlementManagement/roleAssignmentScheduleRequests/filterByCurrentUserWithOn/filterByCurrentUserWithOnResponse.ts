import {BaseCollectionPaginationCountResponse} from '../../../../models/baseCollectionPaginationCountResponse';
import {UnifiedRoleAssignmentScheduleRequest} from '../../../../models/unifiedRoleAssignmentScheduleRequest';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FilterByCurrentUserWithOnResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: UnifiedRoleAssignmentScheduleRequest[] | undefined;
}
