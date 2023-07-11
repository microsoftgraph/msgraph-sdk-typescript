import {serializeCustomExtensionData} from '../serializeCustomExtensionData';
import {serializeUser} from '../serializeUser';
import {User} from '../user';
import {CustomTaskExtensionCalloutData} from './customTaskExtensionCalloutData';
import {serializeTask} from './serializeTask';
import {serializeTaskProcessingResult} from './serializeTaskProcessingResult';
import {serializeWorkflow} from './serializeWorkflow';
import {Task} from './task';
import {TaskProcessingResult} from './taskProcessingResult';
import {Workflow} from './workflow';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCustomTaskExtensionCalloutData(writer: SerializationWriter, customTaskExtensionCalloutData: CustomTaskExtensionCalloutData | undefined = {} as CustomTaskExtensionCalloutData) : void {
        serializeCustomExtensionData(writer, customTaskExtensionCalloutData)
        writer.writeObjectValue<User>("subject", customTaskExtensionCalloutData.subject, serializeUser);
        writer.writeObjectValue<Task>("task", customTaskExtensionCalloutData.task, serializeTask);
        writer.writeObjectValue<TaskProcessingResult>("taskProcessingresult", customTaskExtensionCalloutData.taskProcessingresult, serializeTaskProcessingResult);
        writer.writeObjectValue<Workflow>("workflow", customTaskExtensionCalloutData.workflow, serializeWorkflow);
}
