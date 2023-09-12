import { type DriveRecipient } from './driveRecipient';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDriveRecipient(writer: SerializationWriter, driveRecipient: DriveRecipient | undefined = {} as DriveRecipient) : void {
        writer.writeStringValue("alias", driveRecipient.alias);
        writer.writeStringValue("email", driveRecipient.email);
        writer.writeStringValue("objectId", driveRecipient.objectId);
        writer.writeStringValue("@odata.type", driveRecipient.odataType);
        writer.writeAdditionalData(driveRecipient.additionalData);
}
