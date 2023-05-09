import {deserializeIntoSubscribedSku} from './deserializeIntoSubscribedSku';
import {SubscribedSku} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubscribedSkuFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSubscribedSku;
}
