import {createDeviceComplianceActionItemFromDiscriminatorValue} from './createDeviceComplianceActionItemFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {DeviceComplianceActionItem} from './deviceComplianceActionItem';
import type {DeviceComplianceScheduledActionForRule} from './deviceComplianceScheduledActionForRule';
import {serializeDeviceComplianceActionItem} from './serializeDeviceComplianceActionItem';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceScheduledActionForRule(deviceComplianceScheduledActionForRule: DeviceComplianceScheduledActionForRule | undefined = {} as DeviceComplianceScheduledActionForRule) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceComplianceScheduledActionForRule),
        "ruleName": n => { deviceComplianceScheduledActionForRule.ruleName = n.getStringValue(); },
        "scheduledActionConfigurations": n => { deviceComplianceScheduledActionForRule.scheduledActionConfigurations = n.getCollectionOfObjectValues<DeviceComplianceActionItem>(createDeviceComplianceActionItemFromDiscriminatorValue); },
    }
}
