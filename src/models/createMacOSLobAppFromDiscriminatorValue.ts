import {deserializeIntoMacOSLobApp} from './deserializeIntoMacOSLobApp';
import {MacOSLobApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSLobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMacOSLobApp;
}
