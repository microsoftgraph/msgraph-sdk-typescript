import {Win32LobAppPowerShellScriptRule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppPowerShellScriptRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Win32LobAppPowerShellScriptRule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Win32LobAppPowerShellScriptRule();
}
