import { serializeMobileLobApp } from './serializeMobileLobApp';
import { type WindowsMobileMSI } from './windowsMobileMSI';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsMobileMSI(writer: SerializationWriter, windowsMobileMSI: WindowsMobileMSI | undefined = {} as WindowsMobileMSI) : void {
        serializeMobileLobApp(writer, windowsMobileMSI)
        writer.writeStringValue("commandLine", windowsMobileMSI.commandLine);
        writer.writeBooleanValue("ignoreVersionDetection", windowsMobileMSI.ignoreVersionDetection);
        writer.writeStringValue("productCode", windowsMobileMSI.productCode);
        writer.writeStringValue("productVersion", windowsMobileMSI.productVersion);
}
