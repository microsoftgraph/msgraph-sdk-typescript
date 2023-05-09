import {deserializeIntoMacOSLobChildApp} from './deserializeIntoMacOSLobChildApp';
import {MacOSLobChildApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSLobChildAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMacOSLobChildApp;
}
