import {createEmailSettingsFromDiscriminatorValue} from '../createEmailSettingsFromDiscriminatorValue';
import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {EmailSettings} from '../emailSettings';
import {serializeEmailSettings} from '../serializeEmailSettings';
import {LifecycleManagementSettings} from './lifecycleManagementSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLifecycleManagementSettings(lifecycleManagementSettings: LifecycleManagementSettings | undefined = {} as LifecycleManagementSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(lifecycleManagementSettings),
        "emailSettings": n => { lifecycleManagementSettings.emailSettings = n.getObjectValue<EmailSettings>(createEmailSettingsFromDiscriminatorValue); },
        "workflowScheduleIntervalInHours": n => { lifecycleManagementSettings.workflowScheduleIntervalInHours = n.getNumberValue(); },
    }
}
