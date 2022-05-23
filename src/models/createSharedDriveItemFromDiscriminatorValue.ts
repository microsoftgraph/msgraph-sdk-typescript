import {SharedDriveItemImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharedDriveItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharedDriveItemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharedDriveItemImpl();
}
