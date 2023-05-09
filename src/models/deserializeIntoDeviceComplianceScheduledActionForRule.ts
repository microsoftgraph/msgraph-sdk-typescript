import {createDeviceComplianceActionItemFromDiscriminatorValue} from './createDeviceComplianceActionItemFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceComplianceActionItem} from './deviceComplianceActionItem';
import {DeviceComplianceScheduledActionForRule} from './deviceComplianceScheduledActionForRule';
import {serializeDeviceComplianceActionItem} from './serializeDeviceComplianceActionItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceScheduledActionForRule(deviceComplianceScheduledActionForRule: DeviceComplianceScheduledActionForRule | undefined = {} as DeviceComplianceScheduledActionForRule) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceComplianceScheduledActionForRule),
        "ruleName": n => { deviceComplianceScheduledActionForRule.ruleName = n.getStringValue(); },
        "scheduledActionConfigurations": n => { deviceComplianceScheduledActionForRule.scheduledActionConfigurations = n.getCollectionOfObjectValues<DeviceComplianceActionItem>(createDeviceComplianceActionItemFromDiscriminatorValue); },
    }
}
