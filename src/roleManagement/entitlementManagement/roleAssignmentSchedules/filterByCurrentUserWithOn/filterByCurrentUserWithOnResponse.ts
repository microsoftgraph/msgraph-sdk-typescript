import type {BaseCollectionPaginationCountResponse} from '../../../../models/baseCollectionPaginationCountResponse';
import type {UnifiedRoleAssignmentSchedule} from '../../../../models/unifiedRoleAssignmentSchedule';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface FilterByCurrentUserWithOnResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UnifiedRoleAssignmentSchedule[] | undefined;
}
