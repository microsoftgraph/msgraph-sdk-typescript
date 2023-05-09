import {deserializeIntoIosNetworkUsageRule} from './deserializeIntoIosNetworkUsageRule';
import {IosNetworkUsageRule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosNetworkUsageRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosNetworkUsageRule;
}
