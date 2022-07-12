import {Win32LobAppRegistryRule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppRegistryRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Win32LobAppRegistryRule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Win32LobAppRegistryRule();
}
