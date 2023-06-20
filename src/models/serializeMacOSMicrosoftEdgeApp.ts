import {MacOSMicrosoftEdgeApp} from './macOSMicrosoftEdgeApp';
import {MicrosoftEdgeChannel} from './microsoftEdgeChannel';
import {serializeMobileApp} from './serializeMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMacOSMicrosoftEdgeApp(macOSMicrosoftEdgeApp: MacOSMicrosoftEdgeApp | undefined = {} as MacOSMicrosoftEdgeApp, writer: SerializationWriter) : void {
        serializeMobileApp(writer, macOSMicrosoftEdgeApp)
        writer.writeEnumValue<MicrosoftEdgeChannel>("channel", macOSMicrosoftEdgeApp.channel);
}
