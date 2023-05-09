import {deserializeIntoSharedDriveItemCollectionResponse} from './deserializeIntoSharedDriveItemCollectionResponse';
import {SharedDriveItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharedDriveItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharedDriveItemCollectionResponse;
}
