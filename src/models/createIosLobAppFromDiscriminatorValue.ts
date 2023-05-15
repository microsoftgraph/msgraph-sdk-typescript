import {deserializeIntoIosLobApp} from './deserializeIntoIosLobApp';
import {IosLobApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosLobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosLobApp;
}
