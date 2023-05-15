import {BaseCollectionPaginationCountResponse} from '../../../../models/baseCollectionPaginationCountResponse';
import {UnifiedRoleEligibilityScheduleRequest} from '../../../../models/unifiedRoleEligibilityScheduleRequest';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FilterByCurrentUserWithOnResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: UnifiedRoleEligibilityScheduleRequest[] | undefined;
}
