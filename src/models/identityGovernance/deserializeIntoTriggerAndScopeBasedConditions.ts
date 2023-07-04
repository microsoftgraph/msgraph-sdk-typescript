import {createSubjectSetFromDiscriminatorValue} from '../createSubjectSetFromDiscriminatorValue';
import {serializeSubjectSet} from '../serializeSubjectSet';
import {SubjectSet} from '../subjectSet';
import {createWorkflowExecutionTriggerFromDiscriminatorValue} from './createWorkflowExecutionTriggerFromDiscriminatorValue';
import {deserializeIntoWorkflowExecutionConditions} from './deserializeIntoWorkflowExecutionConditions';
import {serializeWorkflowExecutionTrigger} from './serializeWorkflowExecutionTrigger';
import {TriggerAndScopeBasedConditions} from './triggerAndScopeBasedConditions';
import {WorkflowExecutionTrigger} from './workflowExecutionTrigger';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTriggerAndScopeBasedConditions(triggerAndScopeBasedConditions: TriggerAndScopeBasedConditions | undefined = {} as TriggerAndScopeBasedConditions) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWorkflowExecutionConditions(triggerAndScopeBasedConditions),
        "scope": n => { triggerAndScopeBasedConditions.scope = n.getObjectValue<SubjectSet>(createSubjectSetFromDiscriminatorValue); },
        "trigger": n => { triggerAndScopeBasedConditions.trigger = n.getObjectValue<WorkflowExecutionTrigger>(createWorkflowExecutionTriggerFromDiscriminatorValue); },
    }
}
