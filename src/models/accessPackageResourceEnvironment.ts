import { type AccessPackageResource } from './accessPackageResource';
import { type Entity } from './entity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AccessPackageResourceEnvironment extends Entity, Parsable {
    /**
     * The date and time that this object was created. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    createdDateTime?: Date | undefined;
    /**
     * The description of this object.
     */
    description?: string | undefined;
    /**
     * The display name of this object.
     */
    displayName?: string | undefined;
    /**
     * Determines whether this is default environment or not. It is set to true for all static origin systems, such as Azure AD groups and Azure AD Applications.
     */
    isDefaultEnvironment?: boolean | undefined;
    /**
     * The date and time that this object was last modified. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    modifiedDateTime?: Date | undefined;
    /**
     * The unique identifier of this environment in the origin system.
     */
    originId?: string | undefined;
    /**
     * The type of the resource in the origin system, that is, SharePointOnline. Requires $filter (eq).
     */
    originSystem?: string | undefined;
    /**
     * Read-only. Required.
     */
    resources?: AccessPackageResource[] | undefined;
}
