import {serializeWorkflowExecutionTrigger} from './serializeWorkflowExecutionTrigger';
import {TimeBasedAttributeTrigger} from './timeBasedAttributeTrigger';
import {WorkflowTriggerTimeBasedAttribute} from './workflowTriggerTimeBasedAttribute';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeBasedAttributeTrigger(writer: SerializationWriter, timeBasedAttributeTrigger: TimeBasedAttributeTrigger | undefined = {} as TimeBasedAttributeTrigger) : void {
        serializeWorkflowExecutionTrigger(writer, timeBasedAttributeTrigger)
        writer.writeNumberValue("offsetInDays", timeBasedAttributeTrigger.offsetInDays);
        writer.writeEnumValue<WorkflowTriggerTimeBasedAttribute>("timeBasedAttribute", timeBasedAttributeTrigger.timeBasedAttribute);
}
