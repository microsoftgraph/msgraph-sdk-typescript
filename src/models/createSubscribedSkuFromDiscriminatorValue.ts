import {SubscribedSkuImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubscribedSkuFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubscribedSkuImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubscribedSkuImpl();
}
