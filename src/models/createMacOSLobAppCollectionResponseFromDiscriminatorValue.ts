import { deserializeIntoMacOSLobAppCollectionResponse } from './deserializeIntoMacOSLobAppCollectionResponse';
import { type MacOSLobAppCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMacOSLobAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMacOSLobAppCollectionResponse;
}
