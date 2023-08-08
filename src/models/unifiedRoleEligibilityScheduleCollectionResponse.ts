import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {UnifiedRoleEligibilitySchedule} from './unifiedRoleEligibilitySchedule';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleEligibilityScheduleCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UnifiedRoleEligibilitySchedule[] | undefined;
}
