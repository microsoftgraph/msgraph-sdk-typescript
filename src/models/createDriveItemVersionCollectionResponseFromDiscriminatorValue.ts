import {deserializeIntoDriveItemVersionCollectionResponse} from './deserializeIntoDriveItemVersionCollectionResponse';
import {DriveItemVersionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDriveItemVersionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDriveItemVersionCollectionResponse;
}
