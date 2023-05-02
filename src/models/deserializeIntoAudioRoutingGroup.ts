import {AudioRoutingGroup} from './audioRoutingGroup';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {RoutingMode} from './routingMode';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAudioRoutingGroup(audioRoutingGroup: AudioRoutingGroup | undefined = {} as AudioRoutingGroup) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(audioRoutingGroup),
        "receivers": n => { audioRoutingGroup.receivers = n.getCollectionOfPrimitiveValues<string>(); },
        "routingMode": n => { audioRoutingGroup.routingMode = n.getEnumValue<RoutingMode>(RoutingMode); },
        "sources": n => { audioRoutingGroup.sources = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
