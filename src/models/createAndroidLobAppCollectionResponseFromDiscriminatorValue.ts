import { deserializeIntoAndroidLobAppCollectionResponse } from './deserializeIntoAndroidLobAppCollectionResponse';
import { type AndroidLobAppCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAndroidLobAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAndroidLobAppCollectionResponse;
}
