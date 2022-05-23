import {DriveRecipientImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDriveRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : DriveRecipientImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DriveRecipientImpl();
}
