import { deserializeIntoManagedAndroidLobAppCollectionResponse } from './deserializeIntoManagedAndroidLobAppCollectionResponse';
import { type ManagedAndroidLobAppCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedAndroidLobAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedAndroidLobAppCollectionResponse;
}
