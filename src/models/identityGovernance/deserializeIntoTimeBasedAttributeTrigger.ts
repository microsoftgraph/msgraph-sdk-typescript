import {deserializeIntoWorkflowExecutionTrigger} from './deserializeIntoWorkflowExecutionTrigger';
import {TimeBasedAttributeTrigger} from './timeBasedAttributeTrigger';
import {WorkflowTriggerTimeBasedAttribute} from './workflowTriggerTimeBasedAttribute';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeBasedAttributeTrigger(timeBasedAttributeTrigger: TimeBasedAttributeTrigger | undefined = {} as TimeBasedAttributeTrigger) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWorkflowExecutionTrigger(timeBasedAttributeTrigger),
        "offsetInDays": n => { timeBasedAttributeTrigger.offsetInDays = n.getNumberValue(); },
        "timeBasedAttribute": n => { timeBasedAttributeTrigger.timeBasedAttribute = n.getEnumValue<WorkflowTriggerTimeBasedAttribute>(WorkflowTriggerTimeBasedAttribute); },
    }
}
