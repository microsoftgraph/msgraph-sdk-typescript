import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UnifiedRoleEligibilityScheduleRequest} from './unifiedRoleEligibilityScheduleRequest';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleEligibilityScheduleRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UnifiedRoleEligibilityScheduleRequest[] | undefined;
}
