import { deserializeIntoWin32LobAppRule } from './deserializeIntoWin32LobAppRule';
import { type Win32LobAppProductCodeRule } from './win32LobAppProductCodeRule';
import { Win32LobAppRuleOperator } from './win32LobAppRuleOperator';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWin32LobAppProductCodeRule(win32LobAppProductCodeRule: Win32LobAppProductCodeRule | undefined = {} as Win32LobAppProductCodeRule) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWin32LobAppRule(win32LobAppProductCodeRule),
        "productCode": n => { win32LobAppProductCodeRule.productCode = n.getStringValue(); },
        "productVersion": n => { win32LobAppProductCodeRule.productVersion = n.getStringValue(); },
        "productVersionOperator": n => { win32LobAppProductCodeRule.productVersionOperator = n.getEnumValue<Win32LobAppRuleOperator>(Win32LobAppRuleOperator); },
    }
}
