import {ManagedAndroidLobApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAndroidLobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAndroidLobApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAndroidLobApp();
}
