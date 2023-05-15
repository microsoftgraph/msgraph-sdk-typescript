import {deserializeIntoDeviceComplianceScheduledActionForRuleCollectionResponse} from './deserializeIntoDeviceComplianceScheduledActionForRuleCollectionResponse';
import {DeviceComplianceScheduledActionForRuleCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceScheduledActionForRuleCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceComplianceScheduledActionForRuleCollectionResponse;
}
