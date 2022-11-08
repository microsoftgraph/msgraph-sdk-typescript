import {MacOSLobChildApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSLobChildAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : MacOSLobChildApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MacOSLobChildApp();
}
