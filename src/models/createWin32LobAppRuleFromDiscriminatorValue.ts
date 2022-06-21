import {Win32LobAppRule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Win32LobAppRule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Win32LobAppRule();
}
