import type {AccessPackage} from './accessPackage';
import type {AccessPackageAssignment} from './accessPackageAssignment';
import type {AccessPackageAssignmentPolicy} from './accessPackageAssignmentPolicy';
import type {AccessPackageAssignmentRequest} from './accessPackageAssignmentRequest';
import type {AccessPackageCatalog} from './accessPackageCatalog';
import type {AccessPackageResource} from './accessPackageResource';
import type {AccessPackageResourceEnvironment} from './accessPackageResourceEnvironment';
import type {AccessPackageResourceRequest} from './accessPackageResourceRequest';
import type {AccessPackageResourceRoleScope} from './accessPackageResourceRoleScope';
import type {Approval} from './approval';
import type {ConnectedOrganization} from './connectedOrganization';
import type {EntitlementManagementSettings} from './entitlementManagementSettings';
import type {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EntitlementManagement extends Entity, Parsable {
    /**
     * Approval stages for decisions associated with access package assignment requests.
     */
    accessPackageAssignmentApprovals?: Approval[] | undefined;
    /**
     * Access packages define the collection of resource roles and the policies for which subjects can request or be assigned access to those resources.
     */
    accessPackages?: AccessPackage[] | undefined;
    /**
     * Access package assignment policies govern which subjects can request or be assigned an access package via an access package assignment.
     */
    assignmentPolicies?: AccessPackageAssignmentPolicy[] | undefined;
    /**
     * Access package assignment requests created by or on behalf of a subject.
     */
    assignmentRequests?: AccessPackageAssignmentRequest[] | undefined;
    /**
     * The assignment of an access package to a subject for a period of time.
     */
    assignments?: AccessPackageAssignment[] | undefined;
    /**
     * A container for access packages.
     */
    catalogs?: AccessPackageCatalog[] | undefined;
    /**
     * References to a directory or domain of another organization whose users can request access.
     */
    connectedOrganizations?: ConnectedOrganization[] | undefined;
    /**
     * A reference to the geolocation environments in which a resource is located.
     */
    resourceEnvironments?: AccessPackageResourceEnvironment[] | undefined;
    /**
     * Represents a request to add or remove a resource to or from a catalog respectively.
     */
    resourceRequests?: AccessPackageResourceRequest[] | undefined;
    /**
     * The resourceRoleScopes property
     */
    resourceRoleScopes?: AccessPackageResourceRoleScope[] | undefined;
    /**
     * The resources associated with the catalogs.
     */
    resources?: AccessPackageResource[] | undefined;
    /**
     * The settings that control the behavior of Azure AD entitlement management.
     */
    settings?: EntitlementManagementSettings | undefined;
}
