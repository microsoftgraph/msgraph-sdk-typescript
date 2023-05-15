import {createPinnedChatMessageInfoFromDiscriminatorValue} from './createPinnedChatMessageInfoFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {PinnedChatMessageInfo} from './pinnedChatMessageInfo';
import {PinnedChatMessageInfoCollectionResponse} from './pinnedChatMessageInfoCollectionResponse';
import {serializePinnedChatMessageInfo} from './serializePinnedChatMessageInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPinnedChatMessageInfoCollectionResponse(pinnedChatMessageInfoCollectionResponse: PinnedChatMessageInfoCollectionResponse | undefined = {} as PinnedChatMessageInfoCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(pinnedChatMessageInfoCollectionResponse),
        "value": n => { pinnedChatMessageInfoCollectionResponse.value = n.getCollectionOfObjectValues<PinnedChatMessageInfo>(createPinnedChatMessageInfoFromDiscriminatorValue); },
    }
}
