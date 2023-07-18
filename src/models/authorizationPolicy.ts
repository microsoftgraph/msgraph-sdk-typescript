import {AllowInvitesFrom} from './allowInvitesFrom';
import {DefaultUserRolePermissions} from './defaultUserRolePermissions';
import {PolicyBase} from './policyBase';
import {Parsable} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export interface AuthorizationPolicy extends Parsable, PolicyBase {
    /**
     * Indicates whether users can sign up for email based subscriptions.
     */
    allowedToSignUpEmailBasedSubscriptions?: boolean | undefined;
    /**
     * Indicates whether users can use the Self-Serve Password Reset feature on the tenant.
     */
    allowedToUseSSPR?: boolean | undefined;
    /**
     * Indicates whether a user can join the tenant by email validation.
     */
    allowEmailVerifiedUsersToJoinOrganization?: boolean | undefined;
    /**
     * Indicates who can invite external users to the organization. Possible values are: none, adminsAndGuestInviters, adminsGuestInvitersAndAllMembers, everyone.  everyone is the default setting for all cloud environments except US Government. For more details, see allowInvitesFrom values.
     */
    allowInvitesFrom?: AllowInvitesFrom | undefined;
    /**
     * Indicates whether user consent for risky apps is allowed. We recommend to keep this as false. Default value is false.
     */
    allowUserConsentForRiskyApps?: boolean | undefined;
    /**
     * To disable the use of MSOL PowerShell, set this property to true. This also disables user-based access to the legacy service endpoint used by MSOL PowerShell. This does not affect Azure Active Directory Connect or Microsoft Graph.
     */
    blockMsolPowerShell?: boolean | undefined;
    /**
     * The defaultUserRolePermissions property
     */
    defaultUserRolePermissions?: DefaultUserRolePermissions | undefined;
    /**
     * Represents role templateId for the role that should be granted to guest user. Currently following roles are supported:  User (a0b1b346-4d3e-4e8b-98f8-753987be4970), Guest User (10dae51f-b6af-4016-8d66-8c2a99b929b3), and Restricted Guest User (2af84b1e-32c8-42b7-82bc-daa82404023b).
     */
    guestUserRoleId?: Guid | undefined;
}
