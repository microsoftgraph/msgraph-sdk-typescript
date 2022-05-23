import {AccessPackage} from './accessPackage';
import {AccessPackageCatalogState} from './accessPackageCatalogState';
import {AccessPackageCatalogType} from './accessPackageCatalogType';
import {Entity} from './entity';

export interface AccessPackageCatalog extends Entity{
    /** The access packages in this catalog. Read-only. Nullable. Supports $expand. */
    accessPackages?:AccessPackage[] | undefined;
    /** One of UserManaged or ServiceDefault. */
    catalogType?:AccessPackageCatalogType | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    createdDateTime?:Date | undefined;
    /** The description of the access package catalog. */
    description?:string | undefined;
    /** The display name of the access package catalog. Supports $filter (eq, contains). */
    displayName?:string | undefined;
    /** Whether the access packages in this catalog can be requested by users outside of the tenant. */
    isExternallyVisible?:boolean | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    modifiedDateTime?:Date | undefined;
    /** Has the value published if the access packages are available for management. The possible values are: unpublished, published, unknownFutureValue. */
    state?:AccessPackageCatalogState | undefined;
}
