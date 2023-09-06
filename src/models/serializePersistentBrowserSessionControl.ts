import { type PersistentBrowserSessionControl } from './persistentBrowserSessionControl';
import { PersistentBrowserSessionMode } from './persistentBrowserSessionMode';
import { serializeConditionalAccessSessionControl } from './serializeConditionalAccessSessionControl';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePersistentBrowserSessionControl(writer: SerializationWriter, persistentBrowserSessionControl: PersistentBrowserSessionControl | undefined = {} as PersistentBrowserSessionControl) : void {
        serializeConditionalAccessSessionControl(writer, persistentBrowserSessionControl)
        writer.writeEnumValue<PersistentBrowserSessionMode>("mode", persistentBrowserSessionControl.mode);
}
