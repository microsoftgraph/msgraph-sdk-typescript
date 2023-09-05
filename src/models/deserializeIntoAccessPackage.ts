import { type AccessPackage } from './accessPackage';
import { type AccessPackageAssignmentPolicy } from './accessPackageAssignmentPolicy';
import { type AccessPackageCatalog } from './accessPackageCatalog';
import { type AccessPackageResourceRoleScope } from './accessPackageResourceRoleScope';
import { createAccessPackageAssignmentPolicyFromDiscriminatorValue } from './createAccessPackageAssignmentPolicyFromDiscriminatorValue';
import { createAccessPackageCatalogFromDiscriminatorValue } from './createAccessPackageCatalogFromDiscriminatorValue';
import { createAccessPackageFromDiscriminatorValue } from './createAccessPackageFromDiscriminatorValue';
import { createAccessPackageResourceRoleScopeFromDiscriminatorValue } from './createAccessPackageResourceRoleScopeFromDiscriminatorValue';
import { createGroupFromDiscriminatorValue } from './createGroupFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type Group } from './group';
import { serializeAccessPackage } from './serializeAccessPackage';
import { serializeAccessPackageAssignmentPolicy } from './serializeAccessPackageAssignmentPolicy';
import { serializeAccessPackageCatalog } from './serializeAccessPackageCatalog';
import { serializeAccessPackageResourceRoleScope } from './serializeAccessPackageResourceRoleScope';
import { serializeGroup } from './serializeGroup';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackage(accessPackage: AccessPackage | undefined = {} as AccessPackage) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessPackage),
        "accessPackagesIncompatibleWith": n => { accessPackage.accessPackagesIncompatibleWith = n.getCollectionOfObjectValues<AccessPackage>(createAccessPackageFromDiscriminatorValue); },
        "assignmentPolicies": n => { accessPackage.assignmentPolicies = n.getCollectionOfObjectValues<AccessPackageAssignmentPolicy>(createAccessPackageAssignmentPolicyFromDiscriminatorValue); },
        "catalog": n => { accessPackage.catalog = n.getObjectValue<AccessPackageCatalog>(createAccessPackageCatalogFromDiscriminatorValue); },
        "createdDateTime": n => { accessPackage.createdDateTime = n.getDateValue(); },
        "description": n => { accessPackage.description = n.getStringValue(); },
        "displayName": n => { accessPackage.displayName = n.getStringValue(); },
        "incompatibleAccessPackages": n => { accessPackage.incompatibleAccessPackages = n.getCollectionOfObjectValues<AccessPackage>(createAccessPackageFromDiscriminatorValue); },
        "incompatibleGroups": n => { accessPackage.incompatibleGroups = n.getCollectionOfObjectValues<Group>(createGroupFromDiscriminatorValue); },
        "isHidden": n => { accessPackage.isHidden = n.getBooleanValue(); },
        "modifiedDateTime": n => { accessPackage.modifiedDateTime = n.getDateValue(); },
        "resourceRoleScopes": n => { accessPackage.resourceRoleScopes = n.getCollectionOfObjectValues<AccessPackageResourceRoleScope>(createAccessPackageResourceRoleScopeFromDiscriminatorValue); },
    }
}
