import { deserializeIntoDriveCollectionResponse } from './deserializeIntoDriveCollectionResponse';
import { type DriveCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDriveCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDriveCollectionResponse;
}
