import {AccessPackage} from './accessPackage';
import {AccessPackageAssignmentApprovalSettings} from './accessPackageAssignmentApprovalSettings';
import {AccessPackageAssignmentRequestorSettings} from './accessPackageAssignmentRequestorSettings';
import {AccessPackageAssignmentReviewSettings} from './accessPackageAssignmentReviewSettings';
import {AccessPackageCatalog} from './accessPackageCatalog';
import {AllowedTargetScope} from './allowedTargetScope';
import {Entity} from './entity';
import {ExpirationPattern} from './expirationPattern';
import {SubjectSet} from './subjectSet';

export interface AccessPackageAssignmentPolicy extends Entity{
    /** The access package with this policy. Read-only. Nullable. Supports $expand. */
    accessPackage?:AccessPackage | undefined;
    /** Principals that can be assigned the access package through this policy. The possible values are: notSpecified, specificDirectoryUsers, specificConnectedOrganizationUsers, specificDirectoryServicePrincipals, allMemberUsers, allDirectoryUsers, allDirectoryServicePrincipals, allConfiguredConnectedOrganizationUsers, allExternalUsers, unknownFutureValue. */
    allowedTargetScope?:AllowedTargetScope | undefined;
    /** Catalog of the access package containing this policy. Read-only. */
    catalog?:AccessPackageCatalog | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    createdDateTime?:Date | undefined;
    /** The description of the policy. */
    description?:string | undefined;
    /** The display name of the policy. Supports $filter (eq). */
    displayName?:string | undefined;
    /** The expiration date for assignments created in this policy. */
    expiration?:ExpirationPattern | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    modifiedDateTime?:Date | undefined;
    /** Who must approve requests for access package in this policy. */
    requestApprovalSettings?:AccessPackageAssignmentApprovalSettings | undefined;
    /** Who can request this access package from this policy. */
    requestorSettings?:AccessPackageAssignmentRequestorSettings | undefined;
    /** Settings for access reviews of assignments through this policy. */
    reviewSettings?:AccessPackageAssignmentReviewSettings | undefined;
    /** The principals that can be assigned access from an access package through this policy. */
    specificAllowedTargets?:SubjectSet[] | undefined;
}
