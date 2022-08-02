import {Win32LobAppFileSystemRule, Win32LobAppPowerShellScriptRule, Win32LobAppProductCodeRule, Win32LobAppRegistryRule, Win32LobAppRule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Win32LobAppRule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.win32LobAppFileSystemRule":
                    return new Win32LobAppFileSystemRule();
                case "#microsoft.graph.win32LobAppPowerShellScriptRule":
                    return new Win32LobAppPowerShellScriptRule();
                case "#microsoft.graph.win32LobAppProductCodeRule":
                    return new Win32LobAppProductCodeRule();
                case "#microsoft.graph.win32LobAppRegistryRule":
                    return new Win32LobAppRegistryRule();
            }
        }
    }
    return new Win32LobAppRule();
}
