import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {UnifiedRoleEligibilityScheduleRequest} from './unifiedRoleEligibilityScheduleRequest';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleEligibilityScheduleRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UnifiedRoleEligibilityScheduleRequest[] | undefined;
}
