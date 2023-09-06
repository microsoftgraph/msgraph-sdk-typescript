import { deserializeIntoDriveItemCollectionResponse } from './deserializeIntoDriveItemCollectionResponse';
import { type DriveItemCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDriveItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDriveItemCollectionResponse;
}
