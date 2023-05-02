import {Win32LobAppReturnCode} from './win32LobAppReturnCode';
import {Win32LobAppReturnCodeType} from './win32LobAppReturnCodeType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWin32LobAppReturnCode(win32LobAppReturnCode: Win32LobAppReturnCode | undefined = {} as Win32LobAppReturnCode) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { win32LobAppReturnCode.odataType = n.getStringValue(); },
        "returnCode": n => { win32LobAppReturnCode.returnCode = n.getNumberValue(); },
        "type": n => { win32LobAppReturnCode.type = n.getEnumValue<Win32LobAppReturnCodeType>(Win32LobAppReturnCodeType); },
    }
}
