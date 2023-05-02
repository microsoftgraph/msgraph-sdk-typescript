import {DeviceComplianceActionItem} from './deviceComplianceActionItem';
import {DeviceComplianceScheduledActionForRule} from './deviceComplianceScheduledActionForRule';
import {serializeDeviceComplianceActionItem} from './serializeDeviceComplianceActionItem';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceScheduledActionForRule(writer: SerializationWriter, deviceComplianceScheduledActionForRule: DeviceComplianceScheduledActionForRule | undefined = {} as DeviceComplianceScheduledActionForRule) : void {
        serializeEntity(writer, deviceComplianceScheduledActionForRule)
        writer.writeStringValue("ruleName", deviceComplianceScheduledActionForRule.ruleName);
        writer.writeCollectionOfObjectValues<DeviceComplianceActionItem>("scheduledActionConfigurations", deviceComplianceScheduledActionForRule.scheduledActionConfigurations, serializeDeviceComplianceActionItem);
}
