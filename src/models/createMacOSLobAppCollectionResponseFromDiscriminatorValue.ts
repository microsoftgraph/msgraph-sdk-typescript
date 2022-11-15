import {MacOSLobAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSLobAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MacOSLobAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MacOSLobAppCollectionResponse();
}
