import {deserializeIntoSharedDriveItem} from './deserializeIntoSharedDriveItem';
import {SharedDriveItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharedDriveItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharedDriveItem;
}
