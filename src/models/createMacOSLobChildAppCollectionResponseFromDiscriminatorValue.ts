import {MacOSLobChildAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSLobChildAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MacOSLobChildAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MacOSLobChildAppCollectionResponse();
}
