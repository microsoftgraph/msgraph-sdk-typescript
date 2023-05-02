import {deserializeIntoDriveCollectionResponse} from './deserializeIntoDriveCollectionResponse';
import {DriveCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDriveCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDriveCollectionResponse;
}
