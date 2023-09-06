import { deserializeIntoSubscribedSku } from './deserializeIntoSubscribedSku';
import { type SubscribedSku } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSubscribedSkuFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSubscribedSku;
}
