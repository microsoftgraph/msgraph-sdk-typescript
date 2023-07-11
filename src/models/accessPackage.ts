import {AccessPackageAssignmentPolicy} from './accessPackageAssignmentPolicy';
import {AccessPackageCatalog} from './accessPackageCatalog';
import {AccessPackageResourceRoleScope} from './accessPackageResourceRoleScope';
import {Entity} from './entity';
import {Group} from './group';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackage extends Entity, Parsable {
    /**
     * The access packages that are incompatible with this package. Read-only.
     */
    accessPackagesIncompatibleWith?: AccessPackage[] | undefined;
    /**
     * The assignmentPolicies property
     */
    assignmentPolicies?: AccessPackageAssignmentPolicy[] | undefined;
    /**
     * The catalog property
     */
    catalog?: AccessPackageCatalog | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    createdDateTime?: Date | undefined;
    /**
     * The description of the access package.
     */
    description?: string | undefined;
    /**
     * The display name of the access package. Supports $filter (eq, contains).
     */
    displayName?: string | undefined;
    /**
     * The access packages whose assigned users are ineligible to be assigned this access package.
     */
    incompatibleAccessPackages?: AccessPackage[] | undefined;
    /**
     * The groups whose members are ineligible to be assigned this access package.
     */
    incompatibleGroups?: Group[] | undefined;
    /**
     * Whether the access package is hidden from the requestor.
     */
    isHidden?: boolean | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    modifiedDateTime?: Date | undefined;
    /**
     * The resourceRoleScopes property
     */
    resourceRoleScopes?: AccessPackageResourceRoleScope[] | undefined;
}
