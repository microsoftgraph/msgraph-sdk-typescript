import {RequestSchedule} from './requestSchedule';
import {UnifiedRoleScheduleBase} from './unifiedRoleScheduleBase';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleEligibilitySchedule extends Partial<Parsable>, UnifiedRoleScheduleBase {
    /** Membership type of the eligible assignment. It can either be Inherited, Direct, or Group. */
    memberType?: string | undefined;
    /** The schedule object of the eligible role assignment request. */
    scheduleInfo?: RequestSchedule | undefined;
}
