import type {ChatMessage} from '../../../../../../../models/chatMessage';
import {createChatMessageFromDiscriminatorValue} from '../../../../../../../models/createChatMessageFromDiscriminatorValue';
import {deserializeIntoBaseDeltaFunctionResponse} from '../../../../../../../models/deserializeIntoBaseDeltaFunctionResponse';
import {serializeChatMessage} from '../../../../../../../models/serializeChatMessage';
import type {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaResponse),
        "value": n => { deltaResponse.value = n.getCollectionOfObjectValues<ChatMessage>(createChatMessageFromDiscriminatorValue); },
    }
}
