import {DeviceComplianceScheduledActionForRuleCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceScheduledActionForRuleCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceComplianceScheduledActionForRuleCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceComplianceScheduledActionForRuleCollectionResponseImpl();
}
