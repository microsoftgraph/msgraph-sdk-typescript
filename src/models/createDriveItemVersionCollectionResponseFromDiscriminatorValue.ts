import { deserializeIntoDriveItemVersionCollectionResponse } from './deserializeIntoDriveItemVersionCollectionResponse';
import { type DriveItemVersionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDriveItemVersionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDriveItemVersionCollectionResponse;
}
