import {UnifiedRoleEligibilityScheduleInstance} from './unifiedRoleEligibilityScheduleInstance';
import {UnifiedRoleScheduleInstanceBase} from './unifiedRoleScheduleInstanceBase';

export interface UnifiedRoleAssignmentScheduleInstance extends UnifiedRoleScheduleInstanceBase{
    /** If the roleAssignmentScheduleInstance is activated by a roleEligibilityScheduleRequest, this is the link to the related schedule instance. */
    activatedUsing?:UnifiedRoleEligibilityScheduleInstance | undefined;
    /** Type of the assignment. It can either be Assigned or Activated. */
    assignmentType?:string | undefined;
    /** Time that the roleAssignmentInstance will expire */
    endDateTime?:Date | undefined;
    /** Membership type of the assignment. It can either be Inherited, Direct, or Group. */
    memberType?:string | undefined;
    /** ID of the roleAssignment in the directory */
    roleAssignmentOriginId?:string | undefined;
    /** ID of the parent roleAssignmentSchedule for this instance */
    roleAssignmentScheduleId?:string | undefined;
    /** Time that the roleAssignmentInstance will start */
    startDateTime?:Date | undefined;
}
