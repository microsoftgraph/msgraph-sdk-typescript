import {deserializeIntoDriveRecipient} from './deserializeIntoDriveRecipient';
import {DriveRecipient} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDriveRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDriveRecipient;
}
