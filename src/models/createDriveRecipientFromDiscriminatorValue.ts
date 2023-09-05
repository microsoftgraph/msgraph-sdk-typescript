import { deserializeIntoDriveRecipient } from './deserializeIntoDriveRecipient';
import { type DriveRecipient } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDriveRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDriveRecipient;
}
