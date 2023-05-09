import {deserializeIntoAndroidLobApp} from './deserializeIntoAndroidLobApp';
import {AndroidLobApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidLobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAndroidLobApp;
}
