import {AppScope} from './appScope';
import {DirectoryObject} from './directoryObject';
import {Entity} from './entity';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleScheduleBase extends Entity, Parsable {
    /**
     * Read-only property with details of the app-specific scope when the role eligibility or assignment is scoped to an app. Nullable.
     */
    appScope?: AppScope | undefined;
    /**
     * Identifier of the app-specific scope when the assignment or eligibility is scoped to an app. The scope of an assignment or eligibility determines the set of resources for which the principal has been granted access. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units.
     */
    appScopeId?: string | undefined;
    /**
     * When the schedule was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * Identifier of the object through which this schedule was created.
     */
    createdUsing?: string | undefined;
    /**
     * The directory object that is the scope of the role eligibility or assignment. Read-only.
     */
    directoryScope?: DirectoryObject | undefined;
    /**
     * Identifier of the directory object representing the scope of the assignment or eligibility. The scope of an assignment or eligibility determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only.
     */
    directoryScopeId?: string | undefined;
    /**
     * When the schedule was last modified.
     */
    modifiedDateTime?: Date | undefined;
    /**
     * The principal that's getting a role assignment or that's eligible for a role through the request.
     */
    principal?: DirectoryObject | undefined;
    /**
     * Identifier of the principal that has been granted the role assignment or eligibility.
     */
    principalId?: string | undefined;
    /**
     * Detailed information for the roleDefinition object that is referenced through the roleDefinitionId property.
     */
    roleDefinition?: UnifiedRoleDefinition | undefined;
    /**
     * Identifier of the unifiedRoleDefinition object that is being assigned to the principal or that a principal is eligible for.
     */
    roleDefinitionId?: string | undefined;
    /**
     * The status of the role assignment or eligibility request.
     */
    status?: string | undefined;
}
