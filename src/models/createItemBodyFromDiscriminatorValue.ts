import { deserializeIntoItemBody } from './deserializeIntoItemBody';
import { type ItemBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createItemBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoItemBody;
}
