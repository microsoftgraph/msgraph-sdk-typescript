import {Entity} from './entity';
import {UnifiedRbacResourceNamespace} from './unifiedRbacResourceNamespace';
import {UnifiedRoleAssignment} from './unifiedRoleAssignment';
import {UnifiedRoleAssignmentSchedule} from './unifiedRoleAssignmentSchedule';
import {UnifiedRoleAssignmentScheduleInstance} from './unifiedRoleAssignmentScheduleInstance';
import {UnifiedRoleAssignmentScheduleRequest} from './unifiedRoleAssignmentScheduleRequest';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {UnifiedRoleEligibilitySchedule} from './unifiedRoleEligibilitySchedule';
import {UnifiedRoleEligibilityScheduleInstance} from './unifiedRoleEligibilityScheduleInstance';
import {UnifiedRoleEligibilityScheduleRequest} from './unifiedRoleEligibilityScheduleRequest';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RbacApplication extends Entity, Parsable {
    /**
     * The resourceNamespaces property
     */
    resourceNamespaces?: UnifiedRbacResourceNamespace[] | undefined;
    /**
     * Resource to grant access to users or groups.
     */
    roleAssignments?: UnifiedRoleAssignment[] | undefined;
    /**
     * Instances for active role assignments.
     */
    roleAssignmentScheduleInstances?: UnifiedRoleAssignmentScheduleInstance[] | undefined;
    /**
     * Requests for active role assignments to principals through PIM.
     */
    roleAssignmentScheduleRequests?: UnifiedRoleAssignmentScheduleRequest[] | undefined;
    /**
     * Schedules for active role assignment operations.
     */
    roleAssignmentSchedules?: UnifiedRoleAssignmentSchedule[] | undefined;
    /**
     * Resource representing the roles allowed by RBAC providers and the permissions assigned to the roles.
     */
    roleDefinitions?: UnifiedRoleDefinition[] | undefined;
    /**
     * Instances for role eligibility requests.
     */
    roleEligibilityScheduleInstances?: UnifiedRoleEligibilityScheduleInstance[] | undefined;
    /**
     * Requests for role eligibilities for principals through PIM.
     */
    roleEligibilityScheduleRequests?: UnifiedRoleEligibilityScheduleRequest[] | undefined;
    /**
     * Schedules for role eligibility operations.
     */
    roleEligibilitySchedules?: UnifiedRoleEligibilitySchedule[] | undefined;
}
