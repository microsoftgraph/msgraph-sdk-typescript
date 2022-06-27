import {AccessPackage} from './accessPackage';
import {AccessPackageAssignment} from './accessPackageAssignment';
import {AccessPackageAssignmentPolicy} from './accessPackageAssignmentPolicy';
import {AccessPackageAssignmentRequest} from './accessPackageAssignmentRequest';
import {AccessPackageCatalog} from './accessPackageCatalog';
import {Approval} from './approval';
import {ConnectedOrganization} from './connectedOrganization';
import {EntitlementManagementSettings} from './entitlementManagementSettings';
import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EntitlementManagement extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Approval stages for decisions associated with access package assignment requests. */
    accessPackageAssignmentApprovals?: Approval[] | undefined;
    /** Represents access package objects. */
    accessPackages?: AccessPackage[] | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Access package assignment policies govern which subjects can request or be assigned an access package via an access package assignment. */
    assignmentPolicies?: AccessPackageAssignmentPolicy[] | undefined;
    /** Access package assignment requests created by or on behalf of a subject. */
    assignmentRequests?: AccessPackageAssignmentRequest[] | undefined;
    /** The assignment of an access package to a subject for a period of time. */
    assignments?: AccessPackageAssignment[] | undefined;
    /** A container for access packages. */
    catalogs?: AccessPackageCatalog[] | undefined;
    /** Represents references to a directory or domain of another organization whose users can request access. */
    connectedOrganizations?: ConnectedOrganization[] | undefined;
    /** Represents the settings that control the behavior of Azure AD entitlement management. */
    settings?: EntitlementManagementSettings | undefined;
}
