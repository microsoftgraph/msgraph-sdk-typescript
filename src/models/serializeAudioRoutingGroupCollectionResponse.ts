import {AudioRoutingGroup} from './audioRoutingGroup';
import {AudioRoutingGroupCollectionResponse} from './audioRoutingGroupCollectionResponse';
import {serializeAudioRoutingGroup} from './serializeAudioRoutingGroup';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAudioRoutingGroupCollectionResponse(audioRoutingGroupCollectionResponse: AudioRoutingGroupCollectionResponse | undefined = {} as AudioRoutingGroupCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, audioRoutingGroupCollectionResponse)
        writer.writeCollectionOfObjectValues<AudioRoutingGroup>("value", audioRoutingGroupCollectionResponse.value, serializeAudioRoutingGroup);
}
