import { type AudioRoutingGroup } from './audioRoutingGroup';
import { type AudioRoutingGroupCollectionResponse } from './audioRoutingGroupCollectionResponse';
import { serializeAudioRoutingGroup } from './serializeAudioRoutingGroup';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAudioRoutingGroupCollectionResponse(writer: SerializationWriter, audioRoutingGroupCollectionResponse: AudioRoutingGroupCollectionResponse | undefined = {} as AudioRoutingGroupCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, audioRoutingGroupCollectionResponse)
        writer.writeCollectionOfObjectValues<AudioRoutingGroup>("value", audioRoutingGroupCollectionResponse.value, serializeAudioRoutingGroup);
}
