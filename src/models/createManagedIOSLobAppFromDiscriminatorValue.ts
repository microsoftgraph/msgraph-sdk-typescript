import {ManagedIOSLobAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedIOSLobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedIOSLobAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedIOSLobAppImpl();
}
