import {deserializeIntoWin32LobAppRule} from './deserializeIntoWin32LobAppRule';
import {Win32LobAppFileSystemOperationType} from './win32LobAppFileSystemOperationType';
import {Win32LobAppFileSystemRule} from './win32LobAppFileSystemRule';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWin32LobAppFileSystemRule(win32LobAppFileSystemRule: Win32LobAppFileSystemRule | undefined = {} as Win32LobAppFileSystemRule) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWin32LobAppRule(win32LobAppFileSystemRule),
        "check32BitOn64System": n => { win32LobAppFileSystemRule.check32BitOn64System = n.getBooleanValue(); },
        "comparisonValue": n => { win32LobAppFileSystemRule.comparisonValue = n.getStringValue(); },
        "fileOrFolderName": n => { win32LobAppFileSystemRule.fileOrFolderName = n.getStringValue(); },
        "operationType": n => { win32LobAppFileSystemRule.operationType = n.getEnumValue<Win32LobAppFileSystemOperationType>(Win32LobAppFileSystemOperationType); },
        "operator": n => { win32LobAppFileSystemRule.operator = n.getEnumValue<Win32LobAppRuleOperator>(Win32LobAppRuleOperator); },
        "path": n => { win32LobAppFileSystemRule.path = n.getStringValue(); },
    }
}
