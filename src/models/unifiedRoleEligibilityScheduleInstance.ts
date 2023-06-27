import {UnifiedRoleScheduleInstanceBase} from './unifiedRoleScheduleInstanceBase';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleEligibilityScheduleInstance extends Parsable, UnifiedRoleScheduleInstanceBase {
    /**
     * The end date of the schedule instance.
     */
    endDateTime?: Date | undefined;
    /**
     * How the role eligibility is inherited. It can either be Inherited, Direct, or Group. It can further imply whether the unifiedRoleEligibilitySchedule can be managed by the caller. Supports $filter (eq, ne).
     */
    memberType?: string | undefined;
    /**
     * The identifier of the unifiedRoleEligibilitySchedule object from which this instance was created. Supports $filter (eq, ne).
     */
    roleEligibilityScheduleId?: string | undefined;
    /**
     * When this instance starts.
     */
    startDateTime?: Date | undefined;
}
