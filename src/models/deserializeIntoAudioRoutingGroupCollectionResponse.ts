import { type AudioRoutingGroup } from './audioRoutingGroup';
import { type AudioRoutingGroupCollectionResponse } from './audioRoutingGroupCollectionResponse';
import { createAudioRoutingGroupFromDiscriminatorValue } from './createAudioRoutingGroupFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeAudioRoutingGroup } from './serializeAudioRoutingGroup';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAudioRoutingGroupCollectionResponse(audioRoutingGroupCollectionResponse: AudioRoutingGroupCollectionResponse | undefined = {} as AudioRoutingGroupCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(audioRoutingGroupCollectionResponse),
        "value": n => { audioRoutingGroupCollectionResponse.value = n.getCollectionOfObjectValues<AudioRoutingGroup>(createAudioRoutingGroupFromDiscriminatorValue); },
    }
}
