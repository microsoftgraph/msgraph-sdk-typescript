import { deserializeIntoIosNetworkUsageRule } from './deserializeIntoIosNetworkUsageRule';
import { type IosNetworkUsageRule } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosNetworkUsageRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosNetworkUsageRule;
}
