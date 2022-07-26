import {AndroidLobApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidLobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidLobApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidLobApp();
}
