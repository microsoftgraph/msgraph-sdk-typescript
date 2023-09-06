import { type DeviceComplianceScheduledActionForRule } from '../../../../models/deviceComplianceScheduledActionForRule';
import { serializeDeviceComplianceScheduledActionForRule } from '../../../../models/serializeDeviceComplianceScheduledActionForRule';
import { type ScheduleActionsForRulesPostRequestBody } from './scheduleActionsForRulesPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeScheduleActionsForRulesPostRequestBody(writer: SerializationWriter, scheduleActionsForRulesPostRequestBody: ScheduleActionsForRulesPostRequestBody | undefined = {} as ScheduleActionsForRulesPostRequestBody) : void {
        writer.writeCollectionOfObjectValues<DeviceComplianceScheduledActionForRule>("deviceComplianceScheduledActionForRules", scheduleActionsForRulesPostRequestBody.deviceComplianceScheduledActionForRules, serializeDeviceComplianceScheduledActionForRule);
        writer.writeAdditionalData(scheduleActionsForRulesPostRequestBody.additionalData);
}
