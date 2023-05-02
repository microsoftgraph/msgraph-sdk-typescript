import {Audio} from './audio';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAudio(audio: Audio | undefined = {} as Audio) : Record<string, (node: ParseNode) => void> {
    return {
        "album": n => { audio.album = n.getStringValue(); },
        "albumArtist": n => { audio.albumArtist = n.getStringValue(); },
        "artist": n => { audio.artist = n.getStringValue(); },
        "bitrate": n => { audio.bitrate = n.getNumberValue(); },
        "composers": n => { audio.composers = n.getStringValue(); },
        "copyright": n => { audio.copyright = n.getStringValue(); },
        "disc": n => { audio.disc = n.getNumberValue(); },
        "discCount": n => { audio.discCount = n.getNumberValue(); },
        "duration": n => { audio.duration = n.getNumberValue(); },
        "genre": n => { audio.genre = n.getStringValue(); },
        "hasDrm": n => { audio.hasDrm = n.getBooleanValue(); },
        "isVariableBitrate": n => { audio.isVariableBitrate = n.getBooleanValue(); },
        "@odata.type": n => { audio.odataType = n.getStringValue(); },
        "title": n => { audio.title = n.getStringValue(); },
        "track": n => { audio.track = n.getNumberValue(); },
        "trackCount": n => { audio.trackCount = n.getNumberValue(); },
        "year": n => { audio.year = n.getNumberValue(); },
    }
}
