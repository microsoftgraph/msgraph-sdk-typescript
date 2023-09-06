import { type AccessPackageResourceRole } from './accessPackageResourceRole';
import { type AccessPackageResourceScope } from './accessPackageResourceScope';
import { type Entity } from './entity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AccessPackageResourceRoleScope extends Entity, Parsable {
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    createdDateTime?: Date | undefined;
    /**
     * The role property
     */
    role?: AccessPackageResourceRole | undefined;
    /**
     * The scope property
     */
    scope?: AccessPackageResourceScope | undefined;
}
