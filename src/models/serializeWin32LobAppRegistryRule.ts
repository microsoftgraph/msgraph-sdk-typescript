import {serializeWin32LobAppRule} from './serializeWin32LobAppRule';
import {Win32LobAppRegistryRule} from './win32LobAppRegistryRule';
import {Win32LobAppRegistryRuleOperationType} from './win32LobAppRegistryRuleOperationType';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWin32LobAppRegistryRule(writer: SerializationWriter, win32LobAppRegistryRule: Win32LobAppRegistryRule | undefined = {} as Win32LobAppRegistryRule) : void {
        serializeWin32LobAppRule(writer, win32LobAppRegistryRule)
        writer.writeBooleanValue("check32BitOn64System", win32LobAppRegistryRule.check32BitOn64System);
        writer.writeStringValue("comparisonValue", win32LobAppRegistryRule.comparisonValue);
        writer.writeStringValue("keyPath", win32LobAppRegistryRule.keyPath);
        writer.writeEnumValue<Win32LobAppRegistryRuleOperationType>("operationType", win32LobAppRegistryRule.operationType);
        writer.writeEnumValue<Win32LobAppRuleOperator>("operator", win32LobAppRegistryRule.operator);
        writer.writeStringValue("valueName", win32LobAppRegistryRule.valueName);
}
