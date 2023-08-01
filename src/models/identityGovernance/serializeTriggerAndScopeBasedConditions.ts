import {serializeSubjectSet} from '../serializeSubjectSet';
import type {SubjectSet} from '../subjectSet';
import {serializeWorkflowExecutionConditions} from './serializeWorkflowExecutionConditions';
import {serializeWorkflowExecutionTrigger} from './serializeWorkflowExecutionTrigger';
import type {TriggerAndScopeBasedConditions} from './triggerAndScopeBasedConditions';
import type {WorkflowExecutionTrigger} from './workflowExecutionTrigger';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTriggerAndScopeBasedConditions(writer: SerializationWriter, triggerAndScopeBasedConditions: TriggerAndScopeBasedConditions | undefined = {} as TriggerAndScopeBasedConditions) : void {
        serializeWorkflowExecutionConditions(writer, triggerAndScopeBasedConditions)
        writer.writeObjectValue<SubjectSet>("scope", triggerAndScopeBasedConditions.scope, serializeSubjectSet);
        writer.writeObjectValue<WorkflowExecutionTrigger>("trigger", triggerAndScopeBasedConditions.trigger, serializeWorkflowExecutionTrigger);
}
