import { type Entity } from './entity';
import { PermissionClassificationType } from './permissionClassificationType';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DelegatedPermissionClassification extends Entity, Parsable {
    /**
     * The classification value being given. Possible value: low. Doesn't support $filter.
     */
    classification?: PermissionClassificationType | undefined;
    /**
     * The unique identifier (id) for the delegated permission listed in the oauth2PermissionScopes collection of the servicePrincipal. Required on create. Doesn't support $filter.
     */
    permissionId?: string | undefined;
    /**
     * The claim value (value) for the delegated permission listed in the oauth2PermissionScopes collection of the servicePrincipal. Doesn't support $filter.
     */
    permissionName?: string | undefined;
}
