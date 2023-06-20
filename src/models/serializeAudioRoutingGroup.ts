import {AudioRoutingGroup} from './audioRoutingGroup';
import {RoutingMode} from './routingMode';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAudioRoutingGroup(audioRoutingGroup: AudioRoutingGroup | undefined = {} as AudioRoutingGroup, writer: SerializationWriter) : void {
        serializeEntity(writer, audioRoutingGroup)
        writer.writeCollectionOfPrimitiveValues<string>("receivers", audioRoutingGroup.receivers);
        writer.writeEnumValue<RoutingMode>("routingMode", audioRoutingGroup.routingMode);
        writer.writeCollectionOfPrimitiveValues<string>("sources", audioRoutingGroup.sources);
}
