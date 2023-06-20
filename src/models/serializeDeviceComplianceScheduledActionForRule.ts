import {DeviceComplianceActionItem} from './deviceComplianceActionItem';
import {DeviceComplianceScheduledActionForRule} from './deviceComplianceScheduledActionForRule';
import {serializeDeviceComplianceActionItem} from './serializeDeviceComplianceActionItem';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceScheduledActionForRule(deviceComplianceScheduledActionForRule: DeviceComplianceScheduledActionForRule | undefined = {} as DeviceComplianceScheduledActionForRule, writer: SerializationWriter) : void {
        serializeEntity(writer, deviceComplianceScheduledActionForRule)
        writer.writeStringValue("ruleName", deviceComplianceScheduledActionForRule.ruleName);
        writer.writeCollectionOfObjectValues<DeviceComplianceActionItem>("scheduledActionConfigurations", deviceComplianceScheduledActionForRule.scheduledActionConfigurations, serializeDeviceComplianceActionItem);
}
