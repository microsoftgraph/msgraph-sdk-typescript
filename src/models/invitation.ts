import {Entity} from './entity';
import {InvitedUserMessageInfo} from './invitedUserMessageInfo';
import {User} from './user';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Invitation extends Entity, Parsable {
    /**
     * The user created as part of the invitation creation. Read-Only
     */
    invitedUser?: User | undefined;
    /**
     * The display name of the user being invited.
     */
    invitedUserDisplayName?: string | undefined;
    /**
     * The email address of the user being invited. Required. The following special characters are not permitted in the email address:Tilde (~)Exclamation point (!)Number sign (#)Dollar sign ($)Percent (%)Circumflex (^)Ampersand (&)Asterisk (*)Parentheses (( ))Plus sign (+)Equal sign (=)Brackets ([ ])Braces ({ })Backslash (/)Slash mark (/)Pipe (/|)Semicolon (;)Colon (:)Quotation marks (')Angle brackets (< >)Question mark (?)Comma (,)However, the following exceptions apply:A period (.) or a hyphen (-) is permitted anywhere in the user name, except at the beginning or end of the name.An underscore (_) is permitted anywhere in the user name. This includes at the beginning or end of the name.
     */
    invitedUserEmailAddress?: string | undefined;
    /**
     * Additional configuration for the message being sent to the invited user, including customizing message text, language and cc recipient list.
     */
    invitedUserMessageInfo?: InvitedUserMessageInfo | undefined;
    /**
     * The userType of the user being invited. By default, this is Guest. You can invite as Member if you are a company administrator.
     */
    invitedUserType?: string | undefined;
    /**
     * The URL the user can use to redeem their invitation. Read-only.
     */
    inviteRedeemUrl?: string | undefined;
    /**
     * The URL the user should be redirected to once the invitation is redeemed. Required.
     */
    inviteRedirectUrl?: string | undefined;
    /**
     * Reset the user's redemption status and reinvite a user while retaining their user identifier, group memberships, and app assignments. This property allows you to enable a user to sign-in using a different email address from the one in the previous invitation. For more information about using this property, see Reset redemption status for a guest user.
     */
    resetRedemption?: boolean | undefined;
    /**
     * Indicates whether an email should be sent to the user being invited. The default is false.
     */
    sendInvitationMessage?: boolean | undefined;
    /**
     * The status of the invitation. Possible values are: PendingAcceptance, Completed, InProgress, and Error.
     */
    status?: string | undefined;
}
