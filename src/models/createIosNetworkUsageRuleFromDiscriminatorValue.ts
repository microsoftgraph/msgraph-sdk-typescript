import {IosNetworkUsageRule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosNetworkUsageRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosNetworkUsageRule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosNetworkUsageRule();
}
