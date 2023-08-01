import {createUserFromDiscriminatorValue} from '../createUserFromDiscriminatorValue';
import {deserializeIntoCustomExtensionData} from '../deserializeIntoCustomExtensionData';
import {serializeUser} from '../serializeUser';
import type {User} from '../user';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTaskProcessingResultFromDiscriminatorValue} from './createTaskProcessingResultFromDiscriminatorValue';
import {createWorkflowFromDiscriminatorValue} from './createWorkflowFromDiscriminatorValue';
import type {CustomTaskExtensionCalloutData} from './customTaskExtensionCalloutData';
import {serializeTask} from './serializeTask';
import {serializeTaskProcessingResult} from './serializeTaskProcessingResult';
import {serializeWorkflow} from './serializeWorkflow';
import type {Task} from './task';
import type {TaskProcessingResult} from './taskProcessingResult';
import type {Workflow} from './workflow';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomTaskExtensionCalloutData(customTaskExtensionCalloutData: CustomTaskExtensionCalloutData | undefined = {} as CustomTaskExtensionCalloutData) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCustomExtensionData(customTaskExtensionCalloutData),
        "subject": n => { customTaskExtensionCalloutData.subject = n.getObjectValue<User>(createUserFromDiscriminatorValue); },
        "task": n => { customTaskExtensionCalloutData.task = n.getObjectValue<Task>(createTaskFromDiscriminatorValue); },
        "taskProcessingresult": n => { customTaskExtensionCalloutData.taskProcessingresult = n.getObjectValue<TaskProcessingResult>(createTaskProcessingResultFromDiscriminatorValue); },
        "workflow": n => { customTaskExtensionCalloutData.workflow = n.getObjectValue<Workflow>(createWorkflowFromDiscriminatorValue); },
    }
}
