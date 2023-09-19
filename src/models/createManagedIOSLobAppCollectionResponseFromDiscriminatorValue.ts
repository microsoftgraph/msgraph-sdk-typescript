import { deserializeIntoManagedIOSLobAppCollectionResponse } from './deserializeIntoManagedIOSLobAppCollectionResponse';
import { type ManagedIOSLobAppCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedIOSLobAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedIOSLobAppCollectionResponse;
}
