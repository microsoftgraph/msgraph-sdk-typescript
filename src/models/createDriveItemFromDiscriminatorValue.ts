import { deserializeIntoDriveItem } from './deserializeIntoDriveItem';
import { type DriveItem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDriveItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDriveItem;
}
