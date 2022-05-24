import {AccessPackageAssignmentPolicy} from './accessPackageAssignmentPolicy';
import {AccessPackageCatalog} from './accessPackageCatalog';
import {Entity} from './entity';

export interface AccessPackage extends Entity{
    /** Read-only. Nullable. */
    assignmentPolicies?:AccessPackageAssignmentPolicy[] | undefined;
    /** Read-only. Nullable. */
    catalog?:AccessPackageCatalog | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    createdDateTime?:Date | undefined;
    /** The description of the access package. */
    description?:string | undefined;
    /** The display name of the access package. Supports $filter (eq, contains). */
    displayName?:string | undefined;
    /** Whether the access package is hidden from the requestor. */
    isHidden?:boolean | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    modifiedDateTime?:Date | undefined;
}
