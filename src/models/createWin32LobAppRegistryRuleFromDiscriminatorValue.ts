import {Win32LobAppRegistryRuleImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppRegistryRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Win32LobAppRegistryRuleImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Win32LobAppRegistryRuleImpl();
}
