import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type UnifiedRoleEligibilityScheduleInstance } from './unifiedRoleEligibilityScheduleInstance';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UnifiedRoleEligibilityScheduleInstanceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UnifiedRoleEligibilityScheduleInstance[] | undefined;
}
