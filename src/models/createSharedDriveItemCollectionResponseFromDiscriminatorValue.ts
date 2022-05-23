import {SharedDriveItemCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharedDriveItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharedDriveItemCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharedDriveItemCollectionResponseImpl();
}
