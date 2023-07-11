import {SubjectSet} from '../subjectSet';
import {WorkflowExecutionConditions} from './workflowExecutionConditions';
import {WorkflowExecutionTrigger} from './workflowExecutionTrigger';
import {Parsable} from '@microsoft/kiota-abstractions';

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
