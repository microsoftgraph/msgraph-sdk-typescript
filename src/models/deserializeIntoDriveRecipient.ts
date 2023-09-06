import { type DriveRecipient } from './driveRecipient';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDriveRecipient(driveRecipient: DriveRecipient | undefined = {} as DriveRecipient) : Record<string, (node: ParseNode) => void> {
    return {
        "alias": n => { driveRecipient.alias = n.getStringValue(); },
        "email": n => { driveRecipient.email = n.getStringValue(); },
        "objectId": n => { driveRecipient.objectId = n.getStringValue(); },
        "@odata.type": n => { driveRecipient.odataType = n.getStringValue(); },
    }
}
