import {DirectoryObject} from './directoryObject';
import {Parsable} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export interface AppRoleAssignment extends DirectoryObject, Parsable {
    /**
     * The identifier (id) for the app role which is assigned to the principal. This app role must be exposed in the appRoles property on the resource application's service principal (resourceId). If the resource application has not declared any app roles, a default app role ID of 00000000-0000-0000-0000-000000000000 can be specified to signal that the principal is assigned to the resource app without any specific app roles. Required on create.
     */
    appRoleId?: Guid | undefined;
    /**
     * The time when the app role assignment was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    createdDateTime?: Date | undefined;
    /**
     * The display name of the user, group, or service principal that was granted the app role assignment. Read-only. Supports $filter (eq and startswith).
     */
    principalDisplayName?: string | undefined;
    /**
     * The unique identifier (id) for the user, security group, or service principal being granted the app role. Security groups with dynamic memberships are supported. Required on create.
     */
    principalId?: Guid | undefined;
    /**
     * The type of the assigned principal. This can either be User, Group, or ServicePrincipal. Read-only.
     */
    principalType?: string | undefined;
    /**
     * The display name of the resource app's service principal to which the assignment is made.
     */
    resourceDisplayName?: string | undefined;
    /**
     * The unique identifier (id) for the resource service principal for which the assignment is made. Required on create. Supports $filter (eq only).
     */
    resourceId?: Guid | undefined;
}
