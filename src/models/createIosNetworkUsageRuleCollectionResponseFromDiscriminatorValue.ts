import {IosNetworkUsageRuleCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosNetworkUsageRuleCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosNetworkUsageRuleCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosNetworkUsageRuleCollectionResponse();
}
