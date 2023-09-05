import { deserializeIntoMacOSLobApp } from './deserializeIntoMacOSLobApp';
import { type MacOSLobApp } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMacOSLobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMacOSLobApp;
}
