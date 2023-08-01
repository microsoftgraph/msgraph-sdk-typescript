import type {AccessPackage} from './accessPackage';
import type {AccessPackageAssignmentPolicy} from './accessPackageAssignmentPolicy';
import type {AccessPackageCatalog} from './accessPackageCatalog';
import type {AccessPackageResourceRoleScope} from './accessPackageResourceRoleScope';
import type {Group} from './group';
import {serializeAccessPackageAssignmentPolicy} from './serializeAccessPackageAssignmentPolicy';
import {serializeAccessPackageCatalog} from './serializeAccessPackageCatalog';
import {serializeAccessPackageResourceRoleScope} from './serializeAccessPackageResourceRoleScope';
import {serializeEntity} from './serializeEntity';
import {serializeGroup} from './serializeGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackage(writer: SerializationWriter, accessPackage: AccessPackage | undefined = {} as AccessPackage) : void {
        serializeEntity(writer, accessPackage)
        writer.writeCollectionOfObjectValues<AccessPackage>("accessPackagesIncompatibleWith", accessPackage.accessPackagesIncompatibleWith, serializeAccessPackage);
        writer.writeCollectionOfObjectValues<AccessPackageAssignmentPolicy>("assignmentPolicies", accessPackage.assignmentPolicies, serializeAccessPackageAssignmentPolicy);
        writer.writeObjectValue<AccessPackageCatalog>("catalog", accessPackage.catalog, serializeAccessPackageCatalog);
        writer.writeDateValue("createdDateTime", accessPackage.createdDateTime);
        writer.writeStringValue("description", accessPackage.description);
        writer.writeStringValue("displayName", accessPackage.displayName);
        writer.writeCollectionOfObjectValues<AccessPackage>("incompatibleAccessPackages", accessPackage.incompatibleAccessPackages, serializeAccessPackage);
        writer.writeCollectionOfObjectValues<Group>("incompatibleGroups", accessPackage.incompatibleGroups, serializeGroup);
        writer.writeBooleanValue("isHidden", accessPackage.isHidden);
        writer.writeDateValue("modifiedDateTime", accessPackage.modifiedDateTime);
        writer.writeCollectionOfObjectValues<AccessPackageResourceRoleScope>("resourceRoleScopes", accessPackage.resourceRoleScopes, serializeAccessPackageResourceRoleScope);
}
