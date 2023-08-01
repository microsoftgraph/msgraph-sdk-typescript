import type {BaseCollectionPaginationCountResponse} from '../../../../models/baseCollectionPaginationCountResponse';
import type {UnifiedRoleEligibilityScheduleInstance} from '../../../../models/unifiedRoleEligibilityScheduleInstance';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FilterByCurrentUserWithOnResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UnifiedRoleEligibilityScheduleInstance[] | undefined;
}
