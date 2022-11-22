import {ManagedIOSLobAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedIOSLobAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedIOSLobAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedIOSLobAppCollectionResponse();
}
