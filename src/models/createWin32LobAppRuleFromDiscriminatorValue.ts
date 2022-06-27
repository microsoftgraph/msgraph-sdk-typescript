import {Win32LobAppFileSystemRuleImpl, Win32LobAppPowerShellScriptRuleImpl, Win32LobAppProductCodeRuleImpl, Win32LobAppRegistryRuleImpl, Win32LobAppRuleImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Win32LobAppRuleImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.win32LobAppFileSystemRule":
                    return new Win32LobAppFileSystemRuleImpl();
                case "#microsoft.graph.win32LobAppPowerShellScriptRule":
                    return new Win32LobAppPowerShellScriptRuleImpl();
                case "#microsoft.graph.win32LobAppProductCodeRule":
                    return new Win32LobAppProductCodeRuleImpl();
                case "#microsoft.graph.win32LobAppRegistryRule":
                    return new Win32LobAppRegistryRuleImpl();
            }
        }
    }
    return new Win32LobAppRuleImpl();
}
