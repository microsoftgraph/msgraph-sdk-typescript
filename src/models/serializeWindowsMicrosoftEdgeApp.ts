import {MicrosoftEdgeChannel} from './microsoftEdgeChannel';
import {serializeMobileApp} from './serializeMobileApp';
import {WindowsMicrosoftEdgeApp} from './windowsMicrosoftEdgeApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsMicrosoftEdgeApp(writer: SerializationWriter, windowsMicrosoftEdgeApp: WindowsMicrosoftEdgeApp | undefined = {} as WindowsMicrosoftEdgeApp) : void {
        serializeMobileApp(writer, windowsMicrosoftEdgeApp)
        writer.writeEnumValue<MicrosoftEdgeChannel>("channel", windowsMicrosoftEdgeApp.channel);
        writer.writeStringValue("displayLanguageLocale", windowsMicrosoftEdgeApp.displayLanguageLocale);
}
