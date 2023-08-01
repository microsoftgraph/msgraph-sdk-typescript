import type {AccessPackage} from './accessPackage';
import type {AccessPackageAssignmentApprovalSettings} from './accessPackageAssignmentApprovalSettings';
import type {AccessPackageAssignmentRequestorSettings} from './accessPackageAssignmentRequestorSettings';
import type {AccessPackageAssignmentReviewSettings} from './accessPackageAssignmentReviewSettings';
import type {AccessPackageAutomaticRequestSettings} from './accessPackageAutomaticRequestSettings';
import type {AccessPackageCatalog} from './accessPackageCatalog';
import type {AccessPackageQuestion} from './accessPackageQuestion';
import {AllowedTargetScope} from './allowedTargetScope';
import type {CustomExtensionStageSetting} from './customExtensionStageSetting';
import type {Entity} from './entity';
import type {ExpirationPattern} from './expirationPattern';
import type {SubjectSet} from './subjectSet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageAssignmentPolicy extends Entity, Parsable {
    /**
     * Access package containing this policy. Read-only.  Supports $expand.
     */
    accessPackage?: AccessPackage | undefined;
    /**
     * Principals that can be assigned the access package through this policy. The possible values are: notSpecified, specificDirectoryUsers, specificConnectedOrganizationUsers, specificDirectoryServicePrincipals, allMemberUsers, allDirectoryUsers, allDirectoryServicePrincipals, allConfiguredConnectedOrganizationUsers, allExternalUsers, unknownFutureValue.
     */
    allowedTargetScope?: AllowedTargetScope | undefined;
    /**
     * This property is only present for an auto assignment policy; if absent, this is a request-based policy.
     */
    automaticRequestSettings?: AccessPackageAutomaticRequestSettings | undefined;
    /**
     * Catalog of the access package containing this policy. Read-only.
     */
    catalog?: AccessPackageCatalog | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    createdDateTime?: Date | undefined;
    /**
     * The collection of stages when to execute one or more custom access package workflow extensions. Supports $expand.
     */
    customExtensionStageSettings?: CustomExtensionStageSetting[] | undefined;
    /**
     * The description of the policy.
     */
    description?: string | undefined;
    /**
     * The display name of the policy.
     */
    displayName?: string | undefined;
    /**
     * The expiration date for assignments created in this policy.
     */
    expiration?: ExpirationPattern | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    modifiedDateTime?: Date | undefined;
    /**
     * Questions that are posed to the  requestor.
     */
    questions?: AccessPackageQuestion[] | undefined;
    /**
     * Specifies the settings for approval of requests for an access package assignment through this policy. For example, if approval is required for new requests.
     */
    requestApprovalSettings?: AccessPackageAssignmentApprovalSettings | undefined;
    /**
     * Provides additional settings to select who can create a request for an access package assignment through this policy, and what they can include in their request.
     */
    requestorSettings?: AccessPackageAssignmentRequestorSettings | undefined;
    /**
     * Settings for access reviews of assignments through this policy.
     */
    reviewSettings?: AccessPackageAssignmentReviewSettings | undefined;
    /**
     * The principals that can be assigned access from an access package through this policy.
     */
    specificAllowedTargets?: SubjectSet[] | undefined;
}
