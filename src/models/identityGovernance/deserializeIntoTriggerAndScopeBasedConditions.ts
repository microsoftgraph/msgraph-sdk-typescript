import { createSubjectSetFromDiscriminatorValue } from '../createSubjectSetFromDiscriminatorValue';
import { serializeSubjectSet } from '../serializeSubjectSet';
import { type SubjectSet } from '../subjectSet';
import { createWorkflowExecutionTriggerFromDiscriminatorValue } from './createWorkflowExecutionTriggerFromDiscriminatorValue';
import { deserializeIntoWorkflowExecutionConditions } from './deserializeIntoWorkflowExecutionConditions';
import { serializeWorkflowExecutionTrigger } from './serializeWorkflowExecutionTrigger';
import { type TriggerAndScopeBasedConditions } from './triggerAndScopeBasedConditions';
import { type WorkflowExecutionTrigger } from './workflowExecutionTrigger';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTriggerAndScopeBasedConditions(triggerAndScopeBasedConditions: TriggerAndScopeBasedConditions | undefined = {} as TriggerAndScopeBasedConditions) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWorkflowExecutionConditions(triggerAndScopeBasedConditions),
        "scope": n => { triggerAndScopeBasedConditions.scope = n.getObjectValue<SubjectSet>(createSubjectSetFromDiscriminatorValue); },
        "trigger": n => { triggerAndScopeBasedConditions.trigger = n.getObjectValue<WorkflowExecutionTrigger>(createWorkflowExecutionTriggerFromDiscriminatorValue); },
    }
}
