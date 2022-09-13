import {Win32LobAppFileSystemRule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppFileSystemRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Win32LobAppFileSystemRule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Win32LobAppFileSystemRule();
}
