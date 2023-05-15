import {deserializeIntoWin32LobAppRule} from './deserializeIntoWin32LobAppRule';
import {Win32LobAppRegistryRule} from './win32LobAppRegistryRule';
import {Win32LobAppRegistryRuleOperationType} from './win32LobAppRegistryRuleOperationType';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWin32LobAppRegistryRule(win32LobAppRegistryRule: Win32LobAppRegistryRule | undefined = {} as Win32LobAppRegistryRule) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWin32LobAppRule(win32LobAppRegistryRule),
        "check32BitOn64System": n => { win32LobAppRegistryRule.check32BitOn64System = n.getBooleanValue(); },
        "comparisonValue": n => { win32LobAppRegistryRule.comparisonValue = n.getStringValue(); },
        "keyPath": n => { win32LobAppRegistryRule.keyPath = n.getStringValue(); },
        "operationType": n => { win32LobAppRegistryRule.operationType = n.getEnumValue<Win32LobAppRegistryRuleOperationType>(Win32LobAppRegistryRuleOperationType); },
        "operator": n => { win32LobAppRegistryRule.operator = n.getEnumValue<Win32LobAppRuleOperator>(Win32LobAppRuleOperator); },
        "valueName": n => { win32LobAppRegistryRule.valueName = n.getStringValue(); },
    }
}
