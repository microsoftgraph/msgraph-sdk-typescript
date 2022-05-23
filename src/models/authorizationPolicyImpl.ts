import {AllowInvitesFrom} from './allowInvitesFrom';
import {AuthorizationPolicy} from './authorizationPolicy';
import {createDefaultUserRolePermissionsFromDiscriminatorValue} from './createDefaultUserRolePermissionsFromDiscriminatorValue';
import {DefaultUserRolePermissions} from './defaultUserRolePermissions';
import {DefaultUserRolePermissionsImpl, PolicyBaseImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the policyRoot singleton. */
export class AuthorizationPolicyImpl extends PolicyBaseImpl implements AuthorizationPolicy, Parsable {
    /** Indicates whether users can sign up for email based subscriptions. */
    public allowedToSignUpEmailBasedSubscriptions?: boolean | undefined;
    /** Indicates whether the Self-Serve Password Reset feature can be used by users on the tenant. */
    public allowedToUseSSPR?: boolean | undefined;
    /** Indicates whether a user can join the tenant by email validation. */
    public allowEmailVerifiedUsersToJoinOrganization?: boolean | undefined;
    /** Indicates who can invite external users to the organization. Possible values are: none, adminsAndGuestInviters, adminsGuestInvitersAndAllMembers, everyone.  everyone is the default setting for all cloud environments except US Government. See more in the table below. */
    public allowInvitesFrom?: AllowInvitesFrom | undefined;
    /** To disable the use of MSOL PowerShell set this property to true. This will also disable user-based access to the legacy service endpoint used by MSOL PowerShell. This does not affect Azure AD Connect or Microsoft Graph. */
    public blockMsolPowerShell?: boolean | undefined;
    /** The defaultUserRolePermissions property */
    public defaultUserRolePermissions?: DefaultUserRolePermissions | undefined;
    /** Represents role templateId for the role that should be granted to guest user. Refer to List unifiedRoleDefinitions to find the list of available role templates. Currently following roles are supported:  User (a0b1b346-4d3e-4e8b-98f8-753987be4970), Guest User (10dae51f-b6af-4016-8d66-8c2a99b929b3), and Restricted Guest User (2af84b1e-32c8-42b7-82bc-daa82404023b). */
    public guestUserRoleId?: string | undefined;
    /**
     * Instantiates a new authorizationPolicy and sets the default values.
     * @param authorizationPolicyParameterValue 
     */
    public constructor(authorizationPolicyParameterValue?: AuthorizationPolicy | undefined) {
        super();
        this.allowedToSignUpEmailBasedSubscriptions = authorizationPolicyParameterValue?.allowedToSignUpEmailBasedSubscriptions ;
        this.allowedToUseSSPR = authorizationPolicyParameterValue?.allowedToUseSSPR ;
        this.allowEmailVerifiedUsersToJoinOrganization = authorizationPolicyParameterValue?.allowEmailVerifiedUsersToJoinOrganization ;
        this.allowInvitesFrom = authorizationPolicyParameterValue?.allowInvitesFrom ;
        this.blockMsolPowerShell = authorizationPolicyParameterValue?.blockMsolPowerShell ;
        this.defaultUserRolePermissions = authorizationPolicyParameterValue?.defaultUserRolePermissions ;
        this.guestUserRoleId = authorizationPolicyParameterValue?.guestUserRoleId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowedToSignUpEmailBasedSubscriptions": n => { this.allowedToSignUpEmailBasedSubscriptions = n.getBooleanValue(); },
            "allowedToUseSSPR": n => { this.allowedToUseSSPR = n.getBooleanValue(); },
            "allowEmailVerifiedUsersToJoinOrganization": n => { this.allowEmailVerifiedUsersToJoinOrganization = n.getBooleanValue(); },
            "allowInvitesFrom": n => { this.allowInvitesFrom = n.getEnumValue<AllowInvitesFrom>(AllowInvitesFrom); },
            "blockMsolPowerShell": n => { this.blockMsolPowerShell = n.getBooleanValue(); },
            "defaultUserRolePermissions": n => { this.defaultUserRolePermissions = n.getObjectValue<DefaultUserRolePermissionsImpl>(createDefaultUserRolePermissionsFromDiscriminatorValue); },
            "guestUserRoleId": n => { this.guestUserRoleId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.allowedToSignUpEmailBasedSubscriptions){
        writer.writeBooleanValue("allowedToSignUpEmailBasedSubscriptions", this.allowedToSignUpEmailBasedSubscriptions);
        }
        if(this.allowedToUseSSPR){
        writer.writeBooleanValue("allowedToUseSSPR", this.allowedToUseSSPR);
        }
        if(this.allowEmailVerifiedUsersToJoinOrganization){
        writer.writeBooleanValue("allowEmailVerifiedUsersToJoinOrganization", this.allowEmailVerifiedUsersToJoinOrganization);
        }
        if(this.allowInvitesFrom){
        writer.writeEnumValue<AllowInvitesFrom>("allowInvitesFrom", this.allowInvitesFrom);
        }
        if(this.blockMsolPowerShell){
        writer.writeBooleanValue("blockMsolPowerShell", this.blockMsolPowerShell);
        }
        if(this.defaultUserRolePermissions){
        writer.writeObjectValue<DefaultUserRolePermissionsImpl>("defaultUserRolePermissions", new DefaultUserRolePermissionsImpl(this.defaultUserRolePermissions));
        }
        if(this.guestUserRoleId){
        writer.writeStringValue("guestUserRoleId", this.guestUserRoleId);
        }
    };
}
