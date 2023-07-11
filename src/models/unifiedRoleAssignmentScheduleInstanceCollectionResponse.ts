import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UnifiedRoleAssignmentScheduleInstance} from './unifiedRoleAssignmentScheduleInstance';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleAssignmentScheduleInstanceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UnifiedRoleAssignmentScheduleInstance[] | undefined;
}
