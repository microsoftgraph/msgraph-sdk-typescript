import {User} from '../user';
import {LifecycleWorkflowCategory} from './lifecycleWorkflowCategory';
import {Task} from './task';
import {WorkflowExecutionConditions} from './workflowExecutionConditions';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkflowBase extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The category property
     */
    category?: LifecycleWorkflowCategory | undefined;
    /**
     * The user who created the workflow.
     */
    createdBy?: User | undefined;
    /**
     * When a workflow was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * A string that describes the purpose of the workflow.
     */
    description?: string | undefined;
    /**
     * A string to identify the workflow.
     */
    displayName?: string | undefined;
    /**
     * Defines when and for who the workflow will run.
     */
    executionConditions?: WorkflowExecutionConditions | undefined;
    /**
     * Whether the workflow is enabled or disabled. If this setting is true, the workflow can be run on demand or on schedule when isSchedulingEnabled is true.
     */
    isEnabled?: boolean | undefined;
    /**
     * If true, the Lifecycle Workflow engine executes the workflow based on the schedule defined by tenant settings. Cannot be true for a disabled workflow (where isEnabled is false).
     */
    isSchedulingEnabled?: boolean | undefined;
    /**
     * The unique identifier of the AAD identity that last modified the workflow.
     */
    lastModifiedBy?: User | undefined;
    /**
     * When the workflow was last modified.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The tasks in the workflow.
     */
    tasks?: Task[] | undefined;
}
