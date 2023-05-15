import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UnifiedRoleEligibilityScheduleInstance} from './unifiedRoleEligibilityScheduleInstance';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleEligibilityScheduleInstanceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: UnifiedRoleEligibilityScheduleInstance[] | undefined;
}
