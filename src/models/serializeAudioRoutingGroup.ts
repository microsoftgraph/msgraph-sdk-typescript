import { type AudioRoutingGroup } from './audioRoutingGroup';
import { RoutingMode } from './routingMode';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAudioRoutingGroup(writer: SerializationWriter, audioRoutingGroup: AudioRoutingGroup | undefined = {} as AudioRoutingGroup) : void {
        serializeEntity(writer, audioRoutingGroup)
        writer.writeCollectionOfPrimitiveValues<string>("receivers", audioRoutingGroup.receivers);
        writer.writeEnumValue<RoutingMode>("routingMode", audioRoutingGroup.routingMode);
        writer.writeCollectionOfPrimitiveValues<string>("sources", audioRoutingGroup.sources);
}
