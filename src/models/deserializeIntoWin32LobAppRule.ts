import {Win32LobAppRule} from './win32LobAppRule';
import {Win32LobAppRuleType} from './win32LobAppRuleType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWin32LobAppRule(win32LobAppRule: Win32LobAppRule | undefined = {} as Win32LobAppRule) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { win32LobAppRule.odataType = n.getStringValue(); },
        "ruleType": n => { win32LobAppRule.ruleType = n.getEnumValue<Win32LobAppRuleType>(Win32LobAppRuleType); },
    }
}
