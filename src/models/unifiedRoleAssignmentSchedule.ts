import {RequestSchedule} from './requestSchedule';
import {UnifiedRoleEligibilitySchedule} from './unifiedRoleEligibilitySchedule';
import {UnifiedRoleScheduleBase} from './unifiedRoleScheduleBase';

export interface UnifiedRoleAssignmentSchedule extends UnifiedRoleScheduleBase{
    /** If the roleAssignmentSchedule is activated by a roleEligibilitySchedule, this is the link to that schedule. */
    activatedUsing?:UnifiedRoleEligibilitySchedule | undefined;
    /** Type of the assignment. It can either be Assigned or Activated. */
    assignmentType?:string | undefined;
    /** Membership type of the assignment. It can either be Inherited, Direct, or Group. */
    memberType?:string | undefined;
    /** The schedule object of the role assignment request. */
    scheduleInfo?:RequestSchedule | undefined;
}
