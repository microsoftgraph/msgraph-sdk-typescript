import {IosLobAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosLobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosLobAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosLobAppImpl();
}
