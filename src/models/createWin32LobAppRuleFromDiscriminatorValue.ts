import {Win32LobAppRuleImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Win32LobAppRuleImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Win32LobAppRuleImpl();
}
