import { type DriveRecipient } from '../../../../../models/driveRecipient';
import { serializeDriveRecipient } from '../../../../../models/serializeDriveRecipient';
import { type InvitePostRequestBody } from './invitePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeInvitePostRequestBody(writer: SerializationWriter, invitePostRequestBody: InvitePostRequestBody | undefined = {} as InvitePostRequestBody) : void {
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
