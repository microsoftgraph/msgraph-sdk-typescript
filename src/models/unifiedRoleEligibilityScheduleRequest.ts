import {AppScope} from './appScope';
import {DirectoryObject} from './directoryObject';
import {Request} from './request';
import {RequestSchedule} from './requestSchedule';
import {TicketInfo} from './ticketInfo';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {UnifiedRoleEligibilitySchedule} from './unifiedRoleEligibilitySchedule';
import {UnifiedRoleScheduleRequestActions} from './unifiedRoleScheduleRequestActions';

export interface UnifiedRoleEligibilityScheduleRequest extends Request{
    /** Represents the type of the operation on the role eligibility assignment. The possible values are: AdminAssign: For administrators to assign role eligibility to users or groups to roles.AdminExtend: For administrators to extend expiring assignments.AdminUpdate: For administrators to change existing role assignments.AdminRenew: For administrators to renew expired assignments.AdminRemove: For administrators to remove users or groups from eligible roles.UserAdd: For users to activate their eligible assignments.UserExtend: For users to request to extend their expiring eligible assignments.UserRemove: For users to deactivate their active eligible assignments.UserRenew: For users to request to renew their expired eligible assignments. */
    action?:UnifiedRoleScheduleRequestActions | undefined;
    /** Read-only property with details of the app-specific scope when the assignment scope is app-specific. Containment entity. */
    appScope?:AppScope | undefined;
    /** Identifier of the app-specific scope when the assignment scope is app-specific. The scope of an assignment determines the set of resources for which the principal has been granted access. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units. */
    appScopeId?:string | undefined;
    /** Property referencing the directory object that is the scope of the assignment. Provided so that callers can get the directory object using $expand at the same time as getting the role assignment. Read-only. */
    directoryScope?:DirectoryObject | undefined;
    /** Identifier of the directory object representing the scope of the assignment. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only. */
    directoryScopeId?:string | undefined;
    /** A boolean that determines whether the call is a validation or an actual call. Only set this property if you want to check whether an activation is subject to additional rules like MFA before actually submitting the request. */
    isValidationOnly?:boolean | undefined;
    /** A message provided by users and administrators when create the request about why it is needed. */
    justification?:string | undefined;
    /** Property referencing the principal that is getting a role assignment through the request. Provided so that callers can get the principal using $expand at the same time as getting the role assignment. Read-only. */
    principal?:DirectoryObject | undefined;
    /** Identifier of the principal to which the assignment is being granted to. For example, a user or a group. For groups, they must be assignable to roles, that is, the isAssignableToRole of the group property set to true. */
    principalId?:string | undefined;
    /** Property indicating the roleDefinition the assignment is for. Provided so that callers can get the role definition using $expand at the same time as getting the role assignment. roleDefinition.Id will be auto expanded. */
    roleDefinition?:UnifiedRoleDefinition | undefined;
    /** Identifier of the unifiedRoleDefinition the assignment is for. Read only. */
    roleDefinitionId?:string | undefined;
    /** The schedule object of the role assignment request. */
    scheduleInfo?:RequestSchedule | undefined;
    /** Property indicating the schedule for an eligible role assignment. */
    targetSchedule?:UnifiedRoleEligibilitySchedule | undefined;
    /** The time period for which the eligibility assignment is valid. */
    targetScheduleId?:string | undefined;
    /** The details of the ticket number and ticket system that is attached to the role assignment request. */
    ticketInfo?:TicketInfo | undefined;
}
