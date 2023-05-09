import {createDriveRecipientFromDiscriminatorValue} from '../../../../../models/createDriveRecipientFromDiscriminatorValue';
import {DriveRecipient} from '../../../../../models/driveRecipient';
import {serializeDriveRecipient} from '../../../../../models/serializeDriveRecipient';
import {InvitePostRequestBody} from './invitePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInvitePostRequestBody(invitePostRequestBody: InvitePostRequestBody | undefined = {} as InvitePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "expirationDateTime": n => { invitePostRequestBody.expirationDateTime = n.getStringValue(); },
        "message": n => { invitePostRequestBody.message = n.getStringValue(); },
        "password": n => { invitePostRequestBody.password = n.getStringValue(); },
        "recipients": n => { invitePostRequestBody.recipients = n.getCollectionOfObjectValues<DriveRecipient>(createDriveRecipientFromDiscriminatorValue); },
        "requireSignIn": n => { invitePostRequestBody.requireSignIn = n.getBooleanValue(); },
        "retainInheritedPermissions": n => { invitePostRequestBody.retainInheritedPermissions = n.getBooleanValue(); },
        "roles": n => { invitePostRequestBody.roles = n.getCollectionOfPrimitiveValues<string>(); },
        "sendInvitation": n => { invitePostRequestBody.sendInvitation = n.getBooleanValue(); },
    }
}
