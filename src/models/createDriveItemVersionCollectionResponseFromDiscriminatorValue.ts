import {DriveItemVersionCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDriveItemVersionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DriveItemVersionCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DriveItemVersionCollectionResponseImpl();
}
