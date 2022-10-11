import {AndroidLobAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidLobAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidLobAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidLobAppCollectionResponse();
}
