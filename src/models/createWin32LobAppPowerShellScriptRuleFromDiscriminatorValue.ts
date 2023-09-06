import { deserializeIntoWin32LobAppPowerShellScriptRule } from './deserializeIntoWin32LobAppPowerShellScriptRule';
import { type Win32LobAppPowerShellScriptRule } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWin32LobAppPowerShellScriptRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWin32LobAppPowerShellScriptRule;
}
