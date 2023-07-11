import {serializeSubjectSet} from '../serializeSubjectSet';
import {SubjectSet} from '../subjectSet';
import {serializeWorkflowExecutionConditions} from './serializeWorkflowExecutionConditions';
import {serializeWorkflowExecutionTrigger} from './serializeWorkflowExecutionTrigger';
import {TriggerAndScopeBasedConditions} from './triggerAndScopeBasedConditions';
import {WorkflowExecutionTrigger} from './workflowExecutionTrigger';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTriggerAndScopeBasedConditions(writer: SerializationWriter, triggerAndScopeBasedConditions: TriggerAndScopeBasedConditions | undefined = {} as TriggerAndScopeBasedConditions) : void {
        serializeWorkflowExecutionConditions(writer, triggerAndScopeBasedConditions)
        writer.writeObjectValue<SubjectSet>("scope", triggerAndScopeBasedConditions.scope, serializeSubjectSet);
        writer.writeObjectValue<WorkflowExecutionTrigger>("trigger", triggerAndScopeBasedConditions.trigger, serializeWorkflowExecutionTrigger);
}
