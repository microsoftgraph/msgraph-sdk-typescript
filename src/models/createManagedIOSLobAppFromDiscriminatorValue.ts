import {ManagedIOSLobApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedIOSLobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedIOSLobApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedIOSLobApp();
}
