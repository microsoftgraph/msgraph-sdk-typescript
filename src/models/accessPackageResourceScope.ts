import type {AccessPackageResource} from './accessPackageResource';
import type {Entity} from './entity';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageResourceScope extends Entity, Parsable {
    /**
     * The description of the scope.
     */
    description?: string | undefined;
    /**
     * The display name of the scope.
     */
    displayName?: string | undefined;
    /**
     * True if the scopes are arranged in a hierarchy and this is the top or root scope of the resource.
     */
    isRootScope?: boolean | undefined;
    /**
     * The unique identifier for the scope in the resource as defined in the origin system.
     */
    originId?: string | undefined;
    /**
     * The origin system for the scope.
     */
    originSystem?: string | undefined;
    /**
     * The resource property
     */
    resource?: AccessPackageResource | undefined;
}
