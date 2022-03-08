import {MessageRuleCollectionResponse} from './messageRuleCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMessageRuleCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MessageRuleCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MessageRuleCollectionResponse();
}
