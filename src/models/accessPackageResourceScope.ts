import {AccessPackageResource} from './accessPackageResource';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageResourceScope extends Entity, Parsable {
    /**
     * The description property
     */
    description?: string | undefined;
    /**
     * The displayName property
     */
    displayName?: string | undefined;
    /**
     * The isRootScope property
     */
    isRootScope?: boolean | undefined;
    /**
     * The originId property
     */
    originId?: string | undefined;
    /**
     * The originSystem property
     */
    originSystem?: string | undefined;
    /**
     * The resource property
     */
    resource?: AccessPackageResource | undefined;
}
