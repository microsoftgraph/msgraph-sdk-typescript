import {ManagedAndroidLobAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAndroidLobAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAndroidLobAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAndroidLobAppCollectionResponse();
}
