import {RequestSchedule} from './requestSchedule';
import {UnifiedRoleScheduleBase} from './unifiedRoleScheduleBase';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleEligibilitySchedule extends Parsable, UnifiedRoleScheduleBase {
    /**
     * How the role eligibility is inherited. It can either be Inherited, Direct, or Group. It can further imply whether the unifiedRoleEligibilitySchedule can be managed by the caller. Supports $filter (eq, ne).
     */
    memberType?: string | undefined;
    /**
     * The period of the role eligibility.
     */
    scheduleInfo?: RequestSchedule | undefined;
}
