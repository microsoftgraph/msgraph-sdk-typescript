import {ChatMessage} from '../../../../../../../../models/chatMessage';
import {serializeBaseDeltaFunctionResponse} from '../../../../../../../../models/serializeBaseDeltaFunctionResponse';
import {serializeChatMessage} from '../../../../../../../../models/serializeChatMessage';
import {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(writer: SerializationWriter, deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<ChatMessage>("value", deltaResponse.value, serializeChatMessage);
}
