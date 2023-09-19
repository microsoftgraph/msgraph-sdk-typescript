import { deserializeIntoIosLobAppCollectionResponse } from './deserializeIntoIosLobAppCollectionResponse';
import { type IosLobAppCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosLobAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosLobAppCollectionResponse;
}
