import {Entity} from './entity';
import {PermissionClassificationType} from './permissionClassificationType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DelegatedPermissionClassification extends Entity, Parsable {
    /**
     * The classification value being given. Possible value: low. Does not support $filter.
     */
    classification?: PermissionClassificationType | undefined;
    /**
     * The unique identifier (id) for the delegated permission listed in the oauth2PermissionScopes collection of the servicePrincipal. Required on create. Does not support $filter.
     */
    permissionId?: string | undefined;
    /**
     * The claim value (value) for the delegated permission listed in the oauth2PermissionScopes collection of the servicePrincipal. Does not support $filter.
     */
    permissionName?: string | undefined;
}
