import {DriveRecipient} from './driveRecipient';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDriveRecipient(driveRecipient: DriveRecipient | undefined = {} as DriveRecipient, writer: SerializationWriter) : void {
        writer.writeStringValue("alias", driveRecipient.alias);
        writer.writeStringValue("email", driveRecipient.email);
        writer.writeStringValue("objectId", driveRecipient.objectId);
        writer.writeStringValue("@odata.type", driveRecipient.odataType);
        writer.writeAdditionalData(driveRecipient.additionalData);
}
