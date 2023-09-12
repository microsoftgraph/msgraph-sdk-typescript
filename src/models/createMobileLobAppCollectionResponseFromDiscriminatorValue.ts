import { deserializeIntoMobileLobAppCollectionResponse } from './deserializeIntoMobileLobAppCollectionResponse';
import { type MobileLobAppCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMobileLobAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMobileLobAppCollectionResponse;
}
