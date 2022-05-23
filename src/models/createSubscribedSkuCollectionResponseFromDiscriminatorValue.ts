import {SubscribedSkuCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubscribedSkuCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubscribedSkuCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubscribedSkuCollectionResponseImpl();
}
