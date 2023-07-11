import {AccessPackageResourceRole} from './accessPackageResourceRole';
import {AccessPackageResourceScope} from './accessPackageResourceScope';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageResourceRoleScope extends Entity, Parsable {
    /**
     * The createdDateTime property
     */
    createdDateTime?: Date | undefined;
    /**
     * The role property
     */
    role?: AccessPackageResourceRole | undefined;
    /**
     * The scope property
     */
    scope?: AccessPackageResourceScope | undefined;
}
