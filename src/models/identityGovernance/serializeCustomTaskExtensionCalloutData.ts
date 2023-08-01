import {serializeCustomExtensionData} from '../serializeCustomExtensionData';
import {serializeUser} from '../serializeUser';
import type {User} from '../user';
import type {CustomTaskExtensionCalloutData} from './customTaskExtensionCalloutData';
import {serializeTask} from './serializeTask';
import {serializeTaskProcessingResult} from './serializeTaskProcessingResult';
import {serializeWorkflow} from './serializeWorkflow';
import type {Task} from './task';
import type {TaskProcessingResult} from './taskProcessingResult';
import type {Workflow} from './workflow';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCustomTaskExtensionCalloutData(writer: SerializationWriter, customTaskExtensionCalloutData: CustomTaskExtensionCalloutData | undefined = {} as CustomTaskExtensionCalloutData) : void {
        serializeCustomExtensionData(writer, customTaskExtensionCalloutData)
        writer.writeObjectValue<User>("subject", customTaskExtensionCalloutData.subject, serializeUser);
        writer.writeObjectValue<Task>("task", customTaskExtensionCalloutData.task, serializeTask);
        writer.writeObjectValue<TaskProcessingResult>("taskProcessingresult", customTaskExtensionCalloutData.taskProcessingresult, serializeTaskProcessingResult);
        writer.writeObjectValue<Workflow>("workflow", customTaskExtensionCalloutData.workflow, serializeWorkflow);
}
