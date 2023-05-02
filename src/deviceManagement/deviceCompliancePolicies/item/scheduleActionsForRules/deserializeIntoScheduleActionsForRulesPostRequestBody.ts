import {createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue} from '../../../../models/createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue';
import {DeviceComplianceScheduledActionForRule} from '../../../../models/deviceComplianceScheduledActionForRule';
import {serializeDeviceComplianceScheduledActionForRule} from '../../../../models/serializeDeviceComplianceScheduledActionForRule';
import {ScheduleActionsForRulesPostRequestBody} from './scheduleActionsForRulesPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoScheduleActionsForRulesPostRequestBody(scheduleActionsForRulesPostRequestBody: ScheduleActionsForRulesPostRequestBody | undefined = {} as ScheduleActionsForRulesPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "deviceComplianceScheduledActionForRules": n => { scheduleActionsForRulesPostRequestBody.deviceComplianceScheduledActionForRules = n.getCollectionOfObjectValues<DeviceComplianceScheduledActionForRule>(createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue); },
    }
}
