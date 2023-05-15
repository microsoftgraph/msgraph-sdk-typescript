import {createMessageRuleFromDiscriminatorValue} from './createMessageRuleFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {MessageRule} from './messageRule';
import {MessageRuleCollectionResponse} from './messageRuleCollectionResponse';
import {serializeMessageRule} from './serializeMessageRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMessageRuleCollectionResponse(messageRuleCollectionResponse: MessageRuleCollectionResponse | undefined = {} as MessageRuleCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(messageRuleCollectionResponse),
        "value": n => { messageRuleCollectionResponse.value = n.getCollectionOfObjectValues<MessageRule>(createMessageRuleFromDiscriminatorValue); },
    }
}
