import {AccessPackage} from './accessPackage';
import {AccessPackageAssignment} from './accessPackageAssignment';
import {AccessPackageAssignmentPolicy} from './accessPackageAssignmentPolicy';
import {AccessPackageAssignmentRequest} from './accessPackageAssignmentRequest';
import {AccessPackageCatalog} from './accessPackageCatalog';
import {Approval} from './approval';
import {ConnectedOrganization} from './connectedOrganization';
import {EntitlementManagementSettings} from './entitlementManagementSettings';
import {Entity} from './entity';

export interface EntitlementManagement extends Entity{
    /** Approval stages for assignment requests. */
    accessPackageAssignmentApprovals?:Approval[] | undefined;
    /** Represents access package objects. */
    accessPackages?:AccessPackage[] | undefined;
    /** Access package assignment policies. */
    assignmentPolicies?:AccessPackageAssignmentPolicy[] | undefined;
    /** Represents access package assignment requests created by or on behalf of a user. */
    assignmentRequests?:AccessPackageAssignmentRequest[] | undefined;
    /** Represents the grant of an access package to a subject (user or group). */
    assignments?:AccessPackageAssignment[] | undefined;
    /** Represents a collection of access packages. */
    catalogs?:AccessPackageCatalog[] | undefined;
    /** Represents references to a directory or domain of another organization whose users can request access. */
    connectedOrganizations?:ConnectedOrganization[] | undefined;
    /** Represents the settings that control the behavior of Azure AD entitlement management. */
    settings?:EntitlementManagementSettings | undefined;
}
