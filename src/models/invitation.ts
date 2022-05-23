import {Entity} from './entity';
import {InvitedUserMessageInfo} from './invitedUserMessageInfo';
import {User} from './user';

export interface Invitation extends Entity{
    /** The user created as part of the invitation creation. Read-Only */
    invitedUser?:User | undefined;
    /** The display name of the user being invited. */
    invitedUserDisplayName?:string | undefined;
    /** The email address of the user being invited. Required. The following special characters are not permitted in the email address:Tilde (~)Exclamation point (!)At sign (@)Number sign (#)Dollar sign ($)Percent (%)Circumflex (^)Ampersand (&)Asterisk (*)Parentheses (( ))Hyphen (-)Plus sign (+)Equal sign (=)Brackets ([ ])Braces ({ })Backslash (/)Slash mark (/)Pipe (` */
    invitedUserEmailAddress?:string | undefined;
    /** Additional configuration for the message being sent to the invited user, including customizing message text, language and cc recipient list. */
    invitedUserMessageInfo?:InvitedUserMessageInfo | undefined;
    /** The userType of the user being invited. By default, this is Guest. You can invite as Member if you're are company administrator. The default is false. */
    invitedUserType?:string | undefined;
    /** The URL the user can use to redeem their invitation. Read-only. */
    inviteRedeemUrl?:string | undefined;
    /** The URL user should be redirected to once the invitation is redeemed. Required. */
    inviteRedirectUrl?:string | undefined;
    /** Indicates whether an email should be sent to the user being invited. The default is false. */
    sendInvitationMessage?:boolean | undefined;
    /** The status of the invitation. Possible values: PendingAcceptance, Completed, InProgress, and Error */
    status?:string | undefined;
}
