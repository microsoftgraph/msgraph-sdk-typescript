import {MacOSLobApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSLobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : MacOSLobApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MacOSLobApp();
}
