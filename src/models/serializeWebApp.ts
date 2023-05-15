import {serializeMobileApp} from './serializeMobileApp';
import {WebApp} from './webApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWebApp(writer: SerializationWriter, webApp: WebApp | undefined = {} as WebApp) : void {
        serializeMobileApp(writer, webApp)
        writer.writeStringValue("appUrl", webApp.appUrl);
        writer.writeBooleanValue("useManagedBrowser", webApp.useManagedBrowser);
}
