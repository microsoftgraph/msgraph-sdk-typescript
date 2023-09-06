import { type PinnedChatMessageInfo } from './pinnedChatMessageInfo';
import { type PinnedChatMessageInfoCollectionResponse } from './pinnedChatMessageInfoCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializePinnedChatMessageInfo } from './serializePinnedChatMessageInfo';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePinnedChatMessageInfoCollectionResponse(writer: SerializationWriter, pinnedChatMessageInfoCollectionResponse: PinnedChatMessageInfoCollectionResponse | undefined = {} as PinnedChatMessageInfoCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, pinnedChatMessageInfoCollectionResponse)
        writer.writeCollectionOfObjectValues<PinnedChatMessageInfo>("value", pinnedChatMessageInfoCollectionResponse.value, serializePinnedChatMessageInfo);
}
