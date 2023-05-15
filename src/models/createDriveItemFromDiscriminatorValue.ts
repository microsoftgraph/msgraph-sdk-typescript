import {deserializeIntoDriveItem} from './deserializeIntoDriveItem';
import {DriveItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDriveItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDriveItem;
}
