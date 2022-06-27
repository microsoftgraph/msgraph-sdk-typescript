import {Win32LobAppFileSystemRuleImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppFileSystemRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Win32LobAppFileSystemRuleImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Win32LobAppFileSystemRuleImpl();
}
