import { type Win32LobAppReturnCode } from './win32LobAppReturnCode';
import { Win32LobAppReturnCodeType } from './win32LobAppReturnCodeType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWin32LobAppReturnCode(writer: SerializationWriter, win32LobAppReturnCode: Win32LobAppReturnCode | undefined = {} as Win32LobAppReturnCode) : void {
        writer.writeStringValue("@odata.type", win32LobAppReturnCode.odataType);
        writer.writeNumberValue("returnCode", win32LobAppReturnCode.returnCode);
        writer.writeEnumValue<Win32LobAppReturnCodeType>("type", win32LobAppReturnCode.type);
        writer.writeAdditionalData(win32LobAppReturnCode.additionalData);
}
