import {deserializeIntoDriveItemCollectionResponse} from './deserializeIntoDriveItemCollectionResponse';
import {DriveItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDriveItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDriveItemCollectionResponse;
}
