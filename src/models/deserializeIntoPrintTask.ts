import {createPrintTaskDefinitionFromDiscriminatorValue} from './createPrintTaskDefinitionFromDiscriminatorValue';
import {createPrintTaskStatusFromDiscriminatorValue} from './createPrintTaskStatusFromDiscriminatorValue';
import {createPrintTaskTriggerFromDiscriminatorValue} from './createPrintTaskTriggerFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {PrintTask} from './printTask';
import type {PrintTaskDefinition} from './printTaskDefinition';
import type {PrintTaskStatus} from './printTaskStatus';
import type {PrintTaskTrigger} from './printTaskTrigger';
import {serializePrintTaskDefinition} from './serializePrintTaskDefinition';
import {serializePrintTaskStatus} from './serializePrintTaskStatus';
import {serializePrintTaskTrigger} from './serializePrintTaskTrigger';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintTask(printTask: PrintTask | undefined = {} as PrintTask) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printTask),
        "definition": n => { printTask.definition = n.getObjectValue<PrintTaskDefinition>(createPrintTaskDefinitionFromDiscriminatorValue); },
        "parentUrl": n => { printTask.parentUrl = n.getStringValue(); },
        "status": n => { printTask.status = n.getObjectValue<PrintTaskStatus>(createPrintTaskStatusFromDiscriminatorValue); },
        "trigger": n => { printTask.trigger = n.getObjectValue<PrintTaskTrigger>(createPrintTaskTriggerFromDiscriminatorValue); },
    }
}
