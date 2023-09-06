import { MicrosoftEdgeChannel } from './microsoftEdgeChannel';
import { serializeMobileApp } from './serializeMobileApp';
import { type WindowsMicrosoftEdgeApp } from './windowsMicrosoftEdgeApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsMicrosoftEdgeApp(writer: SerializationWriter, windowsMicrosoftEdgeApp: WindowsMicrosoftEdgeApp | undefined = {} as WindowsMicrosoftEdgeApp) : void {
        serializeMobileApp(writer, windowsMicrosoftEdgeApp)
        writer.writeEnumValue<MicrosoftEdgeChannel>("channel", windowsMicrosoftEdgeApp.channel);
        writer.writeStringValue("displayLanguageLocale", windowsMicrosoftEdgeApp.displayLanguageLocale);
}
