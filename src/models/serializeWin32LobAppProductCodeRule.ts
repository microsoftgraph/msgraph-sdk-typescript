import {serializeWin32LobAppRule} from './serializeWin32LobAppRule';
import {Win32LobAppProductCodeRule} from './win32LobAppProductCodeRule';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWin32LobAppProductCodeRule(writer: SerializationWriter, win32LobAppProductCodeRule: Win32LobAppProductCodeRule | undefined = {} as Win32LobAppProductCodeRule) : void {
        serializeWin32LobAppRule(writer, win32LobAppProductCodeRule)
        writer.writeStringValue("productCode", win32LobAppProductCodeRule.productCode);
        writer.writeStringValue("productVersion", win32LobAppProductCodeRule.productVersion);
        writer.writeEnumValue<Win32LobAppRuleOperator>("productVersionOperator", win32LobAppProductCodeRule.productVersionOperator);
}
