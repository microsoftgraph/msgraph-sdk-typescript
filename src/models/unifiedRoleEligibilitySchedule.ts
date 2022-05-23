import {RequestSchedule} from './requestSchedule';
import {UnifiedRoleScheduleBase} from './unifiedRoleScheduleBase';

export interface UnifiedRoleEligibilitySchedule extends UnifiedRoleScheduleBase{
    /** Membership type of the eligible assignment. It can either be Inherited, Direct, or Group. */
    memberType?:string | undefined;
    /** The schedule object of the eligible role assignment request. */
    scheduleInfo?:RequestSchedule | undefined;
}
