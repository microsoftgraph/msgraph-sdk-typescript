import {AllowInvitesFrom} from './allowInvitesFrom';
import {DefaultUserRolePermissions} from './defaultUserRolePermissions';
import {PolicyBase} from './policyBase';

export interface AuthorizationPolicy extends PolicyBase{
    /** Indicates whether users can sign up for email based subscriptions. */
    allowedToSignUpEmailBasedSubscriptions?:boolean | undefined;
    /** Indicates whether the Self-Serve Password Reset feature can be used by users on the tenant. */
    allowedToUseSSPR?:boolean | undefined;
    /** Indicates whether a user can join the tenant by email validation. */
    allowEmailVerifiedUsersToJoinOrganization?:boolean | undefined;
    /** Indicates who can invite external users to the organization. Possible values are: none, adminsAndGuestInviters, adminsGuestInvitersAndAllMembers, everyone.  everyone is the default setting for all cloud environments except US Government. See more in the table below. */
    allowInvitesFrom?:AllowInvitesFrom | undefined;
    /** To disable the use of MSOL PowerShell set this property to true. This will also disable user-based access to the legacy service endpoint used by MSOL PowerShell. This does not affect Azure AD Connect or Microsoft Graph. */
    blockMsolPowerShell?:boolean | undefined;
    /** The defaultUserRolePermissions property */
    defaultUserRolePermissions?:DefaultUserRolePermissions | undefined;
    /** Represents role templateId for the role that should be granted to guest user. Refer to List unifiedRoleDefinitions to find the list of available role templates. Currently following roles are supported:  User (a0b1b346-4d3e-4e8b-98f8-753987be4970), Guest User (10dae51f-b6af-4016-8d66-8c2a99b929b3), and Restricted Guest User (2af84b1e-32c8-42b7-82bc-daa82404023b). */
    guestUserRoleId?:string | undefined;
}
