import {DeviceComplianceScheduledActionForRuleImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceComplianceScheduledActionForRuleImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceComplianceScheduledActionForRuleImpl();
}
