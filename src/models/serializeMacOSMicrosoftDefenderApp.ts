import {MacOSMicrosoftDefenderApp} from './macOSMicrosoftDefenderApp';
import {serializeMobileApp} from './serializeMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMacOSMicrosoftDefenderApp(writer: SerializationWriter, macOSMicrosoftDefenderApp: MacOSMicrosoftDefenderApp | undefined = {} as MacOSMicrosoftDefenderApp) : void {
        serializeMobileApp(writer, macOSMicrosoftDefenderApp)
}
