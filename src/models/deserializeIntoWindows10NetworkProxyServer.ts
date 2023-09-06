import { type Windows10NetworkProxyServer } from './windows10NetworkProxyServer';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows10NetworkProxyServer(windows10NetworkProxyServer: Windows10NetworkProxyServer | undefined = {} as Windows10NetworkProxyServer) : Record<string, (node: ParseNode) => void> {
    return {
        "address": n => { windows10NetworkProxyServer.address = n.getStringValue(); },
        "exceptions": n => { windows10NetworkProxyServer.exceptions = n.getCollectionOfPrimitiveValues<string>(); },
        "@odata.type": n => { windows10NetworkProxyServer.odataType = n.getStringValue(); },
        "useForLocalAddresses": n => { windows10NetworkProxyServer.useForLocalAddresses = n.getBooleanValue(); },
    }
}
