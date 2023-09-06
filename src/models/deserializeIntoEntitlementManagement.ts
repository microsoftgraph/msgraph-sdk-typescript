import { type AccessPackage } from './accessPackage';
import { type AccessPackageAssignment } from './accessPackageAssignment';
import { type AccessPackageAssignmentPolicy } from './accessPackageAssignmentPolicy';
import { type AccessPackageAssignmentRequest } from './accessPackageAssignmentRequest';
import { type AccessPackageCatalog } from './accessPackageCatalog';
import { type AccessPackageResource } from './accessPackageResource';
import { type AccessPackageResourceEnvironment } from './accessPackageResourceEnvironment';
import { type AccessPackageResourceRequest } from './accessPackageResourceRequest';
import { type AccessPackageResourceRoleScope } from './accessPackageResourceRoleScope';
import { type Approval } from './approval';
import { type ConnectedOrganization } from './connectedOrganization';
import { createAccessPackageAssignmentFromDiscriminatorValue } from './createAccessPackageAssignmentFromDiscriminatorValue';
import { createAccessPackageAssignmentPolicyFromDiscriminatorValue } from './createAccessPackageAssignmentPolicyFromDiscriminatorValue';
import { createAccessPackageAssignmentRequestFromDiscriminatorValue } from './createAccessPackageAssignmentRequestFromDiscriminatorValue';
import { createAccessPackageCatalogFromDiscriminatorValue } from './createAccessPackageCatalogFromDiscriminatorValue';
import { createAccessPackageFromDiscriminatorValue } from './createAccessPackageFromDiscriminatorValue';
import { createAccessPackageResourceEnvironmentFromDiscriminatorValue } from './createAccessPackageResourceEnvironmentFromDiscriminatorValue';
import { createAccessPackageResourceFromDiscriminatorValue } from './createAccessPackageResourceFromDiscriminatorValue';
import { createAccessPackageResourceRequestFromDiscriminatorValue } from './createAccessPackageResourceRequestFromDiscriminatorValue';
import { createAccessPackageResourceRoleScopeFromDiscriminatorValue } from './createAccessPackageResourceRoleScopeFromDiscriminatorValue';
import { createApprovalFromDiscriminatorValue } from './createApprovalFromDiscriminatorValue';
import { createConnectedOrganizationFromDiscriminatorValue } from './createConnectedOrganizationFromDiscriminatorValue';
import { createEntitlementManagementSettingsFromDiscriminatorValue } from './createEntitlementManagementSettingsFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type EntitlementManagement } from './entitlementManagement';
import { type EntitlementManagementSettings } from './entitlementManagementSettings';
import { serializeAccessPackage } from './serializeAccessPackage';
import { serializeAccessPackageAssignment } from './serializeAccessPackageAssignment';
import { serializeAccessPackageAssignmentPolicy } from './serializeAccessPackageAssignmentPolicy';
import { serializeAccessPackageAssignmentRequest } from './serializeAccessPackageAssignmentRequest';
import { serializeAccessPackageCatalog } from './serializeAccessPackageCatalog';
import { serializeAccessPackageResource } from './serializeAccessPackageResource';
import { serializeAccessPackageResourceEnvironment } from './serializeAccessPackageResourceEnvironment';
import { serializeAccessPackageResourceRequest } from './serializeAccessPackageResourceRequest';
import { serializeAccessPackageResourceRoleScope } from './serializeAccessPackageResourceRoleScope';
import { serializeApproval } from './serializeApproval';
import { serializeConnectedOrganization } from './serializeConnectedOrganization';
import { serializeEntitlementManagementSettings } from './serializeEntitlementManagementSettings';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEntitlementManagement(entitlementManagement: EntitlementManagement | undefined = {} as EntitlementManagement) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(entitlementManagement),
        "accessPackageAssignmentApprovals": n => { entitlementManagement.accessPackageAssignmentApprovals = n.getCollectionOfObjectValues<Approval>(createApprovalFromDiscriminatorValue); },
        "accessPackages": n => { entitlementManagement.accessPackages = n.getCollectionOfObjectValues<AccessPackage>(createAccessPackageFromDiscriminatorValue); },
        "assignmentPolicies": n => { entitlementManagement.assignmentPolicies = n.getCollectionOfObjectValues<AccessPackageAssignmentPolicy>(createAccessPackageAssignmentPolicyFromDiscriminatorValue); },
        "assignmentRequests": n => { entitlementManagement.assignmentRequests = n.getCollectionOfObjectValues<AccessPackageAssignmentRequest>(createAccessPackageAssignmentRequestFromDiscriminatorValue); },
        "assignments": n => { entitlementManagement.assignments = n.getCollectionOfObjectValues<AccessPackageAssignment>(createAccessPackageAssignmentFromDiscriminatorValue); },
        "catalogs": n => { entitlementManagement.catalogs = n.getCollectionOfObjectValues<AccessPackageCatalog>(createAccessPackageCatalogFromDiscriminatorValue); },
        "connectedOrganizations": n => { entitlementManagement.connectedOrganizations = n.getCollectionOfObjectValues<ConnectedOrganization>(createConnectedOrganizationFromDiscriminatorValue); },
        "resourceEnvironments": n => { entitlementManagement.resourceEnvironments = n.getCollectionOfObjectValues<AccessPackageResourceEnvironment>(createAccessPackageResourceEnvironmentFromDiscriminatorValue); },
        "resourceRequests": n => { entitlementManagement.resourceRequests = n.getCollectionOfObjectValues<AccessPackageResourceRequest>(createAccessPackageResourceRequestFromDiscriminatorValue); },
        "resourceRoleScopes": n => { entitlementManagement.resourceRoleScopes = n.getCollectionOfObjectValues<AccessPackageResourceRoleScope>(createAccessPackageResourceRoleScopeFromDiscriminatorValue); },
        "resources": n => { entitlementManagement.resources = n.getCollectionOfObjectValues<AccessPackageResource>(createAccessPackageResourceFromDiscriminatorValue); },
        "settings": n => { entitlementManagement.settings = n.getObjectValue<EntitlementManagementSettings>(createEntitlementManagementSettingsFromDiscriminatorValue); },
    }
}
