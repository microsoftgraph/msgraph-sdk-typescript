import {DriveItemCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDriveItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DriveItemCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DriveItemCollectionResponseImpl();
}
