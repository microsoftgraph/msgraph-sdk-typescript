import {DeviceComplianceScheduledActionForRule} from '../../../../models/deviceComplianceScheduledActionForRule';
import {serializeDeviceComplianceScheduledActionForRule} from '../../../../models/serializeDeviceComplianceScheduledActionForRule';
import {ScheduleActionsForRulesPostRequestBody} from './scheduleActionsForRulesPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeScheduleActionsForRulesPostRequestBody(writer: SerializationWriter, scheduleActionsForRulesPostRequestBody: ScheduleActionsForRulesPostRequestBody | undefined = {} as ScheduleActionsForRulesPostRequestBody) : void {
        writer.writeCollectionOfObjectValues<DeviceComplianceScheduledActionForRule>("deviceComplianceScheduledActionForRules", scheduleActionsForRulesPostRequestBody.deviceComplianceScheduledActionForRules, serializeDeviceComplianceScheduledActionForRule);
        writer.writeAdditionalData(scheduleActionsForRulesPostRequestBody.additionalData);
}
