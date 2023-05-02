import {serializeMobileLobApp} from './serializeMobileLobApp';
import {WindowsMobileMSI} from './windowsMobileMSI';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsMobileMSI(writer: SerializationWriter, windowsMobileMSI: WindowsMobileMSI | undefined = {} as WindowsMobileMSI) : void {
        serializeMobileLobApp(writer, windowsMobileMSI)
        writer.writeStringValue("commandLine", windowsMobileMSI.commandLine);
        writer.writeBooleanValue("ignoreVersionDetection", windowsMobileMSI.ignoreVersionDetection);
        writer.writeStringValue("productCode", windowsMobileMSI.productCode);
        writer.writeStringValue("productVersion", windowsMobileMSI.productVersion);
}
