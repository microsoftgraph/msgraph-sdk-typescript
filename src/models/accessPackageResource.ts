import {AccessPackageResourceEnvironment} from './accessPackageResourceEnvironment';
import {AccessPackageResourceRole} from './accessPackageResourceRole';
import {AccessPackageResourceScope} from './accessPackageResourceScope';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageResource extends Entity, Parsable {
    /**
     * The createdDateTime property
     */
    createdDateTime?: Date | undefined;
    /**
     * The description property
     */
    description?: string | undefined;
    /**
     * The displayName property
     */
    displayName?: string | undefined;
    /**
     * The environment property
     */
    environment?: AccessPackageResourceEnvironment | undefined;
    /**
     * The modifiedDateTime property
     */
    modifiedDateTime?: Date | undefined;
    /**
     * The originId property
     */
    originId?: string | undefined;
    /**
     * The originSystem property
     */
    originSystem?: string | undefined;
    /**
     * The roles property
     */
    roles?: AccessPackageResourceRole[] | undefined;
    /**
     * The scopes property
     */
    scopes?: AccessPackageResourceScope[] | undefined;
}
