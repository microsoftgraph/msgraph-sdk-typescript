import { createPrintTaskDefinitionFromDiscriminatorValue } from './createPrintTaskDefinitionFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { PrintEvent } from './printEvent';
import { type PrintTaskDefinition } from './printTaskDefinition';
import { type PrintTaskTrigger } from './printTaskTrigger';
import { serializePrintTaskDefinition } from './serializePrintTaskDefinition';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintTaskTrigger(printTaskTrigger: PrintTaskTrigger | undefined = {} as PrintTaskTrigger) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printTaskTrigger),
        "definition": n => { printTaskTrigger.definition = n.getObjectValue<PrintTaskDefinition>(createPrintTaskDefinitionFromDiscriminatorValue); },
        "event": n => { printTaskTrigger.event = n.getEnumValue<PrintEvent>(PrintEvent); },
    }
}
