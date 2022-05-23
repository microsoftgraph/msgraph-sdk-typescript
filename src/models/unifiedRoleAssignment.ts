import {AppScope} from './appScope';
import {DirectoryObject} from './directoryObject';
import {Entity} from './entity';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';

export interface UnifiedRoleAssignment extends Entity{
    /** Details of the app specific scope when the assignment scope is app specific. Containment entity. */
    appScope?:AppScope | undefined;
    /** Identifier of the app specific scope when the assignment scope is app specific. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. App scopes are scopes that are defined and understood by this application only.  For the entitlement management provider, use app scopes to specify a catalog, for example /AccessPackageCatalog/beedadfe-01d5-4025-910b-84abb9369997. */
    appScopeId?:string | undefined;
    /** The condition property */
    condition?:string | undefined;
    /** The directory object that is the scope of the assignment. Provided so that callers can get the directory object using $expand at the same time as getting the role assignment. Read-only. Supports $expand. */
    directoryScope?:DirectoryObject | undefined;
    /** Identifier of the directory object representing the scope of the assignment. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. App scopes are scopes that are defined and understood by this application only. */
    directoryScopeId?:string | undefined;
    /** The assigned principal. Provided so that callers can get the principal using $expand at the same time as getting the role assignment. Read-only. Supports $expand. */
    principal?:DirectoryObject | undefined;
    /** Identifier of the principal to which the assignment is granted. Supports $filter (eq operator only). */
    principalId?:string | undefined;
    /** The roleDefinition the assignment is for. Provided so that callers can get the role definition using $expand at the same time as getting the role assignment. roleDefinition.id will be auto expanded. Supports $expand. */
    roleDefinition?:UnifiedRoleDefinition | undefined;
    /** Identifier of the unifiedRoleDefinition the assignment is for. Read-only. Supports $filter (eq operator only). */
    roleDefinitionId?:string | undefined;
}
