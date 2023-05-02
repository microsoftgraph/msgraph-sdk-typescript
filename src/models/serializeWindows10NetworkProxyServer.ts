import {Windows10NetworkProxyServer} from './windows10NetworkProxyServer';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindows10NetworkProxyServer(writer: SerializationWriter, windows10NetworkProxyServer: Windows10NetworkProxyServer | undefined = {} as Windows10NetworkProxyServer) : void {
        writer.writeStringValue("address", windows10NetworkProxyServer.address);
        writer.writeCollectionOfPrimitiveValues<string>("exceptions", windows10NetworkProxyServer.exceptions);
        writer.writeStringValue("@odata.type", windows10NetworkProxyServer.odataType);
        writer.writeBooleanValue("useForLocalAddresses", windows10NetworkProxyServer.useForLocalAddresses);
        writer.writeAdditionalData(windows10NetworkProxyServer.additionalData);
}
