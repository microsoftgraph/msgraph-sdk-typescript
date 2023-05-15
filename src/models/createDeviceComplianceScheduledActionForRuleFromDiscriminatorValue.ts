import {deserializeIntoDeviceComplianceScheduledActionForRule} from './deserializeIntoDeviceComplianceScheduledActionForRule';
import {DeviceComplianceScheduledActionForRule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceComplianceScheduledActionForRule;
}
