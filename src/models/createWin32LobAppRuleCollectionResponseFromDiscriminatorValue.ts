import {Win32LobAppRuleCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppRuleCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Win32LobAppRuleCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Win32LobAppRuleCollectionResponse();
}
