import {MessageRule} from './messageRule';
import {MessageRuleCollectionResponse} from './messageRuleCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMessageRule} from './serializeMessageRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMessageRuleCollectionResponse(writer: SerializationWriter, messageRuleCollectionResponse: MessageRuleCollectionResponse | undefined = {} as MessageRuleCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, messageRuleCollectionResponse)
        writer.writeCollectionOfObjectValues<MessageRule>("value", messageRuleCollectionResponse.value, serializeMessageRule);
}
