import {AppScope} from './appScope';
import {DirectoryObject} from './directoryObject';
import {Entity} from './entity';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleScheduleInstanceBase extends Entity, Parsable {
    /**
     * Read-only property with details of the app-specific scope when the assignment or role eligibility is scoped to an app. Nullable.
     */
    appScope?: AppScope | undefined;
    /**
     * Identifier of the app-specific scope when the assignment or role eligibility is scoped to an app. The scope of an assignment or role eligibility determines the set of resources for which the principal has been granted access. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units.
     */
    appScopeId?: string | undefined;
    /**
     * The directory object that is the scope of the assignment or role eligibility. Read-only.
     */
    directoryScope?: DirectoryObject | undefined;
    /**
     * Identifier of the directory object representing the scope of the assignment or role eligibility. The scope of an assignment or role eligibility determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only.
     */
    directoryScopeId?: string | undefined;
    /**
     * The principal that's getting a role assignment or role eligibility through the request.
     */
    principal?: DirectoryObject | undefined;
    /**
     * Identifier of the principal that has been granted the role assignment or that's eligible for a role.
     */
    principalId?: string | undefined;
    /**
     * Detailed information for the roleDefinition object that is referenced through the roleDefinitionId property.
     */
    roleDefinition?: UnifiedRoleDefinition | undefined;
    /**
     * Identifier of the unifiedRoleDefinition object that is being assigned to the principal or that the principal is eligible for.
     */
    roleDefinitionId?: string | undefined;
}
