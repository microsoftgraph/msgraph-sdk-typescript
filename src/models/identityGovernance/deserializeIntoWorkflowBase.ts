import {createUserFromDiscriminatorValue} from '../createUserFromDiscriminatorValue';
import {serializeUser} from '../serializeUser';
import {User} from '../user';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createWorkflowExecutionConditionsFromDiscriminatorValue} from './createWorkflowExecutionConditionsFromDiscriminatorValue';
import {LifecycleWorkflowCategory} from './lifecycleWorkflowCategory';
import {serializeTask} from './serializeTask';
import {serializeWorkflowExecutionConditions} from './serializeWorkflowExecutionConditions';
import {Task} from './task';
import {WorkflowBase} from './workflowBase';
import {WorkflowExecutionConditions} from './workflowExecutionConditions';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkflowBase(workflowBase: WorkflowBase | undefined = {} as WorkflowBase) : Record<string, (node: ParseNode) => void> {
    return {
        "category": n => { workflowBase.category = n.getEnumValue<LifecycleWorkflowCategory>(LifecycleWorkflowCategory); },
        "createdBy": n => { workflowBase.createdBy = n.getObjectValue<User>(createUserFromDiscriminatorValue); },
        "createdDateTime": n => { workflowBase.createdDateTime = n.getDateValue(); },
        "description": n => { workflowBase.description = n.getStringValue(); },
        "displayName": n => { workflowBase.displayName = n.getStringValue(); },
        "executionConditions": n => { workflowBase.executionConditions = n.getObjectValue<WorkflowExecutionConditions>(createWorkflowExecutionConditionsFromDiscriminatorValue); },
        "isEnabled": n => { workflowBase.isEnabled = n.getBooleanValue(); },
        "isSchedulingEnabled": n => { workflowBase.isSchedulingEnabled = n.getBooleanValue(); },
        "lastModifiedBy": n => { workflowBase.lastModifiedBy = n.getObjectValue<User>(createUserFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { workflowBase.lastModifiedDateTime = n.getDateValue(); },
        "@odata.type": n => { workflowBase.odataType = n.getStringValue(); },
        "tasks": n => { workflowBase.tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
    }
}
