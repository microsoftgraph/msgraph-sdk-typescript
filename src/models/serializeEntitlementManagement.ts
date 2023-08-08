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
import type {EntitlementManagement} from './entitlementManagement';
import type {EntitlementManagementSettings} from './entitlementManagementSettings';
import {serializeAccessPackage} from './serializeAccessPackage';
import {serializeAccessPackageAssignment} from './serializeAccessPackageAssignment';
import {serializeAccessPackageAssignmentPolicy} from './serializeAccessPackageAssignmentPolicy';
import {serializeAccessPackageAssignmentRequest} from './serializeAccessPackageAssignmentRequest';
import {serializeAccessPackageCatalog} from './serializeAccessPackageCatalog';
import {serializeAccessPackageResource} from './serializeAccessPackageResource';
import {serializeAccessPackageResourceEnvironment} from './serializeAccessPackageResourceEnvironment';
import {serializeAccessPackageResourceRequest} from './serializeAccessPackageResourceRequest';
import {serializeAccessPackageResourceRoleScope} from './serializeAccessPackageResourceRoleScope';
import {serializeApproval} from './serializeApproval';
import {serializeConnectedOrganization} from './serializeConnectedOrganization';
import {serializeEntitlementManagementSettings} from './serializeEntitlementManagementSettings';
import {serializeEntity} from './serializeEntity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEntitlementManagement(writer: SerializationWriter, entitlementManagement: EntitlementManagement | undefined = {} as EntitlementManagement) : void {
        serializeEntity(writer, entitlementManagement)
        writer.writeCollectionOfObjectValues<Approval>("accessPackageAssignmentApprovals", entitlementManagement.accessPackageAssignmentApprovals, serializeApproval);
        writer.writeCollectionOfObjectValues<AccessPackage>("accessPackages", entitlementManagement.accessPackages, serializeAccessPackage);
        writer.writeCollectionOfObjectValues<AccessPackageAssignmentPolicy>("assignmentPolicies", entitlementManagement.assignmentPolicies, serializeAccessPackageAssignmentPolicy);
        writer.writeCollectionOfObjectValues<AccessPackageAssignmentRequest>("assignmentRequests", entitlementManagement.assignmentRequests, serializeAccessPackageAssignmentRequest);
        writer.writeCollectionOfObjectValues<AccessPackageAssignment>("assignments", entitlementManagement.assignments, serializeAccessPackageAssignment);
        writer.writeCollectionOfObjectValues<AccessPackageCatalog>("catalogs", entitlementManagement.catalogs, serializeAccessPackageCatalog);
        writer.writeCollectionOfObjectValues<ConnectedOrganization>("connectedOrganizations", entitlementManagement.connectedOrganizations, serializeConnectedOrganization);
        writer.writeCollectionOfObjectValues<AccessPackageResourceEnvironment>("resourceEnvironments", entitlementManagement.resourceEnvironments, serializeAccessPackageResourceEnvironment);
        writer.writeCollectionOfObjectValues<AccessPackageResourceRequest>("resourceRequests", entitlementManagement.resourceRequests, serializeAccessPackageResourceRequest);
        writer.writeCollectionOfObjectValues<AccessPackageResourceRoleScope>("resourceRoleScopes", entitlementManagement.resourceRoleScopes, serializeAccessPackageResourceRoleScope);
        writer.writeCollectionOfObjectValues<AccessPackageResource>("resources", entitlementManagement.resources, serializeAccessPackageResource);
        writer.writeObjectValue<EntitlementManagementSettings>("settings", entitlementManagement.settings, serializeEntitlementManagementSettings);
}
