import {Win32LobAppPowerShellScriptRuleImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppPowerShellScriptRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Win32LobAppPowerShellScriptRuleImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Win32LobAppPowerShellScriptRuleImpl();
}
