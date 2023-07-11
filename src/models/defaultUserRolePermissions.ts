import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DefaultUserRolePermissions extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Indicates whether the default user role can create applications. This setting corresponds to the Users can register applications setting in the User settings menu in the Azure portal.
     */
    allowedToCreateApps?: boolean | undefined;
    /**
     * Indicates whether the default user role can create security groups. This setting corresponds to the following menus in the Azure portal:  The Users can create security groups in Azure portals, API or PowerShell setting in the Group settings menu.  Users can create security groups setting in the User settings menu.
     */
    allowedToCreateSecurityGroups?: boolean | undefined;
    /**
     * Indicates whether the default user role can create tenants. This setting corresponds to the Restrict non-admin users from creating tenants setting in the User settings menu in the Azure portal.  When this setting is false, users assigned the Tenant Creator role can still create tenants.
     */
    allowedToCreateTenants?: boolean | undefined;
    /**
     * Indicates whether the registered owners of a device can read their own BitLocker recovery keys with default user role.
     */
    allowedToReadBitlockerKeysForOwnedDevice?: boolean | undefined;
    /**
     * Indicates whether the default user role can read other users.
     */
    allowedToReadOtherUsers?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Indicates if user consent to apps is allowed, and if it is, which permission to grant consent and which app consent policy (permissionGrantPolicy) govern the permission for users to grant consent. Value should be in the format managePermissionGrantsForSelf.{id}, where {id} is the id of a built-in or custom app consent policy. An empty list indicates user consent to apps is disabled.
     */
    permissionGrantPoliciesAssigned?: string[] | undefined;
}
