import { deserializeIntoWin32LobAppFileSystemRule } from './deserializeIntoWin32LobAppFileSystemRule';
import { type Win32LobAppFileSystemRule } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWin32LobAppFileSystemRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWin32LobAppFileSystemRule;
}
