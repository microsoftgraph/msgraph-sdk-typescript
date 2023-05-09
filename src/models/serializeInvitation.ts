import {Invitation} from './invitation';
import {InvitedUserMessageInfo} from './invitedUserMessageInfo';
import {serializeEntity} from './serializeEntity';
import {serializeInvitedUserMessageInfo} from './serializeInvitedUserMessageInfo';
import {serializeUser} from './serializeUser';
import {User} from './user';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInvitation(writer: SerializationWriter, invitation: Invitation | undefined = {} as Invitation) : void {
        serializeEntity(writer, invitation)
        writer.writeObjectValue<User>("invitedUser", invitation.invitedUser, serializeUser);
        writer.writeStringValue("invitedUserDisplayName", invitation.invitedUserDisplayName);
        writer.writeStringValue("invitedUserEmailAddress", invitation.invitedUserEmailAddress);
        writer.writeObjectValue<InvitedUserMessageInfo>("invitedUserMessageInfo", invitation.invitedUserMessageInfo, serializeInvitedUserMessageInfo);
        writer.writeStringValue("invitedUserType", invitation.invitedUserType);
        writer.writeStringValue("inviteRedeemUrl", invitation.inviteRedeemUrl);
        writer.writeStringValue("inviteRedirectUrl", invitation.inviteRedirectUrl);
        writer.writeBooleanValue("resetRedemption", invitation.resetRedemption);
        writer.writeBooleanValue("sendInvitationMessage", invitation.sendInvitationMessage);
        writer.writeStringValue("status", invitation.status);
}
