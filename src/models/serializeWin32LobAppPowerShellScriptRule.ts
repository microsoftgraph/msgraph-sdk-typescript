import {RunAsAccountType} from './runAsAccountType';
import {serializeWin32LobAppRule} from './serializeWin32LobAppRule';
import {Win32LobAppPowerShellScriptRule} from './win32LobAppPowerShellScriptRule';
import {Win32LobAppPowerShellScriptRuleOperationType} from './win32LobAppPowerShellScriptRuleOperationType';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWin32LobAppPowerShellScriptRule(writer: SerializationWriter, win32LobAppPowerShellScriptRule: Win32LobAppPowerShellScriptRule | undefined = {} as Win32LobAppPowerShellScriptRule) : void {
        serializeWin32LobAppRule(writer, win32LobAppPowerShellScriptRule)
        writer.writeStringValue("comparisonValue", win32LobAppPowerShellScriptRule.comparisonValue);
        writer.writeStringValue("displayName", win32LobAppPowerShellScriptRule.displayName);
        writer.writeBooleanValue("enforceSignatureCheck", win32LobAppPowerShellScriptRule.enforceSignatureCheck);
        writer.writeEnumValue<Win32LobAppPowerShellScriptRuleOperationType>("operationType", win32LobAppPowerShellScriptRule.operationType);
        writer.writeEnumValue<Win32LobAppRuleOperator>("operator", win32LobAppPowerShellScriptRule.operator);
        writer.writeBooleanValue("runAs32Bit", win32LobAppPowerShellScriptRule.runAs32Bit);
        writer.writeEnumValue<RunAsAccountType>("runAsAccount", win32LobAppPowerShellScriptRule.runAsAccount);
        writer.writeStringValue("scriptContent", win32LobAppPowerShellScriptRule.scriptContent);
}
