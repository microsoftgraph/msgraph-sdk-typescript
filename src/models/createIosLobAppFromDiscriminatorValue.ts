import { deserializeIntoIosLobApp } from './deserializeIntoIosLobApp';
import { type IosLobApp } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosLobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosLobApp;
}
