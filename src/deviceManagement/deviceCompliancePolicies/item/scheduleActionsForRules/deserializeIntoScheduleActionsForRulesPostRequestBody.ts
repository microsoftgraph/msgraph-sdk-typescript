import { createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue } from '../../../../models/createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue';
import { type DeviceComplianceScheduledActionForRule } from '../../../../models/deviceComplianceScheduledActionForRule';
import { serializeDeviceComplianceScheduledActionForRule } from '../../../../models/serializeDeviceComplianceScheduledActionForRule';
import { type ScheduleActionsForRulesPostRequestBody } from './scheduleActionsForRulesPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoScheduleActionsForRulesPostRequestBody(scheduleActionsForRulesPostRequestBody: ScheduleActionsForRulesPostRequestBody | undefined = {} as ScheduleActionsForRulesPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "deviceComplianceScheduledActionForRules": n => { scheduleActionsForRulesPostRequestBody.deviceComplianceScheduledActionForRules = n.getCollectionOfObjectValues<DeviceComplianceScheduledActionForRule>(createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue); },
    }
}
