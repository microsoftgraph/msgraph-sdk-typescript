import {AppScope} from './appScope';
import {DirectoryObject} from './directoryObject';
import {Entity} from './entity';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';

export interface UnifiedRoleScheduleInstanceBase extends Entity{
    /** Read-only property with details of the app specific scope when the assignment scope is app specific. Containment entity. */
    appScope?:AppScope | undefined;
    /** Identifier of the app-specific scope when the assignment scope is app-specific. The scope of an assignment determines the set of resources for which the principal has been granted access. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units. */
    appScopeId?:string | undefined;
    /** The directory object that is the scope of the assignment. Enables the retrieval of the directory object using $expand at the same time as getting the role assignment. Read-only. */
    directoryScope?:DirectoryObject | undefined;
    /** Identifier of the directory object representing the scope of the assignment. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only. */
    directoryScopeId?:string | undefined;
    /** The principal that is getting a role assignment through the request. Enables the retrieval of the principal using $expand at the same time as getting the role assignment. Read-only. */
    principal?:DirectoryObject | undefined;
    /** Identifier of the principal to which the assignment is being granted to. Can be a group or a user. */
    principalId?:string | undefined;
    /** The roleDefinition for the assignment. Enables the retrieval of the role definition using $expand at the same time as getting the role assignment. The roleDefinition.Id is automatically expanded. */
    roleDefinition?:UnifiedRoleDefinition | undefined;
    /** Identifier of the unifiedRoleDefinition the assignment is for. Read only.  Supports $filter (eq). */
    roleDefinitionId?:string | undefined;
}
