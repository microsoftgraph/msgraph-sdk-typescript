import type {BaseCollectionPaginationCountResponse} from '../../../../models/baseCollectionPaginationCountResponse';
import type {UnifiedRoleAssignmentScheduleInstance} from '../../../../models/unifiedRoleAssignmentScheduleInstance';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FilterByCurrentUserWithOnResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UnifiedRoleAssignmentScheduleInstance[] | undefined;
}
