import {AppScope} from './appScope';
import {DirectoryObject} from './directoryObject';
import {Entity} from './entity';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleAssignment extends Entity, Parsable {
    /**
     * Read-only property with details of the app specific scope when the assignment scope is app specific. Containment entity. Supports $expand.
     */
    appScope?: AppScope | undefined;
    /**
     * Identifier of the app-specific scope when the assignment scope is app-specific.  Either this property or directoryScopeId is required. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units. Supports $filter (eq, in).
     */
    appScopeId?: string | undefined;
    /**
     * The condition property
     */
    condition?: string | undefined;
    /**
     * The directory object that is the scope of the assignment. Read-only. Supports $expand.
     */
    directoryScope?: DirectoryObject | undefined;
    /**
     * Identifier of the directory object representing the scope of the assignment.  Either this property or appScopeId is required. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only. Supports $filter (eq, in).
     */
    directoryScopeId?: string | undefined;
    /**
     * Referencing the assigned principal. Read-only. Supports $expand.
     */
    principal?: DirectoryObject | undefined;
    /**
     * Identifier of the principal to which the assignment is granted. Supports $filter (eq, in).
     */
    principalId?: string | undefined;
    /**
     * The roleDefinition the assignment is for.  Supports $expand. roleDefinition.Id will be auto expanded.
     */
    roleDefinition?: UnifiedRoleDefinition | undefined;
    /**
     * Identifier of the role definition the assignment is for. Read only. Supports $filter (eq, in).
     */
    roleDefinitionId?: string | undefined;
}
