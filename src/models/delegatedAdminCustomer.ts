import {DelegatedAdminServiceManagementDetail} from './delegatedAdminServiceManagementDetail';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DelegatedAdminCustomer extends Entity, Parsable {
    /**
     * The Azure AD display name of the customer tenant. Read-only. Supports $orderBy.
     */
    displayName?: string | undefined;
    /**
     * Contains the management details of a service in the customer tenant that's managed by delegated administration.
     */
    serviceManagementDetails?: DelegatedAdminServiceManagementDetail[] | undefined;
    /**
     * The Azure AD-assigned tenant ID of the customer. Read-only.
     */
    tenantId?: string | undefined;
}
