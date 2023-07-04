import {EmailSettings} from '../emailSettings';
import {serializeEmailSettings} from '../serializeEmailSettings';
import {serializeEntity} from '../serializeEntity';
import {LifecycleManagementSettings} from './lifecycleManagementSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLifecycleManagementSettings(writer: SerializationWriter, lifecycleManagementSettings: LifecycleManagementSettings | undefined = {} as LifecycleManagementSettings) : void {
        serializeEntity(writer, lifecycleManagementSettings)
        writer.writeObjectValue<EmailSettings>("emailSettings", lifecycleManagementSettings.emailSettings, serializeEmailSettings);
        writer.writeNumberValue("workflowScheduleIntervalInHours", lifecycleManagementSettings.workflowScheduleIntervalInHours);
}
