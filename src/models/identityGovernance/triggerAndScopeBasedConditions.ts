import type {SubjectSet} from '../subjectSet';
import type {WorkflowExecutionConditions} from './workflowExecutionConditions';
import type {WorkflowExecutionTrigger} from './workflowExecutionTrigger';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface TriggerAndScopeBasedConditions extends Parsable, WorkflowExecutionConditions {
    /**
     * Defines who the workflow runs for.
     */
    scope?: SubjectSet | undefined;
    /**
     * What triggers a workflow to run.
     */
    trigger?: WorkflowExecutionTrigger | undefined;
}
