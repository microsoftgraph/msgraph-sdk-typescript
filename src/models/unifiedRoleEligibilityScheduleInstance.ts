import {UnifiedRoleScheduleInstanceBase} from './unifiedRoleScheduleInstanceBase';

export interface UnifiedRoleEligibilityScheduleInstance extends UnifiedRoleScheduleInstanceBase{
    /** Time that the roleEligibilityScheduleInstance will expire. */
    endDateTime?:Date | undefined;
    /** Membership type of the assignment. It can either be Inherited, Direct, or Group. */
    memberType?:string | undefined;
    /** Identifier of the parent roleEligibilitySchedule for this instance. */
    roleEligibilityScheduleId?:string | undefined;
    /** Time that the roleEligibilityScheduleInstance will start. */
    startDateTime?:Date | undefined;
}
