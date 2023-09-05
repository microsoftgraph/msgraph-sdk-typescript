import { type ChatMessage } from '../../../../../../models/chatMessage';
import { serializeBaseDeltaFunctionResponse } from '../../../../../../models/serializeBaseDeltaFunctionResponse';
import { serializeChatMessage } from '../../../../../../models/serializeChatMessage';
import { type DeltaResponse } from './deltaResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(writer: SerializationWriter, deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<ChatMessage>("value", deltaResponse.value, serializeChatMessage);
}
