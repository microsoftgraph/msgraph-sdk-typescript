import {MediaDirection} from './mediaDirection';
import {MediaStream} from './mediaStream';
import {Modality} from './modality';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaStream(mediaStream: MediaStream | undefined = {} as MediaStream) : Record<string, (node: ParseNode) => void> {
    return {
        "direction": n => { mediaStream.direction = n.getEnumValue<MediaDirection>(MediaDirection); },
        "label": n => { mediaStream.label = n.getStringValue(); },
        "mediaType": n => { mediaStream.mediaType = n.getEnumValue<Modality>(Modality); },
        "@odata.type": n => { mediaStream.odataType = n.getStringValue(); },
        "serverMuted": n => { mediaStream.serverMuted = n.getBooleanValue(); },
        "sourceId": n => { mediaStream.sourceId = n.getStringValue(); },
    }
}
