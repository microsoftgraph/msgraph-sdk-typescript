import {createInvitedUserMessageInfoFromDiscriminatorValue} from './createInvitedUserMessageInfoFromDiscriminatorValue';
import {createUserFromDiscriminatorValue} from './createUserFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Invitation} from './invitation';
import {InvitedUserMessageInfo} from './invitedUserMessageInfo';
import {serializeInvitedUserMessageInfo} from './serializeInvitedUserMessageInfo';
import {serializeUser} from './serializeUser';
import {User} from './user';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInvitation(invitation: Invitation | undefined = {} as Invitation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(invitation),
        "invitedUser": n => { invitation.invitedUser = n.getObjectValue<User>(createUserFromDiscriminatorValue); },
        "invitedUserDisplayName": n => { invitation.invitedUserDisplayName = n.getStringValue(); },
        "invitedUserEmailAddress": n => { invitation.invitedUserEmailAddress = n.getStringValue(); },
        "invitedUserMessageInfo": n => { invitation.invitedUserMessageInfo = n.getObjectValue<InvitedUserMessageInfo>(createInvitedUserMessageInfoFromDiscriminatorValue); },
        "invitedUserType": n => { invitation.invitedUserType = n.getStringValue(); },
        "inviteRedeemUrl": n => { invitation.inviteRedeemUrl = n.getStringValue(); },
        "inviteRedirectUrl": n => { invitation.inviteRedirectUrl = n.getStringValue(); },
        "resetRedemption": n => { invitation.resetRedemption = n.getBooleanValue(); },
        "sendInvitationMessage": n => { invitation.sendInvitationMessage = n.getBooleanValue(); },
        "status": n => { invitation.status = n.getStringValue(); },
    }
}
