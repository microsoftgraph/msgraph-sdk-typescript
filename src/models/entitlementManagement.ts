import {AccessPackage} from './accessPackage';
import {AccessPackageAssignment} from './accessPackageAssignment';
import {AccessPackageAssignmentPolicy} from './accessPackageAssignmentPolicy';
import {AccessPackageAssignmentRequest} from './accessPackageAssignmentRequest';
import {AccessPackageCatalog} from './accessPackageCatalog';
import {AccessPackageResource} from './accessPackageResource';
import {AccessPackageResourceEnvironment} from './accessPackageResourceEnvironment';
import {AccessPackageResourceRequest} from './accessPackageResourceRequest';
import {AccessPackageResourceRoleScope} from './accessPackageResourceRoleScope';
import {Approval} from './approval';
import {ConnectedOrganization} from './connectedOrganization';
import {EntitlementManagementSettings} from './entitlementManagementSettings';
import {Entity} from './entity';
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
     * The resourceEnvironments property
     */
    resourceEnvironments?: AccessPackageResourceEnvironment[] | undefined;
    /**
     * The resourceRequests property
     */
    resourceRequests?: AccessPackageResourceRequest[] | undefined;
    /**
     * The resourceRoleScopes property
     */
    resourceRoleScopes?: AccessPackageResourceRoleScope[] | undefined;
    /**
     * The resources property
     */
    resources?: AccessPackageResource[] | undefined;
    /**
     * The settings that control the behavior of Azure AD entitlement management.
     */
    settings?: EntitlementManagementSettings | undefined;
}
