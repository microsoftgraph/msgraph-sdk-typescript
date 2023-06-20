import {DriveRecipient} from '../../../../../models/driveRecipient';
import {serializeDriveRecipient} from '../../../../../models/serializeDriveRecipient';
import {InvitePostRequestBody} from './invitePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInvitePostRequestBody(invitePostRequestBody: InvitePostRequestBody | undefined = {} as InvitePostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("expirationDateTime", invitePostRequestBody.expirationDateTime);
        writer.writeStringValue("message", invitePostRequestBody.message);
        writer.writeStringValue("password", invitePostRequestBody.password);
        writer.writeCollectionOfObjectValues<DriveRecipient>("recipients", invitePostRequestBody.recipients, serializeDriveRecipient);
        writer.writeBooleanValue("requireSignIn", invitePostRequestBody.requireSignIn);
        writer.writeBooleanValue("retainInheritedPermissions", invitePostRequestBody.retainInheritedPermissions);
        writer.writeCollectionOfPrimitiveValues<string>("roles", invitePostRequestBody.roles);
        writer.writeBooleanValue("sendInvitation", invitePostRequestBody.sendInvitation);
        writer.writeAdditionalData(invitePostRequestBody.additionalData);
}
