import {createInvitedUserMessageInfoFromDiscriminatorValue} from './createInvitedUserMessageInfoFromDiscriminatorValue';
import {createUserFromDiscriminatorValue} from './createUserFromDiscriminatorValue';
import {EntityImpl, InvitedUserMessageInfoImpl, UserImpl} from './index';
import {Invitation} from './invitation';
import {InvitedUserMessageInfo} from './invitedUserMessageInfo';
import {User} from './user';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of invitation entities. */
export class InvitationImpl extends EntityImpl implements Invitation, Parsable {
    /** The user created as part of the invitation creation. Read-Only */
    public invitedUser?: User | undefined;
    /** The display name of the user being invited. */
    public invitedUserDisplayName?: string | undefined;
    /** The email address of the user being invited. Required. The following special characters are not permitted in the email address:Tilde (~)Exclamation point (!)At sign (@)Number sign (#)Dollar sign ($)Percent (%)Circumflex (^)Ampersand (&)Asterisk (*)Parentheses (( ))Hyphen (-)Plus sign (+)Equal sign (=)Brackets ([ ])Braces ({ })Backslash (/)Slash mark (/)Pipe (` */
    public invitedUserEmailAddress?: string | undefined;
    /** Additional configuration for the message being sent to the invited user, including customizing message text, language and cc recipient list. */
    public invitedUserMessageInfo?: InvitedUserMessageInfo | undefined;
    /** The userType of the user being invited. By default, this is Guest. You can invite as Member if you're are company administrator. The default is false. */
    public invitedUserType?: string | undefined;
    /** The URL the user can use to redeem their invitation. Read-only. */
    public inviteRedeemUrl?: string | undefined;
    /** The URL user should be redirected to once the invitation is redeemed. Required. */
    public inviteRedirectUrl?: string | undefined;
    /** Indicates whether an email should be sent to the user being invited. The default is false. */
    public sendInvitationMessage?: boolean | undefined;
    /** The status of the invitation. Possible values: PendingAcceptance, Completed, InProgress, and Error */
    public status?: string | undefined;
    /**
     * Instantiates a new invitation and sets the default values.
     * @param invitationParameterValue 
     */
    public constructor(invitationParameterValue?: Invitation | undefined) {
        super();
        this.invitedUser = invitationParameterValue?.invitedUser ;
        this.invitedUserDisplayName = invitationParameterValue?.invitedUserDisplayName ;
        this.invitedUserEmailAddress = invitationParameterValue?.invitedUserEmailAddress ;
        this.invitedUserMessageInfo = invitationParameterValue?.invitedUserMessageInfo ;
        this.invitedUserType = invitationParameterValue?.invitedUserType ;
        this.inviteRedeemUrl = invitationParameterValue?.inviteRedeemUrl ;
        this.inviteRedirectUrl = invitationParameterValue?.inviteRedirectUrl ;
        this.sendInvitationMessage = invitationParameterValue?.sendInvitationMessage ;
        this.status = invitationParameterValue?.status ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "invitedUser": n => { this.invitedUser = n.getObjectValue<UserImpl>(createUserFromDiscriminatorValue); },
            "invitedUserDisplayName": n => { this.invitedUserDisplayName = n.getStringValue(); },
            "invitedUserEmailAddress": n => { this.invitedUserEmailAddress = n.getStringValue(); },
            "invitedUserMessageInfo": n => { this.invitedUserMessageInfo = n.getObjectValue<InvitedUserMessageInfoImpl>(createInvitedUserMessageInfoFromDiscriminatorValue); },
            "invitedUserType": n => { this.invitedUserType = n.getStringValue(); },
            "inviteRedeemUrl": n => { this.inviteRedeemUrl = n.getStringValue(); },
            "inviteRedirectUrl": n => { this.inviteRedirectUrl = n.getStringValue(); },
            "sendInvitationMessage": n => { this.sendInvitationMessage = n.getBooleanValue(); },
            "status": n => { this.status = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.invitedUser){
        writer.writeObjectValue<UserImpl>("invitedUser", new UserImpl(this.invitedUser));
        }
        if(this.invitedUserDisplayName){
        writer.writeStringValue("invitedUserDisplayName", this.invitedUserDisplayName);
        }
        if(this.invitedUserEmailAddress){
        writer.writeStringValue("invitedUserEmailAddress", this.invitedUserEmailAddress);
        }
        if(this.invitedUserMessageInfo){
        writer.writeObjectValue<InvitedUserMessageInfoImpl>("invitedUserMessageInfo", new InvitedUserMessageInfoImpl(this.invitedUserMessageInfo));
        }
        if(this.invitedUserType){
        writer.writeStringValue("invitedUserType", this.invitedUserType);
        }
        if(this.inviteRedeemUrl){
        writer.writeStringValue("inviteRedeemUrl", this.inviteRedeemUrl);
        }
        if(this.inviteRedirectUrl){
        writer.writeStringValue("inviteRedirectUrl", this.inviteRedirectUrl);
        }
        if(this.sendInvitationMessage){
        writer.writeBooleanValue("sendInvitationMessage", this.sendInvitationMessage);
        }
        if(this.status){
        writer.writeStringValue("status", this.status);
        }
    };
}
