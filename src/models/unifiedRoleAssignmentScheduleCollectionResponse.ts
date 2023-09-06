import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type UnifiedRoleAssignmentSchedule } from './unifiedRoleAssignmentSchedule';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UnifiedRoleAssignmentScheduleCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UnifiedRoleAssignmentSchedule[] | undefined;
}
