import {IosLobApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosLobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosLobApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosLobApp();
}
