import {deserializeIntoWin32LobAppRule} from './deserializeIntoWin32LobAppRule';
import {RunAsAccountType} from './runAsAccountType';
import {Win32LobAppPowerShellScriptRule} from './win32LobAppPowerShellScriptRule';
import {Win32LobAppPowerShellScriptRuleOperationType} from './win32LobAppPowerShellScriptRuleOperationType';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWin32LobAppPowerShellScriptRule(win32LobAppPowerShellScriptRule: Win32LobAppPowerShellScriptRule | undefined = {} as Win32LobAppPowerShellScriptRule) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWin32LobAppRule(win32LobAppPowerShellScriptRule),
        "comparisonValue": n => { win32LobAppPowerShellScriptRule.comparisonValue = n.getStringValue(); },
        "displayName": n => { win32LobAppPowerShellScriptRule.displayName = n.getStringValue(); },
        "enforceSignatureCheck": n => { win32LobAppPowerShellScriptRule.enforceSignatureCheck = n.getBooleanValue(); },
        "operationType": n => { win32LobAppPowerShellScriptRule.operationType = n.getEnumValue<Win32LobAppPowerShellScriptRuleOperationType>(Win32LobAppPowerShellScriptRuleOperationType); },
        "operator": n => { win32LobAppPowerShellScriptRule.operator = n.getEnumValue<Win32LobAppRuleOperator>(Win32LobAppRuleOperator); },
        "runAs32Bit": n => { win32LobAppPowerShellScriptRule.runAs32Bit = n.getBooleanValue(); },
        "runAsAccount": n => { win32LobAppPowerShellScriptRule.runAsAccount = n.getEnumValue<RunAsAccountType>(RunAsAccountType); },
        "scriptContent": n => { win32LobAppPowerShellScriptRule.scriptContent = n.getStringValue(); },
    }
}
