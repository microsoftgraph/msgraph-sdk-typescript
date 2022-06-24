import {ManagedAndroidLobAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAndroidLobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAndroidLobAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAndroidLobAppImpl();
}
