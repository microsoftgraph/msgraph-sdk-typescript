import {DeviceComplianceScheduledActionForRuleCollectionResponse} from './deviceComplianceScheduledActionForRuleCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceScheduledActionForRuleCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceComplianceScheduledActionForRuleCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceComplianceScheduledActionForRuleCollectionResponse();
}
