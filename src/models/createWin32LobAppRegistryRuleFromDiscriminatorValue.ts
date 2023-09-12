import { deserializeIntoWin32LobAppRegistryRule } from './deserializeIntoWin32LobAppRegistryRule';
import { type Win32LobAppRegistryRule } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWin32LobAppRegistryRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWin32LobAppRegistryRule;
}
