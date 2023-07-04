import {UnifiedRoleEligibilityScheduleInstance} from './unifiedRoleEligibilityScheduleInstance';
import {UnifiedRoleScheduleInstanceBase} from './unifiedRoleScheduleInstanceBase';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleAssignmentScheduleInstance extends Parsable, UnifiedRoleScheduleInstanceBase {
    /**
     * If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it is null. Supports $expand.
     */
    activatedUsing?: UnifiedRoleEligibilityScheduleInstance | undefined;
    /**
     * Type of the assignment which can either be Assigned or Activated. Supports $filter (eq, ne).
     */
    assignmentType?: string | undefined;
    /**
     * The end date of the schedule instance.
     */
    endDateTime?: Date | undefined;
    /**
     * How the assignments is inherited. It can either be Inherited, Direct, or Group. It can further imply whether the unifiedRoleAssignmentSchedule can be managed by the caller. Supports $filter (eq, ne).
     */
    memberType?: string | undefined;
    /**
     * The identifier of the role assignment in Azure AD. Supports $filter (eq, ne).
     */
    roleAssignmentOriginId?: string | undefined;
    /**
     * The identifier of the unifiedRoleAssignmentSchedule object from which this instance was created. Supports $filter (eq, ne).
     */
    roleAssignmentScheduleId?: string | undefined;
    /**
     * When this instance starts.
     */
    startDateTime?: Date | undefined;
}
