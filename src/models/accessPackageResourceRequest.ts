import type {AccessPackageCatalog} from './accessPackageCatalog';
import {AccessPackageRequestState} from './accessPackageRequestState';
import {AccessPackageRequestType} from './accessPackageRequestType';
import type {AccessPackageResource} from './accessPackageResource';
import type {Entity} from './entity';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageResourceRequest extends Entity, Parsable {
    /**
     * The catalog property
     */
    catalog?: AccessPackageCatalog | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    createdDateTime?: Date | undefined;
    /**
     * The type of the request. Use adminAdd to add a resource, if the caller is an administrator or resource owner, adminUpdate to update a resource, or adminRemove to remove a resource.
     */
    requestType?: AccessPackageRequestType | undefined;
    /**
     * The resource property
     */
    resource?: AccessPackageResource | undefined;
    /**
     * The outcome of whether the service was able to add the resource to the catalog.  The value is delivered if the resource was added or removed. Read-only.
     */
    state?: AccessPackageRequestState | undefined;
}
