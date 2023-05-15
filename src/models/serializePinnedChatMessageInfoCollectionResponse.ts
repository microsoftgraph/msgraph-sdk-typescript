import {PinnedChatMessageInfo} from './pinnedChatMessageInfo';
import {PinnedChatMessageInfoCollectionResponse} from './pinnedChatMessageInfoCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePinnedChatMessageInfo} from './serializePinnedChatMessageInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePinnedChatMessageInfoCollectionResponse(writer: SerializationWriter, pinnedChatMessageInfoCollectionResponse: PinnedChatMessageInfoCollectionResponse | undefined = {} as PinnedChatMessageInfoCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, pinnedChatMessageInfoCollectionResponse)
        writer.writeCollectionOfObjectValues<PinnedChatMessageInfo>("value", pinnedChatMessageInfoCollectionResponse.value, serializePinnedChatMessageInfo);
}
