import { deserializeIntoWin32LobAppFileSystemRule } from './deserializeIntoWin32LobAppFileSystemRule';
import { deserializeIntoWin32LobAppPowerShellScriptRule } from './deserializeIntoWin32LobAppPowerShellScriptRule';
import { deserializeIntoWin32LobAppProductCodeRule } from './deserializeIntoWin32LobAppProductCodeRule';
import { deserializeIntoWin32LobAppRegistryRule } from './deserializeIntoWin32LobAppRegistryRule';
import { deserializeIntoWin32LobAppRule } from './deserializeIntoWin32LobAppRule';
import { type Win32LobAppFileSystemRule, type Win32LobAppPowerShellScriptRule, type Win32LobAppProductCodeRule, type Win32LobAppRegistryRule, type Win32LobAppRule } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWin32LobAppRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.win32LobAppFileSystemRule":
                    return deserializeIntoWin32LobAppFileSystemRule;
                case "#microsoft.graph.win32LobAppPowerShellScriptRule":
                    return deserializeIntoWin32LobAppPowerShellScriptRule;
                case "#microsoft.graph.win32LobAppProductCodeRule":
                    return deserializeIntoWin32LobAppProductCodeRule;
                case "#microsoft.graph.win32LobAppRegistryRule":
                    return deserializeIntoWin32LobAppRegistryRule;
            }
        }
    }
    return deserializeIntoWin32LobAppRule;
}
