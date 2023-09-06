import { type AccessPackageResourceEnvironment } from './accessPackageResourceEnvironment';
import { type AccessPackageResourceRole } from './accessPackageResourceRole';
import { type AccessPackageResourceScope } from './accessPackageResourceScope';
import { type Entity } from './entity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AccessPackageResource extends Entity, Parsable {
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    createdDateTime?: Date | undefined;
    /**
     * A description for the resource.
     */
    description?: string | undefined;
    /**
     * The display name of the resource, such as the application name, group name or site name.
     */
    displayName?: string | undefined;
    /**
     * Contains the environment information for the resource. This can be set using either the @odata.bind annotation or the environment's originId.Supports $expand.
     */
    environment?: AccessPackageResourceEnvironment | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    modifiedDateTime?: Date | undefined;
    /**
     * The unique identifier of the resource in the origin system. In the case of an Azure AD group, this is the identifier of the group.
     */
    originId?: string | undefined;
    /**
     * The type of the resource in the origin system, such as SharePointOnline, AadApplication or AadGroup.
     */
    originSystem?: string | undefined;
    /**
     * Read-only. Nullable. Supports $expand.
     */
    roles?: AccessPackageResourceRole[] | undefined;
    /**
     * Read-only. Nullable. Supports $expand.
     */
    scopes?: AccessPackageResourceScope[] | undefined;
}
