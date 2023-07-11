import {AccessPackage} from './accessPackage';
import {AccessPackageCatalogState} from './accessPackageCatalogState';
import {AccessPackageCatalogType} from './accessPackageCatalogType';
import {AccessPackageResource} from './accessPackageResource';
import {AccessPackageResourceRole} from './accessPackageResourceRole';
import {AccessPackageResourceScope} from './accessPackageResourceScope';
import {CustomCalloutExtension} from './customCalloutExtension';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageCatalog extends Entity, Parsable {
    /**
     * The access packages in this catalog. Read-only. Nullable.
     */
    accessPackages?: AccessPackage[] | undefined;
    /**
     * Whether the catalog is created by a user or entitlement management. The possible values are: userManaged, serviceDefault, serviceManaged, unknownFutureValue.
     */
    catalogType?: AccessPackageCatalogType | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    createdDateTime?: Date | undefined;
    /**
     * The customWorkflowExtensions property
     */
    customWorkflowExtensions?: CustomCalloutExtension[] | undefined;
    /**
     * The description of the access package catalog.
     */
    description?: string | undefined;
    /**
     * The display name of the access package catalog.
     */
    displayName?: string | undefined;
    /**
     * Whether the access packages in this catalog can be requested by users outside of the tenant.
     */
    isExternallyVisible?: boolean | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    modifiedDateTime?: Date | undefined;
    /**
     * The resourceRoles property
     */
    resourceRoles?: AccessPackageResourceRole[] | undefined;
    /**
     * The resources property
     */
    resources?: AccessPackageResource[] | undefined;
    /**
     * The resourceScopes property
     */
    resourceScopes?: AccessPackageResourceScope[] | undefined;
    /**
     * Has the value published if the access packages are available for management. The possible values are: unpublished, published, unknownFutureValue.
     */
    state?: AccessPackageCatalogState | undefined;
}
