import {IosLobAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosLobAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosLobAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosLobAppCollectionResponse();
}
