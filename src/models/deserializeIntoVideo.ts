import {Video} from './video';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVideo(video: Video | undefined = {} as Video) : Record<string, (node: ParseNode) => void> {
    return {
        "audioBitsPerSample": n => { video.audioBitsPerSample = n.getNumberValue(); },
        "audioChannels": n => { video.audioChannels = n.getNumberValue(); },
        "audioFormat": n => { video.audioFormat = n.getStringValue(); },
        "audioSamplesPerSecond": n => { video.audioSamplesPerSecond = n.getNumberValue(); },
        "bitrate": n => { video.bitrate = n.getNumberValue(); },
        "duration": n => { video.duration = n.getNumberValue(); },
        "fourCC": n => { video.fourCC = n.getStringValue(); },
        "frameRate": n => { video.frameRate = n.getNumberValue(); },
        "height": n => { video.height = n.getNumberValue(); },
        "@odata.type": n => { video.odataType = n.getStringValue(); },
        "width": n => { video.width = n.getNumberValue(); },
    }
}
