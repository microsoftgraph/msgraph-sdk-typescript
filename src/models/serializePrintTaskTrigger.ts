import {PrintEvent} from './printEvent';
import type {PrintTaskDefinition} from './printTaskDefinition';
import type {PrintTaskTrigger} from './printTaskTrigger';
import {serializeEntity} from './serializeEntity';
import {serializePrintTaskDefinition} from './serializePrintTaskDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintTaskTrigger(writer: SerializationWriter, printTaskTrigger: PrintTaskTrigger | undefined = {} as PrintTaskTrigger) : void {
        serializeEntity(writer, printTaskTrigger)
        writer.writeObjectValue<PrintTaskDefinition>("definition", printTaskTrigger.definition, serializePrintTaskDefinition);
        writer.writeEnumValue<PrintEvent>("event", printTaskTrigger.event);
}
