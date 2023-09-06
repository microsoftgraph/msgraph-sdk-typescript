import { deserializeIntoSharedDriveItem } from './deserializeIntoSharedDriveItem';
import { type SharedDriveItem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSharedDriveItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharedDriveItem;
}
