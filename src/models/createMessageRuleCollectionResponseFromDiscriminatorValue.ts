import { deserializeIntoMessageRuleCollectionResponse } from './deserializeIntoMessageRuleCollectionResponse';
import { type MessageRuleCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMessageRuleCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMessageRuleCollectionResponse;
}
