import { type MacOSMicrosoftDefenderApp } from './macOSMicrosoftDefenderApp';
import { serializeMobileApp } from './serializeMobileApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMacOSMicrosoftDefenderApp(writer: SerializationWriter, macOSMicrosoftDefenderApp: MacOSMicrosoftDefenderApp | undefined = {} as MacOSMicrosoftDefenderApp) : void {
        serializeMobileApp(writer, macOSMicrosoftDefenderApp)
}
